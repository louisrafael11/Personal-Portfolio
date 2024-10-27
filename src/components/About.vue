<template>
  <v-container id="about" class="my-5">
    <h1 class="white--text text-center">About Me</h1>
    
    <v-row>
      <v-col cols="12" class="d-flex align-center justify-space-between">
        <v-avatar size="200px" class="square-image"> <!-- Changed to square -->
          <v-img src="@/assets/images/left.jpg" />
        </v-avatar>
        <div class="about-info">
          <h2 class="white--text">Louis Rafael E. Quiñones</h2>
          <p class="white--text">
            I am 21 years old, born on August 03, 2003. I am now currently studying the degree of Information Technology.
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex align-center justify-space-between">
        <div class="about-info">
          <h2 class="white--text">Student Performer</h2>
          <p class="white--text">
            I am a member of the renowned choral group, Budjong Choral Ensemble. I have competed in local, Mindanao-wide, and national choral competitions representing Caraga State University.
          </p>
        </div>
        <v-avatar size="200px" class="square-image"> <!-- Changed to square -->
          <v-img src="@/assets/images/right.jpg" /> <!-- Make sure this image exists -->
        </v-avatar>
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

.square-image {
  width: 200px; /* Increased size */
  height: 200px; /* Increased size */
  margin: 20px; 
}

.about-info {
  flex-grow: 1; /* Allow the info section to take available space */
  text-align: center; /* Center the text if you want */
}

.justify-space-between {
  justify-content: space-between; /* Distribute space between items */
}
</style>