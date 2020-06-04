<style scoped lang="scss">
@import "@/assets/scss/Login.scss";
</style>
<template>
  <div class="signup">
    <div class="LoginContainer">
      <div class="login-content">
        <form>
          <img src="@/assets/sign_up.svg" />
          <h2 class="title">SIGN UP</h2>
          <div class="error"></div>
          <div class="input-div email">
            <div class="i">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="div">
              <h5>E-mail</h5>
              <input v-model="email" @keyup.enter="signUp" type="email" class="input" />
            </div>
          </div>
          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Password</h5>
              <input v-model="password" @keyup.enter="signUp" type="password" class="input" />
            </div>
          </div>
          <div class="div social">
            <a @click="facebookSignUp">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a @click="twitterSignUp">
              <i class="fab fa-twitter"></i>
            </a>
            <a @click="googleSignUp">
              <i class="fab fa-google"></i>
            </a>
            <a @click="githubSignUp">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <button @click="signUp" class="btn">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@firebase/app";
import { auth } from "../firebase";

export default {
  name: "Signup",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function(e) {
      auth.createUserWithEmailAndPassword(this.email, this.password).
        then(user => {
          console.log(`Signed up as ${user.email}`)
          this.$router.go({path: this.$router.path})
        },
        err => {
          console.log(err.message)
          document.querySelector(".error").innerHTML = err.message
        })
        e.preventDefault()
    },
    facebookSignUp: function() {
      var provider = new firebase.auth.FacebookAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(`Signed up as ${user.email}`)
        location.reload()
      }).catch(function(error) {
        console.log(error.message)
      });
    },
    twitterSignUp: function() {
      var provider = new firebase.auth.TwitterAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(`Signed up as ${user.email}`)
        location.reload()
      }).catch(function(error) {
        console.log(error.message)
      });
    },
    googleSignUp: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(`Signed up as ${user.email}`)
        location.reload()
      }).catch(function(error) {
        console.log(error.message)
      });
    },
    githubSignUp: function() {
      var provider = new firebase.auth.GithubAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(`Signed up as ${user.email}`)
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
