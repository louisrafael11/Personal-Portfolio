<template>
  <v-container id="about" class="my-5">
    <h1 class="white--text text-center mb-4">About Me</h1>

    <v-row>
      <!-- Large Profile Picture on Left Side -->
      <v-col
        :cols="12" :md="4" class="d-flex justify-center align-center mb-4 mb-md-0"
      >
        <v-avatar size="250px" class="square-image">
          <v-img src="@/assets/images/abm.jpg" />
          <!-- Replace with your professional picture -->
        </v-avatar>
      </v-col>

      <!-- Text Content on Right Side -->
      <v-col :cols="12" :md="8" class="about-content">
        <!-- Professional Summary Section -->
        <div class="about-info mb-4 about1">
          <h2 class="white--text">Louis Rafael E. Quiñones</h2>
          <p class="white--text">
            I am a 21-year-old Information Technology student at Caraga State University,
            passionate about technology and driven to expand my skills in software and web
            development.
          </p>
        </div>

        <!-- Values & Interests Section -->
        <div class="about-info mb-4 about2">
          <h3 class="white--text">Values & Interests</h3>
          <p class="white--text">
            Dedicated to teamwork, creativity, and ongoing learning. I love exploring new
            tech and finding innovative ways to solve real-world problems.
          </p>
        </div>

        <!-- Background in Performance Section -->
        <div class="about-info mb-4 about3">
          <h3 class="white--text">Student Performer</h3>
          <p class="white--text">
            A proud member of the Budjong Choral Ensemble, I have represented Caraga State
            University in various local and national choral competitions.
          </p>
        </div>

        <!-- Career Goals Section -->
        <div class="about-info about4">
          <h3 class="white--text">Career Goals</h3>
          <p class="white--text">
            Aspiring to specialize in software and web development, with a vision to
            contribute to the tech industry through innovative solutions.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ScrollReveal from "scrollreveal";
export default {
  name: "AboutPage",
  mounted() {
    // ScrollReveal for top origin
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal("#about", { delay: 100 });
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

/* Adjust the avatar image size on smaller screens */
@media (max-width: 600px) {
  .square-image {
    width: 150px;
    height: 150px;
  }

  .about-content {
    padding: 10px;
  }
}

@media (max-width: 960px) {
  .about-info {
    padding: 15px;
  }
}
</style>
