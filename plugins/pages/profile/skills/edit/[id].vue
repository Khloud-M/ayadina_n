<template>
    <ui-main-title> تعديل مهارة </ui-main-title>
    <div class="row justify-content-center">
        <div class="col-md-10 ">
            <form @submit.prevent="addSkill" enctype="multipart/form-data">
                <!-- <inputs-form-control id="nameAr" type="text" v-model="selectedSkill.title"> اسم المهارة باللغة العربية
                </inputs-form-control>
                <inputs-form-control id="nameEn" type="text" v-model="selectedSkill.title"> اسم المهارة باللغة الانجليزية
                </inputs-form-control>

                <inputs-form-control id="mainSection" type="text" v-model="selectedSkill.category.name"> القسم
                    الرئيسيي</inputs-form-control>
                <inputs-form-control id="subSection" v-model="selectedSkill.sub_category.name"> القسم الفرعي
                </inputs-form-control>
                <inputs-form-control textarea id="descripe" v-model="selectedSkill.description"> وصف المهارة
                </inputs-form-control> -->
                <div class="form-group">
                    <label class="form-label">
                        <span class="m-end-5">المدينة</span>

                        <span class="text-danger">*</span>
                    </label>
                    <MultiSelect v-model="cityName" :options="cities" optionLabel="name" :maxSelectedLabels="8"
                        class="w-100" />
                </div>
                <div class="form-group">
                    <label class="form-label">
                        <span class="m-end-5">المناطق</span>
                        <span class="text-danger">*</span>
                    </label>

                    <MultiSelect v-model="selectRegions" :options="regions" class="w-100" />
                </div>
                <div class="d-flex gap-20 mb-3">
                    <inputs-imgInput v-for="imSrc in selectedSkill.images" :key="imSrc" :v-model="imSrc" :img="imSrc"
                        :edit="true" :removeSrcMethod="() => removeSrc(index)"></inputs-imgInput>
                </div>
                <div class="flex-center">
                    <baseButton class="main_btn lg" @click="visible = true" label="Show"> تعديل مهارة</baseButton>
                </div>
            </form>
        </div>
    </div>
    <Dialog v-model:visible="visible" modal :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <font-awesome-icon icon="fa-regular fa-circle-check" class="modal-exclam-mark mb-3 main_color" />
        <h6 class="text-center mb-3">تم تعديل المهارة بنجاح</h6>
        <div class="flex-center">
            <ui-base-button mode="main_btn" @click="visible = false" link :to="'/skillDetails/' + this.selectedSkill.id">
                رجوع
            </ui-base-button>
        </div>
    </Dialog>
</template>
<script>
import multiSelect from '../../../components/inputs/multiSelect.vue';
import Dialog from 'primevue/dialog';
import { useAuthStore } from '@/store/authStore';

export default {
    props: ['id'],
    components: {
        multiSelect,
        Dialog,

    },
    data() {
        return {
            axios: useNuxtApp().$axios,
            visible: false,
            arName: '',
            enName: '',
            mainSection: '',
            subSection: '',
            descripe: '',
            selectedCities: null,
            selectedGovernorates: null,
            Governorates: '',
            imgs: [],
            Governorate: '',
            cities: [

            ],
            regions: [
            ],
            selectedSkill: '',
            filePreview: '',
            fileName: '',
            selectedSkill: '',
            formdata: '',
            cityName: null,
            regionsName: [],
            lang: useNuxtApp().$i18n.locale,
            selectedCityIds: []

        }
    },
    methods: {

        removeSrc(index) {
            // Remove the image source at the specified index
            this.selectedSkill.images.splice(index, 1);
            console.log(this.selectedSkill.images)
        },

    },
    mounted() {
        this.axios.get('/cities')
            .then((response) => {
                this.cities = response.data.data
                console.log(this.cities)

            })
            .catch(function (error) {
                console.log(error);
            })
        console.log(this.lang)
        this.token = useAuthStore().token

        this.axios.get(`skill-details/${useRoute().params.id}`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        })
            .then((response) => {
                this.selectedSkill = response.data.data
                console.log(response.data.data)

                for (let i = 0; i < this.selectedSkill.cities.length; i++) {
                    this.cityName.push({
                        name: this.selectedSkill.cities[i],
                        // id: this.selectedSkill.cities[i],
                    })
                }
                // console.log(this.selectedSkill.cities)
                // this.cityName = this.selectedSkill.cities
                console.log(this.cityName)

            })
            .catch(function (error) {
                console.log(error);
            })
    },

}

</script>
<style scoped>
.base-image-input {
    width: 130px;
    height: 130px;
    margin: 0 !important;
}
</style>