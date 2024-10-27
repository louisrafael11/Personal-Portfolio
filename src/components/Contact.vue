<template>
  <v-container id="contact" class="my-5">
    <h1 class="white--text">Contact</h1>
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
  </v-container>
</template>

<script>
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
  },
};
</script>

<style scoped>
.white--text {
  color: white;
}
</style>
