<template>
  <div class="container">
    <h2 class="subtitle">Players</h1>
    <b-table :data="data" :columns="columns" bordered striped narrowed hoverable >
      <template slot="empty">
        <section class="section">
            <div class="content has-text-grey has-text-centered">
                <p>
                    <b-icon
                        icon="emoticon-sad"
                        size="is-large">
                    </b-icon>
                </p>
                <p>No one online.</p>
            </div>
        </section>
      </template>
    </b-table>
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
        },
        {
          field: 'role',
          label: 'Role'
        },
        {
          field: 'language',
          label: 'Language'
        },
        {
          field: 'status',
          label: 'Status'
        },
        {
          field: 'ip',
          label: 'IP Address'
        },
        {
          field: 'ping',
          label: 'Ping'
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
          role: p.Role.Name,
          language: p.LanguageCode,
          status: p.ConnectionState,
          ip: p.IpAddress,
          ping: p.Ping * 1000 + 'ms'
        });
      }
      return data;
    }
  },
  props: {
    players: []
  }
};
</script>

<style></style>
