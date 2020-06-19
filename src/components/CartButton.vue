<template>
  <v-card-text style="height: 100px; position: relative">
    <v-fab-transition>
      <v-btn
        @click="onClick"
        v-show="!hidden"
        color="black"
        dark
        absolute
        top
        right
        fab
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card-text>
</template>

<script>
export default {
  props: ["source"],
  data: () => ({
    hidden: false
  }),
  methods: {
    onClick() {
      this.$emit("toogleCartDetails");
    }
  }
};
</script>
