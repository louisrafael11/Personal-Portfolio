<template>
    <v-responsive max-width="600" class="pt-10">
      <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        class="bg-black"
      >
        <v-list dense>
                      <v-list-item @click="scrollTo('home')">
            <v-list-item-title class="white--text">Home</v-list-item-title>
          </v-list-item>
          <v-list-item @click="scrollTo('about')">
            <v-list-item-title class="white--text">About Me</v-list-item-title>
          </v-list-item>
          <v-list-item @click="scrollTo('skills')">
            <v-list-item-title class="white--text">Skills</v-list-item-title>
          </v-list-item>
          <v-list-item @click="scrollTo('projects')">
            <v-list-item-title class="white--text">Projects</v-list-item-title>
          </v-list-item>
          <v-list-item @click="scrollTo('contact')">
            <v-list-item-title class="white--text">Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-responsive>
  </template>
  
  <script>
  export default {
    name: "SideNav",
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      scrollTo(section) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        this.drawer = false; // Close the drawer after selecting an item
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-black {
    background-color: #000;
  }
  </style>
  