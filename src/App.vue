<template>
  <v-app>
    <HeaderComponent @toggle-drawer="toggleDrawer" />
    <SideNav v-if="isMobile" ref="drawer" />
    <v-main class="bg-black">
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </v-main>
    <footer class="bg-black white--text text-center py-4">
      <p>&copy; 2024 Louis Rafael E. Quiñones</p>
    </footer>
  </v-app>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import SideNav from './components/SideNav.vue';
import HomePage from './components/Home.vue';
import AboutPage from './components/About.vue';
import SkillsPage from './components/Skills.vue';
import ProjectsPage from './components/Projects.vue';
import ContactPage from './components/ContactPage.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SideNav,
    HomePage,
    AboutPage,
    SkillsPage,
    ProjectsPage,
    ContactPage,
  },
  data() {
    return {
      isMobile: window.innerWidth <= 600,
    };
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 600;
    },
    toggleDrawer() {
      this.$refs.drawer.drawer = !this.$refs.drawer.drawer;
    },
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() { // Use beforeUnmount instead of beforeDestroy
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<style>

.bg-black {
  background-color: #000;
  color: #fff;
  scroll-behavior: smooth;
}
</style>
