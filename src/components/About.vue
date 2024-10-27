<template>
  <v-container id="about" class="my-5 text-center">
    <h1 class="white--text">About Me</h1>
    <v-avatar size="150px" class="circular-image">
      <v-img src="@/assets/images/profile.jpg" />
    </v-avatar>
    <v-card class="about-card" elevation="5">
      <v-card-text>
        <p class="white--text">
          I am Louis Rafael E. Quiñones, a third-year Information Technology student at Caraga State University.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.white--text {
  color: white;
}

.about-card {
  background-color: rgba(60, 45, 30, 0.8);
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px; 
  transition: transform 0.3s ease, background-color 0.3s ease; 
}

.about-card:hover {
  transform: scale(1.05); 
}

.circular-image {
  width: 150px;
  height: 150px; 
  border-radius: 50%; 
  margin: 20px auto; 
}
</style>
