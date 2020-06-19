<template>
  <v-card min-width="450">
    <v-list-item>
      <v-list-item-content>
        <v-img
          src="https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-14..v_1588802180.jpg"
        ></v-img>
      </v-list-item-content>

      <v-list-item-content>
        <v-list-item-title>MACBOOK PRO MC700</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  props: ["source"],
  data: () => ({
    hidden: false
  }),
  methods: {
    onClick() {
      this.$emit("toogleCartDetails", "");
    }
  }
};
</script>
