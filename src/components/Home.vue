<template>
  <v-container id="home" class="my-0 text-center home-container">
    <v-avatar
      size="200px"
      class="circular-container"
    >
      <v-img
        src="@/assets/images/profile.jpg"
        class="circular-image"
      />
    </v-avatar>
    <p class="name-text">Louis Rafael E. Quiñones</p>
    <p class="title-text">Aspiring Programmer</p>
    <v-btn color="primary" class="mt-4" elevation="5" @click="viewWork">
      View My Work
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    viewWork() {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
.home-container {
  background: linear-gradient(to bottom, rgba(60, 45, 30, 0.9), rgba(30, 20, 15, 0.9));
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  backdrop-filter: blur(10px); /* Optional: Adds glassmorphism effect */
}

.circular-container {
  border: 4px solid rgba(255, 255, 255, 0.7);
  padding: 5px;
  transition: transform 0.4s ease;
}

.circular-container:hover {
  transform: scale(1.05); /* Slightly enlarges the container on hover */
}

.circular-image {
  border-radius: 50%;
  object-fit: cover; /* Ensures the image fills the container */
}

.name-text {
  font-size: 42px;
  font-weight: 700;
  margin-top: 15px;
  letter-spacing: 1px;
  font-family: 'Poppins', sans-serif;
}

.title-text {
  font-size: 22px;
  margin-top: 10px;
  font-style: italic;
}

.v-btn {
  background-color: #007bff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: background-color 0.3s;
}

.v-btn:hover {
  background-color: #0056b3;
}
</style>
