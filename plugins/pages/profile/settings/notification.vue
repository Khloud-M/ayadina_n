<template>
    <header-component></header-component>
    <base-container>
        <ui-breadCrumb :to="localePath('/profile/settings')">
            <template v-slot:mainPage>الاعدادات</template>
            <template v-slot:currentPage>اعدادات الاشعارات </template>
        </ui-breadCrumb>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <base-card class="p-5">
                    <form @submit.prevent="updateNotifyStatus">
                        <div class="bg-light p-3 flex-between rounded-3 w-75 m-auto shadow-sm">
                            <h5> تفعيل الاشعارات </h5>
                            <InputSwitch v-model="checked" @input="updateNotifyStatus" />
                        </div>
                    </form>

                </base-card>
            </div>
        </div>
    </base-container>
    <footer-component></footer-component>
</template>
<script>
import { useAuthStore } from '@/store/authStore'
export default {
    data() {
        return {
            localePath: useLocalePath(),
            axios: useNuxtApp().$axios,
            checked: false,
            token: '',
            formData: ''
        }
    },
    methods: { 
        updateNotifyStatus() {
            this.token = useAuthStore().token
            this.formData = {
                notify: this.checked,

            }
            this.axios.patch('/switch-notify', this.formData , {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                }
            }).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
        }

    }

}
</script>