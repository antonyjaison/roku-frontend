export default {
  name: "TheLoginComponent",

  template: `
  <nav>
  <div class="logo">
    <h1>
      <router-link to="/">
        ROKU
      </router-link>
    </h1>
  </div>
</nav>

<section class="login-section">
  <h1>SIGN IN</h1>
  <form @submit.prevent="login">
    <input v-model="email" placeholder="Email or phone number" class="input" type="text" name="email_or_phone"
      id="email">
    <input v-model="password" placeholder="Password" class="input" type="password" name="password" id="password">
    <input :disabled="btnDisabled" type="submit" value="Sign In">
    <div class="additional">
      <div class="input_group">
        <input v-model="remember" type="checkbox" name="remember_me" id="remember_me">
        <label for="remember_me">Remember Me</label>
      </div>
      <a class="help" href="#">Need Help?</a>
    </div>
  </form>
  <p>New to Roku Flashback? <router-link class="signup" to="/signup">Sign Up now</router-link></p>
</section>
<footer class="login-footer">
  <p>Questions? Call <a href="">952-803-4658</a></p>
  <ul class="info">
    <div class="info_section">
      <li><a href="">FAQ</a></li>
      <li><a href="">Terms of Use</a></li>
      <li><a href="">Cookie Preference</a></li>
    </div>
    <div class="info_section">
      <li><a href="">Help Center</a></li>
      <li><a href="">Privacy</a></li>
      <li><a href="">Corporate Info</a></li>
    </div>
  </ul>
</footer>`,

  computed: {
    btnDisabled() {
      return this.email.trim().length < 4 || this.password.trim().length < 4;
    },
  },
  data() {
    let email = "";
    let password = "";
    let remember = true;
    return {
      email,
      password,
      remember,
    };
  },
  methods: {
    async login() {
      console.log(this.email, this.password, this.remember);
    },
  },
};
