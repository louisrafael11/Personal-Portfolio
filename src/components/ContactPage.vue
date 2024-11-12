contact vue:

<template>
  <v-container id="contact" class="my-5">
    <h1 class="white--text">Contact Me</h1>
    <v-form @submit.prevent="submit">
      <v-text-field 
        label="Name" 
        class="white--text" 
        v-model="name" 
        :rules="[v => !!v || 'Name is required']"
      ></v-text-field>
      <v-text-field 
        label="Email" 
        class="white--text" 
        v-model="email" 
        :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'Email must be valid']"
      ></v-text-field>
      <v-textarea 
        label="Message" 
        class="white--text" 
        v-model="message" 
        :rules="[v => !!v || 'Message is required']"
      ></v-textarea>
      <v-btn color="primary" @click="submit">Send</v-btn>
    </v-form>

    <!-- Social Media Links -->
    <div class="social-icons">
      <v-icon class="social-icon" color="white" @click="goToLink('https://github.com/louisrafael11')">mdi-github</v-icon>
      <v-icon class="social-icon" color="white" @click="goToLink('https://www.facebook.com/louisrafael11/')">mdi-facebook</v-icon>
      <v-icon class="social-icon" color="white" @click="goToLink('https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Flouisrafaelquinones%2Fprofilecard%2F%3Figsh%3DMW5sYmx3cmN1b3lhMg%253D%253D%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1yVTkJsTlUQHOblHgr6iv5vHyfFhWIoTTAif6bljv_QqgnPdinF1_CxXg_aem_I9J3AQohkNWG_UVKyyKtlw&h=AT3FO2Q_ACjOexD37EqXxrTh3ZNjkh4rQooPHJ5uhv-DKtKQPKG4Qz1gTqCkYGyMi8aSP3uhErIDEqMXUVyiwNFo1oORxqoa8CNH2WZqCP-24IKte2TLZNxU4yqNnW9ZAWIbBsZ-p6I77rM')">mdi-instagram</v-icon>
    </div>
  </v-container>
</template>

<script>
import ScrollReveal from 'scrollreveal';

export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: '',
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
      window.open(url, '_blank');
    },
  },
  mounted() {
    ScrollReveal().reveal('#contact', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      reset: true, // Enables animation on each scroll
    });
  }
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
