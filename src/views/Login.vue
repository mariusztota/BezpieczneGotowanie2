<style scoped lang="scss">
@import "@/assets/scss/Login.scss";
</style>
<template>
  <div class="login">
    <div class="LoginContainer">
      <div class="login-content">
        <form>
          <img src="@/assets/undraw_profile_pic_ic5t.svg" />
          <h2 class="title">LOGIN</h2>
          <div class="error"></div>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="div">
              <input v-model="email" @keyup.enter="login" type="email" class="input" />
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <input v-model="password" @keyup.enter="login" type="password" class="input" />
            </div>
          </div>
           <div class="div social">
            <a @click="facebookSignIn">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a @click="googleSignIn">
              <i class="fab fa-google"></i>
            </a>
          </div>
          <button @click="login" class="btn">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { auth } from "../firebase";
import { firebase } from "@firebase/app"

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function(e) {
      auth.signInWithEmailAndPassword(this.email, this.password).
        then(user => {
          console.log(`Logged in as ${user.user.email}`)
          this.$router.go({path: this.$router.path})
        },
        err => {
          console.log(err.message)
          document.querySelector(".error").innerHTML = err.message
        })
        e.preventDefault()
    },
    googleSignIn: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(`Signed in as ${user.email}`)
        location.reload()
      }).catch(function(error) {
        console.log(error.message)
      });
    },
    facebookSignIn: function() {
      var provider = new firebase.auth.FacebookAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(`Signed in as ${user.email}`)
        location.reload()
      }).catch(function(error) {
        console.log(error.message)
      });
    },
    twitterSignIn: function() {
      var provider = new firebase.auth.TwitterAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(`Signed in as ${user.email}`)
        location.reload()
      }).catch(function(error) {
        console.log(error.message)
      });
    },
    githubSignIn: function() {
      var provider = new firebase.auth.GithubAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(`Signed in as ${user.email}`)
        location.reload()
      }).catch(function(error) {
        console.log(error.message)
      });
    }
  },
  mounted: function() {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }
};
</script>