<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <form @submit.prevent="updateProfile">
        <div class="flex-center">
          <InputsImgInput
            :modelValue="userImg"
            id="profileImg"
            @update:modelValue="updateImageUrl"
            @removeImage="removeImage"
          />
        </div>
        <inputs-form-control id="name" v-model="name">
          {{ $t("name") }}
        </inputs-form-control>
        <div class="form-group">
          <label class="form-label">
            <span class="m-end-5"> {{ $t("city") }} </span>
            <span class="text-danger">*</span>
          </label>
          <Dropdown
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            class="w-100 form-control d-flex justify-content-between"
            @change="selectRegions"
          />
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="m-end-5"> {{ $t("Region") }} </span>
            <span class="text-danger">*</span>
          </label>
          <Dropdown
            v-model="selectedRegion"
            :options="regions"
            optionLabel="name"
            class="w-100 form-control d-flex justify-content-between"
          />
        </div>
        <div class="form-group">
          <inputs-form-control
            textarea
            name="descripe"
            rows="5"
            v-model="description"
          >
            {{ $t("description") }}
          </inputs-form-control>
        </div>
        <div class="flex-center">
          <ui-base-button mode="main_btn flex-50">
            {{ $t("save_edits") }}
          </ui-base-button>
        </div>
      </form>
      <toast />
    </div>
  </div>
</template>

<script>
import MultiSelect from "primevue/multiselect";
import { useAuthStore } from "@/store/authStore";

export default {
  components: {
    MultiSelect,
  },
  data() {
    return {
      axios: useNuxtApp().$axios,
      localePath: useLocalePath(),
      selectedCity: null,
      selectedRegion: null,
      userImg: "",
      description: "",
      name: "",
      cities: [],
      regions: [],
      user: "",
      formData: "",

      imgSrc: new URL("../../../assets/imgs/G2.png", import.meta.url),
    };
  },

  mounted() {
    this.token = useAuthStore().token;
    this.user = useAuthStore().user;
    this.userImg = this.user.image;
    this.name = this.user.name;
    (this.selectedCity = { id: 2, name: "مكة المكرمة" }),
      (this.selectedCity = this.user.city),
      console.log(this.user.city.id);

    (this.selectedRegion = this.user.region),
      (this.description = this.user.description);

    this.axios
      .get("/cities")
      .then((response) => {
        this.cities = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      }),
      this.axios
        .get(`regions/${this.selectedCity.id}`)
        .then((response) => {
          this.regions = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  },

  methods: {
    updateImageUrl(newImageUrl) {
      this.imageUrl = newImageUrl;
    },
    removeImage() {
      this.imageUrl = "";
    },

    selectRegions() {
      this.axios
        .get(`regions/${this.selectedCity.id}`)
        .then((response) => {
          this.regions = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async updateProfile() {
      this.formData = {
        img: this.userImg,
        name: this.name,
        region_id: this.selectRegions.id,
        city_id: this.selectRegions.id,
        description: this.description,
      };
      await this.axios
        .post("/update-profile", this.formData, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.data.key == "success") {
          this.$toast.add({ detail: `${response.data.msg}`, life: 3000 });
          }else{
            this.$toast.add({ detail: `${response.data.msg}`, life: 3000 });
          }
        })
        .catch((error) =>{
          this.$toast.add({ detail: `${error}`, life: 3000 });
        } )
    },
  },
};
</script>

<style lang="scss">
.base-image-input {
  border-radius: 50% !important;

  .select {
    border-radius: 50% !important;
  }
}
</style>
