<template>
  <div class="recipe">
    <RecipeDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeDetails from "@/components/RecipeDetails.vue";

export default {
  name: "Recipe",
  components: {
    RecipeDetails
  }
};
</script>
