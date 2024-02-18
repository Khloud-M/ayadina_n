<template>
    <div class="row justify-content-center">
        <div class="col-md-7">
            <ui-breadCrumb :to="localePath('/profile/settings')">
                <template v-slot:mainPage>
                    الاعدادات
                </template>
                <template v-slot:currentPage> تغيير البريد الالكتروني </template>
            </ui-breadCrumb>
            <ui-base-card class="p-5 rounded-4">
                <ui-main-title>
                    ادخل رقم الجوال والبريد الالكتروني الجديد
                </ui-main-title>
                <form>
                    <inputs-form-control mode="form-control" type="password" id="password"> كلمة المرور
                    </inputs-form-control>
                    <inputs-form-control mode="form-control" type="email" id="password"> البريد الالكتروني الجديد
                    </inputs-form-control>
                    <div class="flex-center mb-3">
                        <ui-base-button mode="main_btn lg " link :to="localePath('/profile/settings/otp')">
                            استمرار
                        </ui-base-button>
                    </div>
                </form>
            </ui-base-card>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            localePath: useLocalePath()
        }
    }
}
</script>