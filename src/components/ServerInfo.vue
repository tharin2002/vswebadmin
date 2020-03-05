<template>
  <div class="container">
    <h2 class="subtitle">Server Information</h2>
    <b-table :data="data" :columns="columns" detailed>
      <template slot="detail" slot-scope="props">
        <ClientOnly>
          <vue-json-pretty
            :path="'res'"
            :data="props.row.config"
            @click="handleClick"
            :deep="1"
            :showLength="true"
            :showDoubleQuotes="false"
            :highlightMouseoverNode="true"
          ></vue-json-pretty>
        </ClientOnly>
      </template>
    </b-table>
  </div>
</template>

<script>
// import VueJsonPretty from 'vue-json-pretty';
export default {
  data() {
    return {
      columns: [
        {
          field: 'name',
          label: 'Name'
        },
        {
          field: 'status',
          label: 'Status'
        },
        {
          field: 'uptime',
          label: 'Uptime (sec)'
        }
      ]
    };
  },
  components: {
    VueJsonPretty: () => import('vue-json-pretty')
  },
  methods: {
    handleClick: () => {}
  },
  computed: {
    data: function() {
      return [
        {
          name: this.server.Config.ServerName,
          status: this.server.CurrentRunPhase,
          uptime: this.server.ServerUptimeSeconds,
          config: this.server.Config
        }
      ];
    }
  },
  props: {
    server: null
  }
};
</script>

<style></style>
