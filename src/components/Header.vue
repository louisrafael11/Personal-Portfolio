<template>
  <v-app-bar app class="bg-black">
    <v-toolbar-title class="white--text">Louis.</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text class="white--text" @click="scrollTo('about')">About Me</v-btn>
    <v-btn text class="white--text" @click="scrollTo('skills')">Skills</v-btn>
    <v-btn text class="white--text" @click="scrollTo('projects')">Projects</v-btn>
    <v-btn text class="white--text" @click="scrollTo('contact')">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
.bg-black {
  background-color: #000;
}
</style>
