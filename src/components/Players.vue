<template>
  <div class="container">
    <h1 class="title">Players</h1>
    <b-table :data="data" :columns="columns" />
  </div>
</template>

<script>
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
          field: 'ip',
          label: 'IP Address'
        }
      ]
    };
  },
  methods: {},
  computed: {
    data: function() {
      var data = [];
      for (var p of this.players) {
        data.push({
          name: p.ServerData.LastKnownPlayername,
          status: p.ConnectionState,
          ip: p.IpAddress
        });
      }
      return data;
    }
  },
  props: {
    players: Array
  }
};
</script>

<style></style>
