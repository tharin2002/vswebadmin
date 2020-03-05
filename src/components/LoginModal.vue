<template>
  <form @submit.prevent="handleSubmit">
    <div class="modal-card" style="width: 320px; margin: 15% auto;">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Code">
          <b-input
            type="password"
            :value="code"
            password-reveal
            placeholder="Your login code"
            required
            v-model="code"
          >
          </b-input>
        </b-field>
        <div class="has-text-centered has-text-grey">
          Use
          <span class="tag is-light is-family-monospace"
            >/httpgateway code</span
          >
          in game.
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" type="submit">Login</button>
      </footer>
    </div>
  </form>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      code: ''
    };
  },
  methods: {
    async handleSubmit() {
      var that = this;
      await axios
        .post('/api/login?code=' + this.code, {
          code: this.code
        })
        .then(function(response) {
          if (response.data?.error) {
            console.warn(response.data.error);
            return;
          }
          window.localStorage.setItem(
            'httpgateway-jwt',
            JSON.stringify(response.data)
          );
          window.location.href = '/';
        })
        .catch(function(error) {
          console.warn(error);
        });
    }
  }
};
</script>
