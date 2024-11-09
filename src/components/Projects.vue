<template>
  <v-container id="projects" class="my-5">
    <h1 class="white--text text-center mb-5">Projects</h1>
    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.title"
        cols="12"
        md="6"
        lg="4"
        class="project-col"
      >
        <v-card class="project-card mb-3" elevation="3">
          <v-img :src="project.image" height="200px" class="project-image" />
          <v-card-title class="project-title white--text">
            {{ project.title }}
          </v-card-title>
          <v-card-text class="project-text white--text">
            <p>{{ project.description }}</p>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <p v-on="on" class="frameworks">
                  <strong>Frameworks:</strong> {{ project.frameworks.join(", ") }}
                </p>
              </template>
              <span>{{ project.frameworks.join(", ") }}</span>
            </v-tooltip>
            <div class="project-links">
              <v-btn
                :href="project.deploymentLink"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                class="mx-1"
                icon
              >
                <v-icon>mdi-web</v-icon>
              </v-btn>
              <v-btn
                :href="project.githubLink"
                target="_blank"
                rel="noopener noreferrer"
                icon
                class="mx-1"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ScrollReveal from "scrollreveal";
export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          title: "To-Do List",
          description:
            "A simple yet powerful tool for managing daily tasks efficiently. Built using modern web technologies.",
          frameworks: ["Vue.js", "Vuetify"],
          deploymentLink: "https://louis-rafael-vue.vercel.app/",
          githubLink: "https://github.com/louisrafael11/Vue-Vercel.git",
          image: require("@/assets/images/todolistpng.png"),
        },
        {
          title: "Weather App",
          description:
            "A responsive, user-friendly application to fetch and display real-time weather data for multiple cities.",
          frameworks: ["Vue.js", "Vuetify", "OpenWeatherMap API"],
          deploymentLink: "https://weather-app-louissses-projects.vercel.app/",
          githubLink: "https://github.com/louisrafael11/Weather-App.git",
          image: require("@/assets/images/weather.png"),
        },
        {
          title: "Personal Blog",
          description: "A simple personal blog to share thoughts and articles.",
          frameworks: ["HTML", "CSS", "JavaScript"],
          deploymentLink: "http://127.0.0.1:5501/index.html#",
          githubLink: "https://github.com/louisrafael11/Tailwind-Personal-Blog.git",
          image: require("@/assets/images/profile.jpg"),
        },
      ],
    };
  },
  mounted() {
    // ScrollReveal for top origin
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal("#projects", { delay: 100 });
    sr.reveal(".projecthead", { delay: 100 });
    sr.reveal(".contacthead", { delay: 100 });
    sr.reveal(".contactdiv", { delay: 300 });

    // ScrollReveal for left origin
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".square-image", { delay: 400 });
    srLeft.reveal(".about3", { delay: 200 });

    // ScrollReveal for right origin
    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".about2", { delay: 500 });
    srRight.reveal(".about1", { delay: 400 });
    srRight.reveal(".about3", { delay: 600 });
    srRight.reveal(".about4", { delay: 700 });
    srRight.reveal(".lastpart", { delay: 100 });
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
  border-radius: 10px;
  overflow: hidden;
}

.project-card:hover {
  transform: scale(1.05);
  background-color: rgba(70, 55, 40, 0.9);
}

.project-image {
  border-radius: 10px 10px 0 0;
}

.project-title {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-text {
  padding: 15px;
}

.project-links {
  display: flex;
  align-items: center;
  justify-content: center;
}

.frameworks {
  cursor: pointer;
  color: #00bcd4;
}
</style>
