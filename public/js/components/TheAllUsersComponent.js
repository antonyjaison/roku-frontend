// imports always go here
import UserComponent from "./TheUserComponent.js";

export default {
  name: "TheAllUsersComponent",

  template: `
    <section class="user-panel">
        <h2>Who's Using Roku?</h2>

        <section>
        <user v-for="user in users" :user="user"></user>
    </section>
    `,

  created() {
    // this is where you should do all of your user data retrieval
    console.log("all users is ready");
    fetch("http://localhost:5050/ums/users")
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        // push the users into the vue data object so we can render a component for each user
        this.users = data;
      })
      .catch((error) => console.error(error));
  },

  data() {
    return {
      users: [],
    };
  },

  components: {
    user: UserComponent,
  },
};
