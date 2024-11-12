<template>
  <v-app-bar app class="bg-black">
    <v-toolbar-title class="white--text">Louis.</v-toolbar-title>
    <v-spacer></v-spacer>
    
    <!-- Navigation Buttons, hidden on small and medium screens -->
    <v-btn text class="white--text hidden-sm-and-down" @click="scrollTo('home')">Home</v-btn>
    <v-btn text class="white--text hidden-sm-and-down" @click="scrollTo('about')">About Me</v-btn>
    <v-btn text class="white--text hidden-sm-and-down" @click="scrollTo('skills')">Skills</v-btn>
    <v-btn text class="white--text hidden-sm-and-down" @click="scrollTo('projects')">Projects</v-btn>
    <v-btn text class="white--text hidden-sm-and-down" @click="scrollTo('contact')">Contact</v-btn>

    <!-- Menu Icon for mobile -->
    <v-btn icon @click="$emit('toggle-drawer')" class="hidden-md-and-up">
      <v-icon class="white--text">mdi-menu</v-icon>
    </v-btn>
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
