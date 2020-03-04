<template>
  <div class="container">
    <h2 class="subtitle">Server Logs</h1>
    <b-table :data="messages" sticky-header v-chat-scroll :mobile-cards="false" striped narrowed>
      <template slot-scope="props">
        <b-table-column
          field="type"
          label="Type"
          width="100"
          :searchable="true"
        >
          {{ props.row.type }}
        </b-table-column>
        <b-table-column
          field="message"
          label="Message"
          :searchable="true"
          v-html="props.row.message"
        >
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    };
  },
  components: {},
  methods: {},
  computed: {},
  props: {},
  beforeMount() {
    this.$options.sockets.onmessage = data => {
      var msg = JSON.parse(data.data);
      if (msg.ClassName) return;
      if (msg.type == 'Chat') {
        msg.data = msg.data.slice(msg.data.indexOf('<'));
      }
      this.messages.push({ type: msg.type, message: msg.data });
    };
  }
};
</script>

<style scoped>
td {
  font-size: 14px;
}
</style>
