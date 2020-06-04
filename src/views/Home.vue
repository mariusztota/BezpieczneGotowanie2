<style lang="scss">
@import "@/assets/scss/Home.scss";
</style>
<template>
  <div class="home">
    <div class="home__content">
      <h2>Dodaj składnik:</h2>
      <br />
      <div id="app">
        <form class action>
          <div class="ingredients__inputRow">
            <input v-model="ingredientText" class="ingredients__input" />
            <button
              class="ingredients__button ingredients__button--add"
              @click.prevent="addIngredient"
              :disabled="ingredients.length == 3 || !ingredientText"
            >Dodaj</button>
          </div>
        </form>
        <div class="ingredients__list">
          <ul>
            <li v-for="(ingredient, index) in ingredients" :key="ingredient">
              <div class="ingredients__item">
                <span class="ingredients__elem">{{ingredient.words}}</span>
                <button
                  @click.stop="deleteIngredient(index)"
                  class="ingredients__button ingredients__button--remove"
                >Usuń</button>
              </div>
            </li>
          </ul>
        </div>
        <button
          class="ingredients__button ingredients__button--search"
          @click="searchRecipe"
          v-if="ingredients.length > 0"
        >Wyszukaj</button>
        <h2 class="text-left text-to-change">...lub...</h2>
        <button
          class="ingredients__button ingredients__button--random"
          @click="searchRandomRecipe"
        >Zaskocz mnie!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { spoonacularApiKey } from "../spoonacular";

export default {
  name: "Home",
  data() {
    return {
      ingredients: [],
      ingredientText: ""
    };
  },
  computed: {
    formattedArray: function() {
      let ingreds = "";
      let arr = this.ingredients;
      arr.forEach(element => {
        if (!(arr.indexOf(element) === arr.length - 1)) {
          ingreds = ingreds + element.words + ",+";
        } else {
          ingreds = ingreds + element.words;
        }
      });
      return ingreds.toString();
    }
  },
  methods: {
    addIngredient: function() {
      this.ingredients.push({
        words: this.ingredientText
      });
      this.ingredientText = "";
    },
    deleteIngredient: function(index) {
      this.ingredients.splice(index, 1);
    },
    deleteAll: function() {
      this.ingredients = [];
    },
    searchRecipe: function() {
      fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${spoonacularApiKey}&ingredients=${this.formattedArray}&number=9`
      )
        .then(response => response.json())
        .then(json => {
          this.$store.commit("setResults", {
            newResults: json
          });
          this.$router.push("/results");
        });
    },
    searchRandomRecipe: function() {
      fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${spoonacularApiKey}&number=9`
      )
        .then(response => response.json())
        .then(json => {
          this.$store.commit("setResults", {
            newResults: json.recipes
          });
          this.$router.push("/results");
        });
    },
    searchByCuisine: function(item) {
      fetch(
        `https://api.spoonacular.com/recipes/search?apiKey=${spoonacularApiKey}&cuisine=${item}`
      )
        .then(response => response.json())
        .then(json => {
          this.$store.commit("setResults", {
            newResults: json.results
          });
          this.$router.push("/results");
        });
    }
  }
};
</script>