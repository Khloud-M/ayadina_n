<template>
    <ui-main-title>
        الملف الشخصي
    </ui-main-title>
    <profile-tabs></profile-tabs>
    <div class="row justify-content-center">
        <div class="col-md-10">
            <ui-noData v-if="rates.length === 0 ">
                No rates
            </ui-noData>
            <ui-base-card v-else >
                <div v-for="rate in rates" :key="rate.id" class="mb-3 border-bottom mb-3">
                    <div class="flex-between mb-3">
                        <div class="d-flex gap-10">
                            <img :src="rate.img" class="circleImg">
                            <div>
                                <h6>{{ rate.user.name }}</h6>
                                <p> {{ rate.created_at }}</p>
                            </div>
                        </div>
                        <div class="report" label="Show" @click="visible = true">
                            <font-awesome-icon icon="fa-solid fa-flag" />
                            <span>ابلاغ</span>
                        </div>
                    </div>
                    <Rating v-model="rate.rate" :cancel="false" class="mb-3" readonly />

                    <!-- rate -->
                    <p class="text-muted">
                        {{ rate.comment }}
                    </p>
                </div>


            </ui-base-card>
            
        </div>
    </div>

    <Dialog v-model:visible="visible" modal header="ابلاغ" :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <form @submit.prevent>
                    <div class="form-group">
                        <label for="descripe" class="form-label">
                            <span class="m-end-5"> اكتب هنا </span>
                            <span class="text-danger">*</span>
                        </label>
                        <textarea name="descripe" id="descripe" class="form-control" rows="3"></textarea>
                    </div>
                    <div class="flex-center">
                        <ui-base-button icon="pi pi-check" aria-label="Close" type="button" class="main_btn"
                            @click=" visible = false, visible2 = true">
                            إرسال</ui-base-button>
                    </div>
                </form>

            </div>
        </div>
    </Dialog>
    <!-- certain -->
    <Dialog v-model:visible="visible2" modal :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <font-awesome-icon icon="fa-regular fa-circle-check" class="modal-exclam-mark mb-3 main_color" />
        <h6 class="text-center mb-3"> تم استقبال بلاغك بنجاح </h6>
        <div class="flex-center">
            <ui-base-button mode="main_btn" @click="visible2 = false"> تقييماتي </ui-base-button>
        </div>
    </Dialog>
</template>
<script>


import Dialog from 'primevue/dialog';

// import Rating from 'primevue/rating';
import { useAuthStore } from '@/store/authStore';

export default {
    components: {
        Dialog,
    },
    data() {
        return {
            axios: useNuxtApp().$axios,

            visible: false,
            visible2: false,
            value: null,
            rates:  [],
        }

    },
    mounted() {
        this.value = this.rates.map(item => item.rate);
        this.token = useAuthStore().token
      
        this.axios.get('/my-ratings' , {
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        })
            .then((res) => {
                this.rates = res.data.data.data
                console.log(res.data.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }


}
</script>
<style >
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon , 
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon 
{
    color: rgb(255, 221, 0) !important;
}
</style>