<template>
  <div class="results">
    <ResultsList />
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/scss/Results.scss";
</style>

<script>
// @ is an alias to /src
import ResultsList from "@/components/ResultsList.vue";

export default {
  name: "Results",
  components: {
    ResultsList
  }
};
</script>
