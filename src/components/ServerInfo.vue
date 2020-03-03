<template>
  <div class="container">
    <h1 class="title">Server Information</h1>
    <b-table :data="data" :columns="columns" detailed>
      <template slot="detail" slot-scope="props">
        <vue-json-pretty
          :path="'res'"
          :data="props.row.config"
          @click="handleClick"
          :deep="1"
          :showLength="true"
          :showDoubleQuotes="false"
          :highlightMouseoverNode="true"
        ></vue-json-pretty>
      </template>
    </b-table>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
export default {
  data() {
    return {
      columns: [
        {
          field: 'name',
          label: 'Name'
          //width: '40',
          //numeric: true
        },
        {
          field: 'status',
          label: 'Status'
        },
        {
          field: 'uptime',
          label: 'Uptime (sec)'
        }
      ],
      data: [
        {
          name: this.server.Config.ServerName,
          status: this.server.CurrentRunPhase,
          uptime: this.server.ServerUptimeSeconds,
          config: this.server.Config
        }
      ]
    };
  },
  components: {
    VueJsonPretty
  },
  methods: {
    handleClick: () => {}
  },
  computed: {},
  props: {
    server: Object
  }
};
</script>

<style></style>
