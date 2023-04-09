// import your modules/components here
import LoginPage from "./components/TheLoginComponent.js";
import AllUsersPage from "./components/TheAllUsersComponent.js";
import DefaultHome from "./components/TheDefaultHomeComponent.js";
import KidsHome from "./components/TheKidsHomeComponent.js";
import SignupPage from "./components/SignupComponent.js";
// import ErrorPage from "./modules/ErrorPage.js";

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes: [
    // vue will try to match the following routes
    // and render the appropriate component onto the page
    {
      path: "/", // the location bar URL
      name: "login", // the name of the route (for programmatic navigation)
      component: LoginPage, // the component to render
    },
    {
      path: "/signup", // the location bar URL
      name: "signup", // the name of the route (for programmatic navigation)
      component: SignupPage, // the component to render
    },

    {
      path: "/users", // the location bar URL
      name: "allusers", // the name of the route (for programmatic navigation)
      component: AllUsersPage, // the component to render
    },
    {
      path: "/home", // the location bar URL
      name: "defaulthome", // the name of the route (for programmatic navigation)
      component: DefaultHome, // the component to render
    },
    {
      path: "/kidshome", // the location bar URL
      name: "kidshome", // the name of the route (for programmatic navigation)
      component: KidsHome, // the component to render
    },
  ], // short for `routes: routes`
});

// 5. Create and mount the root instance.
const app = Vue.createApp({
  mounted() {
    //check for a previous login in localStorage
    if (window.localStorage.getItem("user")) {
      this.authenticates = true;
      this.$router.push({ name: "allusers" });
    }
  },

  data() {
    return {
      authenticated: false,
    };
  },
  methods: {
    logUserOut() {
      this.authenticated = false;
      window.localStorage.removeItem("user");
      this.$router.push({ name: "login" });
    },

    loggedIn() {
      this.authenticated = true;
    },
  },
});
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);
app.mount("#app");
