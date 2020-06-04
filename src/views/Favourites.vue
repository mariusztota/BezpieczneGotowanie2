<template>
  <div class="results">
    <FavouritesList />
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/Results.scss";
</style>

<script>
// @ is an alias to /src
import FavouritesList from "@/components/FavouritesList.vue";

export default {
  name: "Favourites",
  components: {
    FavouritesList
  },
};
</script>
