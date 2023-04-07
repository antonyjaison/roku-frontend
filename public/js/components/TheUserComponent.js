export default {
    name: 'TheUserComponent',
    props: ['user'],

    template: `
    <div @click="NavToHome" class="card rounded avatar">
        <div class="card-body text-center">
            <img :src='"images/" + user.avatar' class="rounded-circle img-fluid" alt="user avatar">
            <p>{{user.username}}</p>
        </div>
    </div>
    `,

    methods: {
        NavToHome() {
            // look at the user's permission level and set a route based on the value
            // if it's less than 3, send them to the kid's home page
            // else send them to the default home page

            // let targetRoute = 'defaulthome';

            // if (this.user.permissions <= 3) { 
            //     targetRoute = 'kidshome';
            // }


            // ternary statements (weird stuff like this with a question mark) are shorthand if/else statements
            // the condition in brackets is evaluated; if it's true, the variable's value is set to whatever is to the left of the colon
            // if it's false, the variable's value is whatever is set to whatever is to the right of the colon
            let targetRoute = (this.user.permissions <= 3) ? 'kidshome' : 'defaulthome';

            this.$router.push({ name: targetRoute });
        }
    }
}