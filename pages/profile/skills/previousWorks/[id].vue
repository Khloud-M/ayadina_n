<template>
    <base-container>
    <ui-breadCrumb to="/profile">
            <template v-slot:mainPage> الملف الشخصي </template>
            <template v-slot:> تفاصيل المهارة </template>
            <template v-slot:currentPage>  الاعمال السابق  </template>

        </ui-breadCrumb>
        <div class="row">
            <div class="col-md-3 col-6" v-for="img in showSkill.images" :key="img + 1">
                <img :src="img" :alt="img + 1" class="previousWorkImg mb-4">
            </div>
        </div>

    </base-container>
</template>
<script>
import { useAuthStore } from '@/store/authStore';

export default {
    props: ['id'],

    data() {
        return {
            selectedSkill: '',
            selectedSkillId: '',

            showSkill: '',
            axios: useNuxtApp().$axios,
            localePath: useLocalePath(),
            name: ''

        }
    },
    computed: {
        id() {
            return this.$route.params.id
        }
    },
    mounted() {
        this.token = useAuthStore().token
        this.name = useAuthStore().name

        this.axios.get(`show-skill/${useRoute().params.id}`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        })
            .then((response) => {
                this.showSkill = response.data.data
                console.log(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })

    },
}
</script>