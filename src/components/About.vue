<template>
  <v-container id="about" class="my-5">
    <h1 class="white--text text-center mb-4">About Me</h1>
    
    <v-row>
      <!-- Large Profile Picture on Left Side -->
      <v-col cols="4" class="d-flex justify-center align-center">
        <v-avatar size="250px" class="square-image">
          <v-img src="@/assets/images/abm.jpg" /> <!-- Replace with your professional picture -->
        </v-avatar>
      </v-col>

      <!-- Text Content on Right Side -->
      <v-col cols="8" class="about-content">
        <!-- Professional Summary Section -->
        <div class="about-info mb-4">
          <h2 class="white--text">Louis Rafael E. Quiñones</h2>
          <p class="white--text">
            I am a 21-year-old Information Technology student at Caraga State University, passionate about technology and driven to expand my skills in software and web development.
          </p>
        </div>

        <!-- Values & Interests Section -->
        <div class="about-info mb-4">
          <h3 class="white--text">Values & Interests</h3>
          <p class="white--text">
            Dedicated to teamwork, creativity, and ongoing learning. I love exploring new tech and finding innovative ways to solve real-world problems.
          </p>
        </div>

        <!-- Background in Performance Section -->
        <div class="about-info mb-4">
          <h3 class="white--text">Student Performer</h3>
          <p class="white--text">
            A proud member of the Budjong Choral Ensemble, I have represented Caraga State University in various local and national choral competitions.
          </p>
        </div>

        <!-- Career Goals Section -->
        <div class="about-info">
          <h3 class="white--text">Career Goals</h3>
          <p class="white--text">
            Aspiring to specialize in software and web development, with a vision to contribute to the tech industry through innovative solutions.
          </p>
        </div>
      </v-col>
    </v-row>
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

.about-content {
  padding: 20px;
}

.square-image {
  width: 250px;
  height: 250px;
  border-radius: 8px;
}

.about-info {
  background-color: rgba(60, 45, 30, 0.8);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.about-info:hover {
  transform: scale(1.02);
}
</style>
