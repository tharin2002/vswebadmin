<template>
  <Layout title="VS Web Admin">
    <h1 class="title has-text-centered">VS Web Admin</h1>
    <ServerInfo v-if="server" :server="server" />
    <br /><br />
    <Players v-if="server" :players="server.Players" />
    <br /><br />
    <ServerLogs v-if="server" />
  </Layout>
</template>
<script>
import axios from 'axios';
import ServerInfo from '~/components/serverinfo.vue';
import Players from '~/components/players.vue';
import ServerLogs from '~/components/serverlogs.vue';
export default {
  data() {
    return {
      server: null,
      jwt: null,
      auth: null,
      poller: null
    };
  },
  beforeMount() {
    this.jwt = JSON.parse(window.localStorage.getItem('httpgateway-jwt'));
    if (!this.jwt) {
      window.location.href = 'login';
    } else {
      this.auth = true;
      axios.defaults.headers.common[
        Object.entries(this.jwt)[0][0]
      ] = Object.entries(this.jwt)[0][1];
    }
  },
  async mounted() {
    try {
      const results = await axios.get('/api/server');
      if (results.data.error) {
        throw results.data.error;
      }
      var that = this;
      this.poller = window.setInterval(
        async function() {
          try {
            const results = await axios.get('/api/server');
            if (results.data.error) {
              throw results.data.error;
            }
            that.server = results.data;
          } catch (e) {
            console.warn(e);
          }
        }.bind(this),
        5000
      );
      this.server = results.data;
      this.$connect(
        'ws://' +
          document.location.host +
          '/ws/' +
          Object.entries(this.jwt)[0][1]
      );
    } catch (e) {
      console.warn(e);
      window.location.href = 'login';
    }
  },
  components: {
    ServerInfo,
    Players,
    ServerLogs
  }
};
</script>
