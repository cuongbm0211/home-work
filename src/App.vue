<template>
  <Baseline />
</template>

<script>
export default {
  name: "App",
  components: {
    Baseline: () => import("./layouts/baseline")
  }
};
</script>
