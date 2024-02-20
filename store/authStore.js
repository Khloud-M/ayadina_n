// authStore.js
import { defineStore } from "pinia";
// import persistedState from 'pinia/plugin-persisted-state';

export const useAuthStore = defineStore("auth", {

  
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      token: null,
      user: null,
      axios: useNuxtApp().$axios,
      isAuthenticated: false,
      name: "",
    }
  },
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
          
            console.log(response);
          
            setTimeout(function () {
              useRouter().push({ path: "/register/otp" });
            }, 3000);
          } else {
            // this.$toast.add({ detail: ${response.data.msg}, life: 3000 });
            console.log(response)
          }
        })
        .catch((err) => {
          setTimeout(function () {
            useRouter().push({ path: "/" });
          }, 3000);
          
        });
    },
    async otp({ code, email }) {
      this.axios
        .post("/activate", { code, email })
        .then((response) => {
          if (response.data.key === "success") {
            this.isAuthenticated = true;
            this.user = response.data.data
            setTimeout(function () {
              useRouter().push({ path: "/register/step2" });
            }, 3000);
          } else {
            console.log(response)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // // profile
    // // signOut
    setUser(user) {
      // Directly update the user state in the store
      this.user = user;
    },
    async logOut() {
      try {
        const res = await this.axios.delete("/sign-out");

        console.log(res);
        if (res.data.key === "success" || res.data.key === "unauthenticated" || res.data.key === "blocked" ) {
          this.user = null
          this.isAuthenticated = false
          useRouter().push({path: '/'})
        } else {
           console.log(res)
        }
    } catch (error) {
        console.log(error);
    }
    }
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: "strict",
    }),
  },
});
  
