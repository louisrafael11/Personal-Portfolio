<template>
  <v-container id="projects" class="my-5">
    <h1 class="white--text">Projects</h1>
    <v-row>
      <v-col v-for="project in projects" :key="project.title" cols="12" md="6" lg="4">
        <v-card class="project-card mb-3" elevation="2">
          <v-img :src="project.image" height="200px" class="project-image" />
          <v-card-title class="project-title white--text">
            {{ project.title }}
          </v-card-title>
          <v-card-text class="white--text">
            <p>{{ project.description }}</p>
            <p><strong>Frameworks Used:</strong> {{ project.frameworks.join(', ') }}</p>
            <v-btn 
              :href="project.deploymentLink" 
              target="_blank" 
              rel="noopener noreferrer" 
              color="primary"
            >
              View Live
            </v-btn>
            <v-btn 
              icon 
              :href="project.githubLink" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="ml-2"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [
        {
          title: 'To-Do List',
          description: 'This To-Do List application is a simple yet powerful tool for managing daily tasks efficiently. Built using modern web technologies, it allows users to add, update, and delete tasks in an intuitive interface.',
          frameworks: ['Vue.js', 'Vuetify'],
          deploymentLink: 'https://louis-rafael-vue.vercel.app/',
          githubLink: 'https://github.com/LouisRafael/todolist', // Replace with your actual GitHub repository link
          image: require('@/assets/images/todolistpng.png'),
        },
        {
          title: 'Weather App',
          description: 'The Weather Tracker App is a responsive, user-friendly application built with Vue.js and Vuetify, designed to fetch and display real-time weather data for multiple cities.',
          frameworks: ['Vue.js', 'Vuetify', 'OpenWeatherMap API'],
          deploymentLink: 'https://weather-app-louissses-projects.vercel.app/',
          githubLink: 'https://github.com/LouisRafael/weather-app', // Replace with your actual GitHub repository link
          image: require('@/assets/images/weather.png'),
        },
        {
          title: 'Personal Blog',
          description: 'A simple personal blog to share thoughts and articles.',
          frameworks: ['HTML', 'CSS', 'JavaScript'],
          deploymentLink: 'http://127.0.0.1:5501/index.html#', // Replace with the live link
          githubLink: 'https://github.com/LouisRafael/personal-blog', // Replace with your actual GitHub repository link
          image: require('@/assets/images/profile.jpg'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.white--text {
  color: white;
}

.project-card {
  transition: transform 0.3s ease, background-color 0.3s ease;
  background-color: rgba(60, 45, 30, 0.8);
  border-radius: 8px;
  height: 100%; /* Ensures all cards are the same height */
}

.project-card:hover {
  transform: scale(1.05);
  background-color: rgba(70, 55, 40, 0.9);
}

.project-image {
  border-radius: 8px 8px 0 0; /* Rounded top corners to match the card */
}

.project-title {
  height: 60px; /* Fixed height for title */
  display: flex;
  align-items: center; /* Center the title vertically */
  justify-content: center; /* Center the title horizontally */
}
</style>
