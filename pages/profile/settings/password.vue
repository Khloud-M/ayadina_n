<template>
   <div class="row justify-content-center">
            <div class="col-md-7">
                <ui-breadCrumb :to="localePath('/profile/settings')">
                    <template v-slot:mainPage>    {{ $t("Settings") }} </template>
                    <template v-slot:currentPage>  {{ $t("edit_password") }} </template>
                </ui-breadCrumb>
                <ui-base-card class="p-5 rounded-4">
                    <form >
                        <inputs-form-control mode="form-control" id="passpassword1"> {{ $t("Current_Password") }} </inputs-form-control>
                        <inputs-form-control mode="form-control" type="password" id="password2"> {{ $t("New_Password") }} </inputs-form-control>
                        <inputs-form-control mode="form-control" type="password" id="password3"> {{ $t("Confirm_current_password") }}</inputs-form-control>
                        <div class="flex-center mb-3">
                            <ui-base-button mode="main_btn lg " link  :to="localePath('/profile/settings/otp')" @click="visible = true">
                                {{ $t("save") }}
                            </ui-base-button>
                        </div>
                    </form>
                </ui-base-card>
            </div>
        </div>
    <!--  -->
    <Dialog v-model:visible="visible" modal :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <font-awesome-icon icon="fa-regular fa-circle-check" class="modal-exclam-mark mb-3 main_color" />
        <h6 class="text-center mb-3">
            {{ $t("The_password_has_been_changed_successfully") }}
        </h6>
        <div class="flex-center">
            <ui-base-button mode="main_btn" @click="visible = false" link  :to="localePath('/profile/settings')">   {{ $t("Settings") }}  </ui-base-button>
        </div>
    </Dialog>
</template>
<script>
import Dialog from 'primevue/dialog';

export default {
    components:{Dialog},
    data() {
        return {
            completed: false,
            visible: false,
            localePath: useLocalePath()
        }
    },
}
</script>