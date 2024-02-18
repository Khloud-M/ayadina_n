// authStore.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    user: null,
    axios: useNuxtApp().$axios,
    isAuthenticated: false,
    name: "",
  }),
  
  actions: {
    async signIn({ email, phone, password ,  country_code }) {
      try {
          let loginData = {};
  
          if (email) {
              loginData = { log: email, password ,  };
          } else if (phone) {
              loginData = { log: phone, password , country_code:  country_code };
          }
  
          const res = await this.axios.post("/sign-in", loginData);
  
          console.log(res);
  
          if (res.data.key === "success") {
              this.token = res.data.data.token;
              this.isAuthenticated = true;
              localStorage.setItem("token", res.data.data.token);
              this.name = res.data.data.name;
              this.user = res.data.data;
              setTimeout(function () {
                  useRouter().push({ path: "/" });
              }, 3000);
          } else if (res.data.key === "needActive") {
              useRouter().push({ path: "/login/otp" });
              this.isAuthenticated = false;
          }
      } catch (error) {
          console.log(error);
      }
  },
    async signUp({ name, email, phone, country_code, password }) {
      this.axios
        .post("/sign-up", { name, email, phone, country_code, password })
        .then((response) => {
          if (response.data.key === "success") {
            console.log(response.data);
            console.log(response);
            // this.$toast.add({ detail: `${response.data.msg}`, life: 3000 });
            setTimeout(function () {
              useRouter().push({ path: "/register/otp" });
            }, 3000);
          } else {
            // this.$toast.add({ detail: `${response.data.msg}`, life: 3000 });
            console.log(response)
          }
        })
        .catch((err) => {
          setTimeout(function () {
            useRouter().push({ path: "/" });
          }, 3000);
          this.$toast.add({ detail: `${err}`, life: 3000 });
        });
    },
    async otp({ code, email }) {
      this.axios
        .post("/activate", { code, email })
        .then((response) => {
          if (response.data.key === "success") {
            localStorage.setItem("token", response.data.data.token);
           
            setTimeout(function () {
              useRouter().push({ path: "/register/step2" });
            }, 3000);
          } else {
            // this.$toast.add({ detail: `${response.data.msg}`, life: 3000 });
            console.log(response)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // profile
    // signOut
    setUser(user) {
      // Directly update the user state in the store
      this.user = user;
    },
    logOut() {
      this.user = null;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
