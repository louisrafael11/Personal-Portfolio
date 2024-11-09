<template>
  <v-container id="skills" class="my-5">
    <h1 class="white--text text-center">Skills</h1>
    <v-row>
      <v-col v-for="skill in skills" :key="skill.name" cols="12" md="4">
        <v-card class="mb-3 hover-card" elevation="2">
          <v-card-title>
            <v-img
              :src="skill.logo"
              alt="skill.name"
              contain
              class="skill-logo"
            ></v-img>
            <span class="ml-2">{{ skill.name }}</span>
          </v-card-title>
          <v-card-text>
            <v-progress-linear
              :color="skill.color"
              height="10"
              :model-value="skill.percentage"
              striped
            ></v-progress-linear>
            <span>{{ skill.percentage }}%</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import javascriptLogo from '@/assets/logo/JavaScript.png';
import vuejsLogo from '@/assets/logo/vue.png';
import htmlcssLogo from '@/assets/logo/html.png';
import nodejsLogo from '@/assets/logo/nodejs.png';
import pythonLogo from '@/assets/logo/python.png';
import reactLogo from '@/assets/logo/react.webp';

export default {
  name: 'SkillsPage',
  data() {
    return {
      skills: [
        { name: 'JavaScript', logo: javascriptLogo, percentage: 85, color: 'light-blue' },
        { name: 'Vue.js', logo: vuejsLogo, percentage: 90, color: 'light-green-darken-4' },
        { name: 'HTML & CSS', logo: htmlcssLogo, percentage: 100, color: 'lime' },
        { name: 'Node.js', logo: nodejsLogo, percentage: 75, color: 'deep-orange' },
        { name: 'Python', logo: pythonLogo, percentage: 70, color: 'purple' },
        { name: 'React', logo: reactLogo, percentage: 70, color: 'pink' },
      ],
    };
  },
};
</script>

<style>
.skill-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>