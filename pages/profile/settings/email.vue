<template>
  <div class="row justify-content-center">
    <div class="col-md-7">
      <ui-breadCrumb :to="localePath('/profile/settings')">
        <template v-slot:mainPage>
          {{ $t("Settings") }}
        </template>
        <template v-slot:currentPage> {{ $t("edit_email") }}</template>
      </ui-breadCrumb>
      <ui-base-card class="p-5 rounded-4">
        <ui-main-title>
          {{ $t("Enter_your_new_mobile_number_and_email") }}
        </ui-main-title>
        <form>
          <inputs-form-control
            mode="form-control"
            type="password"
            id="password"
          >
            {{ $t("password") }}
          </inputs-form-control>
          <inputs-form-control mode="form-control" type="email" id="password">
            {{ $t("New_email") }}
          </inputs-form-control>
          <div class="flex-center mb-3">
            <ui-base-button
              mode="main_btn lg "
              link
              :to="localePath('/profile/settings/otp')"
            >
              {{ $t("continuation") }}
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
      localePath: useLocalePath(),
    };
  },
};
</script>
