<template>
    <ui-main-title> إضافة مهارة </ui-main-title>
    <ul>
        <li v-for="n in name" :key="n.id">
            <p> v-if English: {{ n.en }}</p>
            <p>Arabic: {{ n.ar }}</p>
        </li>
    </ul>
    <div class="row justify-content-center">
        <div class="col-md-10 ">
            <form @submit.prevent="addSkill">
                <inputs-form-control id="nameAr" type="text" v-model="arName"> اسم المهارة باللغة العربية
                </inputs-form-control>
                <inputs-form-control id="nameEn" type="text" v-model="enName"> اسم المهارة باللغة الانجليزية
                </inputs-form-control>
                <div class="form-group">
                    <label class="form-label">
                        <span class="m-end-5"> القسم الرئيسي </span>
                        <span class="text-danger">*</span>
                    </label>
                    <InputsSelect v-model="selectedCategory" :options="categories" optionLabel="name"
                        @change="selectSubCategory" />
                </div>
                <div class="form-group">
                    <label class="form-label">
                        <span class="m-end-5"> القسم الفرعي </span>
                        <span class="text-danger">*</span>
                    </label>
                    <InputsSelect v-model="selectedSubCategory" :options="subCategories" optionLabel="name.ar"
                        v-if="arLang" />
                        <InputsSelect v-model="selectedSubCategory" :options="subCategories" optionLabel="name.en"
                        v-else />
                  
                </div>
                <div class="form-group">
                    <label class="form-label">
                        <span class="m-end-5">المدينة</span>

                        <span class="text-danger">*</span>
                    </label>
                    <InputsMultiSelect v-model="selectedCity" :options="cities" optionLabel="name" @change="selectRegions" />
                </div>
                <div class="form-group">
                    <label class="form-label">
                        <span class="m-end-5">المناطق</span>
                        <span class="text-danger">*</span>
                    </label>

                    <InputsMultiSelect v-model="selectRegion" :options="regions" optionLabel="name" />
                </div>
                <inputs-form-control textarea id="descripe" v-model.trim="descripe"> وصف المهارة
                    بالعربي</inputs-form-control>
                <inputs-form-control textarea id="descripe" v-model.trim="enDescripe"> وصف المهارة بالانجليزي
                </inputs-form-control>

                <div>
                    <label class="form-label">
                        <span> صور اعمال سابقة </span>
                        <span class="text-danger">*</span>
                    </label>
                    <div class="d-flex gap-20 mb-3">
                        <inputs-imgInput :id="img1" v-model="imgs"></inputs-imgInput>
                        <inputs-imgInput :id="img2" v-model="imgs"></inputs-imgInput>
                        <inputs-imgInput :id="img3" v-model="imgs"></inputs-imgInput>
                        <inputs-imgInput :id="img4" v-model="imgs"></inputs-imgInput>
                    </div>
                </div>
                <div class="flex-center">
                    <baseButton class="main_btn lg" @click="visible = true" label="Show"> إضافة مهارة</baseButton>
                </div>
            </form>
        </div>
    </div>
    <Dialog v-model:visible="visible" modal :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <font-awesome-icon icon="fa-regular fa-circle-check" class="modal-exclam-mark mb-3 main_color" />
        <h6 class="text-center mb-3">تم إضافة المهارة بنجاح</h6>
        <div class="flex-center">
            <ui-base-button mode="main_btn" @click="visible = false" link to="/profile"> رجوع </ui-base-button>
        </div>
    </Dialog>
</template>
<script>
import multiSelect from '../../components/inputs/multiSelect.vue';

import Dialog from 'primevue/dialog';
export default {
    components: {
        multiSelect,
        Dialog,
    },
    data() {
        return {
            visible: false,
            arName: '',
            enName: '',
            mainSection: '',
            subSection: '',
            descripe: '',
            selectedCity: null,
            selectRegion: null,
            selectedCategory: null,
            selectedSubCategory: null,
            imgs: [],
            // Governorate: '',
            cities: [],
            Governorates: [],
            axios: useNuxtApp().$axios,
            categories: [],
            subCategories: [],
            enDescripe: '',
            name: '',
            nameAr: [],
            nameEn: '',
            items: '',
            arLang: useNuxtApp().$i18n.locale.value === 'ar' 
        }
    },
    mounted() {

        this.axios.get('/cities')
            .then((response) => {
                this.cities = response.data.data
            })
            .catch(function (error) {
                console.log(error);
            }),

            this.axios.get('/categories')
                .then((response) => {
                    this.categories = response.data.data.categories
                })
                .catch(function (error) {
                    console.log(error);
                })
    },
    methods: {
        selectRegions() {
    //     
            this.axios.get(`regions/${this.selectedCity.id}`)
                .then((response) => {
                    this.regions = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
                })

        },
        selectSubCategory() {
            this.axios.get(`sub-categories/${this.selectedCategory.id}`)
                .then((response) => {
                    this.subCategories = response.data.data
                    // this.name = this.subCategories.map(item => item.name);



                    // // if (useNuxtApp().$i18n.locale.value === 'en') {
                    // this.nameAr = this.name.map(i => i.ar)
                    // console.log(this.nameAr);



                    console.log(this.name);
                    // } else {
                    //     this.nameEn = this.name.map(i => i.ar)
                    //     console.log(this.nameAr);
                    // }
                })
                .catch(function (error) {
                    console.log(error);
                })

        },
        // name(){
        //    return useNuxtApp().$i18n.locale.value

        // }
        // addSkill() {


        //     this.formData = {
        //         'title[ar]': this.arName,
        //         'title[en]': this.enName,
        //         city_ids[]: this.selectedCity.id,
        //         region_ids[]: this.selectRegion.id,
        //         category_id: this.selectedCategory.id,
        //         sub_category_id: this.selectedSubCategory.id,
        //         description[ar]: this.description[ar],
        //         description[en]: this.description[en],



        //     }

        //     this.axios.post('/sign-up', this.formData)
        //         .then((response) => {
        //             if (response.data.key === 'success') {
        //                 console.log(response.data)
        //                 nuxtStorage.localStorage.setData('userId', this.name)
        //                 this.$toast.add({ detail: `${response.data.msg}`, life: 3000 });
        //                 setTimeout(function () {
        //                     useRouter().push({ path: '/register/otp' });
        //                 }, 3000)
        //             } else {
        //                 this.$toast.add({ detail: `${response.data.msg}`, life: 3000 });

        //             }
        //         })
        //         .catch((err) => {
        //             setTimeout(function () {
        //                 useRouter().push({ path: '/' });
        //             }, 3000)
        //             this.$toast.add({ detail: `${err}`, life: 3000 });
        //         })
        // }
    }
    //     methods: {

    //         addSkill() {
    //             this.Governorate = this.selectedGovernorates.forEach(Governorate => {
    //                let obj = Object.values(Governorate).toString()
    //                console.log(obj)
    //                this.Governorate = obj
    //                console.log(this.Governorate)

    //             });
    //             this.$store.dispatch('skills/newSkill', {
    //                 title: this.arName,
    //                 mainSection: this.mainSection,
    //                 subSection: this.subSection,
    //                 descripe: this.descripe,
    //                 cities: this.selectedCities,
    //                 Governorates: this.Governorate,
    //                 // Governorates: (Governorates) => Governorates.flat().map(({name})=> name),
    //                 imgs: this.imgs
    //             })
    //             console.log(this.$store.getters['skills/skills'])
    //         }
    //     }
}

</script>
<style scoped>
.base-image-input {
    width: 130px;
    height: 130px;
    margin: 0 !important;
}
</style>