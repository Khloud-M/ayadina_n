<template>
  <div class="row justify-content-center">
    <div class="col-md-7">
      <UiBreadCrumb  :to="localePath('/')">
        <template v-slot:mainPage>  {{ $t("Settings") }}</template>
        <template v-slot:currentPage>  {{ $t("edit_phone") }}</template>
      </UiBreadCrumb>
      <ui-base-card class="p-5">
        <ui-main-title class="mb-5">  {{ $t("Enter_the_verification_code_sent_to_your_mobile_phone") }}</ui-main-title>
        <inputs-code-input @complete="completed = true" :fields="6" :fieldWidth="56" :fieldHeight="56" :required="true"
          class="mb-5" />
        <div class="flex-center">
          <!-- :disabled="!completed" -->
          <ui-base-button class=" main_btn w-50"  @click="visible = true">
            {{ $t("continuation") }}
          </ui-base-button>
        </div>
      </ui-base-card>
    </div>
  </div>
    <Dialog v-model:visible="visible" modal :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"> 
        <font-awesome-icon icon="fa-regular fa-circle-check " class="modal-exclam-mark mb-3 main_color" />
        <h6 class="text-center mb-3">
          {{ $t("The_change_was_made_successfully") }}
        </h6>
        <div class="flex-center">
            <ui-base-button mode="main_btn" @click="visible = false" link :to="localePath('/profile/settings')">   {{ $t("Settings") }}  </ui-base-button>
        </div>
    </Dialog>
</template>

  
<script >

import Dialog from 'primevue/dialog';
export default{
  components: {
        Dialog
    },
    data() {
        return {
            completed: false,
            visible: false,
            visible2: false,
            localePath: useLocalePath()
        }
    },
}
</script>