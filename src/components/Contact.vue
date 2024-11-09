<template>
  <v-container id="contact" class="my-5">
    <h1 class="white--text c1">Contact Me</h1>
    <v-form @submit.prevent="submit">
      <v-text-field
        label="Name"
        class="white--text c2"
        v-model="name"
        :rules="[(v) => !!v || 'Name is required']"
      ></v-text-field>
      <v-text-field
        label="Email"
        class="white--text c3"
        v-model="email"
        :rules="[
          (v) => !!v || 'Email is required',
          (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
        ]"
      ></v-text-field>
      <v-textarea
        label="Message"
        class="white--text c4"
        v-model="message"
        :rules="[(v) => !!v || 'Message is required']"
      ></v-textarea>
      <v-btn color="primary" class="butt" @click="submit">Send</v-btn>
    </v-form>

    <!-- Social Media Links -->
    <div class="social-icons">
      <v-icon
        class="social-icon"
        color="white"
        @click="goToLink('https://github.com/louisrafael11')"
        >mdi-github</v-icon
      >
      <v-icon
        class="social-icon"
        color="white"
        @click="goToLink('https://www.facebook.com/louisrafael11/')"
        >mdi-facebook</v-icon
      >
      <v-icon
        class="social-icon"
        color="white"
        @click="
          goToLink(
            'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Flouisrafaelquinones%2Fprofilecard%2F%3Figsh%3DMW5sYmx3cmN1b3lhMg%253D%253D%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1yVTkJsTlUQHOblHgr6iv5vHyfFhWIoTTAif6bljv_QqgnPdinF1_CxXg_aem_I9J3AQohkNWG_UVKyyKtlw&h=AT3FO2Q_ACjOexD37EqXxrTh3ZNjkh4rQooPHJ5uhv-DKtKQPKG4Qz1gTqCkYGyMi8aSP3uhErIDEqMXUVyiwNFo1oORxqoa8CNH2WZqCP-24IKte2TLZNxU4yqNnW9ZAWIbBsZ-p6I77rM'
          )
        "
        >mdi-instagram</v-icon
      >
    </div>
  </v-container>
</template>

<script>
import ScrollReveal from "scrollreveal";
export default {
  name: "ContactPage",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submit() {
      // Handle form submission
      if (this.name && this.email && this.message) {
        alert(`Message sent from ${this.name}`);
        // Here, you could add functionality to send the data to a server
      }
    },
    goToLink(url) {
      window.open(url, "_blank");
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

    sr.reveal("", { delay: 100 });
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

    srLeft.reveal(".c1", { delay: 100 });
    srLeft.reveal(".c2", { delay: 200 });
    srLeft.reveal(".c3", { delay: 300 });
    srLeft.reveal(".c4", { delay: 400 });
    srLeft.reveal(".butt", { delay: 500 });

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

    const srBot = ScrollReveal({
      origin: "bottom",
      distance: "40px",
      duration: 2000,
      reset: true,
    });

    srBot.reveal(".social-icons", { delay: 500 });
  },
};
</script>

<style scoped>
.white--text {
  color: white;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 15px; /* Space between icons */
}

.social-icon {
  font-size: 30px; /* Adjust icon size */
  cursor: pointer; /* Change cursor to pointer on hover */
  transition: color 0.3s; /* Smooth color transition */
}

.social-icon:hover {
  color: #007bff; /* Change color on hover */
}
</style>
