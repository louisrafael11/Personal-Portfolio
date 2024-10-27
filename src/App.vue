<template>
  <v-app>
    <HeaderComponent />
    <v-main class="bg-black">
      <HomePage /> 
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </v-main>
    <FooterComponent /> <!-- Added footer -->
  </v-app>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import HomePage from './components/Home.vue';
import AboutPage from './components/About.vue';
import SkillsPage from './components/Skills.vue';
import ProjectsPage from './components/Projects.vue';
import ContactPage from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomePage,
    AboutPage,
    SkillsPage,
    ProjectsPage,
    ContactPage,
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
