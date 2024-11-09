<template>
  <v-container id="home" class="my-0 text-center home-container">
    <!-- Avatar Section -->
    <v-avatar size="200px" class="circular-container">
      <v-img src="@/assets/images/profile.jpg" class="circular-image" />
    </v-avatar>

    <!-- Introductory Section -->
    <p class="name-text">Louis Rafael E. Quiñones</p>
    <p class="title-text">Information Technology Student</p>
    <p class="description-text">
      Welcome to my personal portfolio! I’m a passionate IT student at Caraga State
      University, focused on building web applications, exploring new technologies, and
      developing creative projects.
    </p>

    <!-- View Work Button -->
    <v-btn color="primary" class="mt-4 view-work-btn" elevation="5" @click="viewWork">
      View My Work
    </v-btn>
  </v-container>
</template>

<script>
import ScrollReveal from "scrollreveal";

export default {
  name: "HomePage",
  methods: {
    viewWork() {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    // ScrollReveal for top origin
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal("#home", { delay: 100 });
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

    srLeft.reveal(".about1", { delay: 200 });
    srLeft.reveal(".about3", { delay: 200 });

    // ScrollReveal for right origin
    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".about2", { delay: 200 });
    srRight.reveal(".project1", { delay: 400 });
    srRight.reveal(".project2", { delay: 200 });
    srRight.reveal(".project3", { delay: 50 });
    srRight.reveal(".lastpart", { delay: 100 });
  },
};
</script>

<style scoped>
.home-container {
  background: linear-gradient(to bottom right, #3c2d1e, #1e140f);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  backdrop-filter: blur(10px);
}

.circular-container {
  border: 4px solid rgba(255, 255, 255, 0.7);
  padding: 5px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
}

.circular-container:hover {
  transform: scale(1.1);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
}

.circular-image {
  border-radius: 50%;
  object-fit: cover;
}

.name-text {
  font-size: 42px;
  font-weight: 700;
  margin-top: 15px;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  animation: fadeIn 1s ease-in-out;
}

.title-text {
  font-size: 22px;
  margin-top: 5px;
  font-style: italic;
  color: #d3d3d3;
  animation: fadeIn 1.2s ease-in-out;
}

.description-text {
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 20px;
  max-width: 600px;
  line-height: 1.6;
  color: #dcdcdc;
  animation: fadeIn 1.4s ease-in-out;
}

.view-work-btn {
  background-color: #007bff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 12px 30px;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0px 4px 12px rgba(0, 123, 255, 0.4);
}

.view-work-btn:hover {
  background-color: #0056b3;
  box-shadow: 0px 6px 16px rgba(0, 86, 179, 0.5);
}

/* Keyframes for fade-in effect */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
