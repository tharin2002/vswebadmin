<template>
  <Layout title="VS Web Admin">
    <br />
    <div>
      <ServerInfo v-if="this.server" :server="this.server" />
      <br />
      <Players
        v-if="this.server && this.server.Players"
        :players="this.server.Players"
      />
    </div>
    <br />
    <footer class="footer">
      <!-- <div class="content has-text-centered">
        <p>
          <strong>Gridsome Starter Buefy</strong> by
          <a href="https://FriendlyUser.github.io">David Li</a>. The source code
          is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div> -->
    </footer>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue';
import Players from '~/components/Players.vue';
import ServerInfo from '~/components/ServerInfo.vue';
import axios from 'axios';
export default {
  data() {
    return {
      server: null
    };
  },
  components: {
    Layout,
    Players,
    ServerInfo
  },
  async mounted() {
    try {
      //const results = await axios.get('/api/server');
      //this.server = results.data;
      if (!this.server) {
        this.server = JSON.parse(
          '{"Config":{"ConfigVersion":"1.3","ServerMonitor":true,"MasterserverUrl":"http://masterserver.vintagestory.at/api/v1/servers/","ClientConnectionTimeout":600,"ClientPlayingTimeout":60,"BuildLogging":false,"EntityDebugMode":false,"MapSizeX":1000000,"MapSizeY":256,"MapSizeZ":1000000,"ServerLanguage":"en","SkipEveryChunkRow":0,"SkipEveryChunkRowWidth":0,"ModPaths":["Mods","/Users/anthony/dev/data/Mods"],"WorldConfig":{"Seed":null,"SaveFileLocation":"/Users/anthony/dev/data/Saves/modding test world.vcdbs","WorldName":"modding test world","AllowCreativeMode":true,"PlayStyle":"creativebuilding","PlayStyleLangCode":"creativebuilding","WorldType":"superflat","WorldConfiguration":{"worldClimate":"superflat","gameMode":"creative","hoursPerDay":"2400","cloudypos":"0.5","temporalStability":"false","temporalStorms":"off"},"MapSizeY":null,"CreatedByPlayerName":null,"DisabledMods":[]},"NextPlayerGroupUid":10,"GroupChatHistorySize":20,"MaxOwnedGroupChannelsPerUser":10,"ServerName":"Vintage Story Server","ServerUrl":null,"ServerDescription":null,"WelcomeMessage":"Welcome {0}, may you survive well and prosper","Ip":null,"Port":42420,"Upnp":false,"CompressPackets":true,"AdvertiseServer":true,"MaxClients":16,"Password":null,"MaxChunkRadius":12,"TickTime":33.3333321,"BlockTickChunkRange":3,"MaxMainThreadBlockTicks":10000,"RandomBlockTicksPerChunk":16,"BlockTickInterval":300,"Roles":[{"Code":"suvisitor","Name":"Survival Visitor","Description":"Can only visit this world and chat but not use/place/break anything","PrivilegeLevel":-1,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["chat"],"RuntimePrivileges":[],"DefaultGameMode":1,"Color":"Green","LandClaimAllowance":0,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":3,"AutoGrant":false},{"Code":"crvisitor","Name":"Creative Visitor","Description":"Can only visit this world, chat and fly but not use/place/break anything","PrivilegeLevel":-1,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["chat"],"RuntimePrivileges":[],"DefaultGameMode":2,"Color":"DarkGray","LandClaimAllowance":0,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":3,"AutoGrant":false},{"Code":"limitedsuplayer","Name":"Limited Survival Player","Description":"Can use/place/break blocks only in permitted areas (priv level -1), create/manage player groups and chat","PrivilegeLevel":-1,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["controlplayergroups","manageplayergroups","chat","build","useblock","attackcreatures","attackplayers"],"RuntimePrivileges":[],"DefaultGameMode":1,"Color":"White","LandClaimAllowance":0,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":3,"AutoGrant":false},{"Code":"limitedcrplayer","Name":"Limited Creative Player","Description":"Can use/place/break blocks in only in permitted areas (priv level -1), create/manage player groups, chat, fly and set his own game mode (= allows fly and change of move speed)","PrivilegeLevel":-1,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["controlplayergroups","manageplayergroups","chat","build","useblock","gamemode","freemove","attackcreatures","attackplayers"],"RuntimePrivileges":[],"DefaultGameMode":2,"Color":"LightGreen","LandClaimAllowance":0,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":3,"AutoGrant":false},{"Code":"suplayer","Name":"Survival Player","Description":"Can use/place/break blocks in unprotected areas (priv level 0), create/manage player groups and chat. Can claim an area of up to 8 chunks.","PrivilegeLevel":0,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["controlplayergroups","manageplayergroups","chat","areamodify","build","useblock","attackcreatures","attackplayers"],"RuntimePrivileges":[],"DefaultGameMode":1,"Color":"White","LandClaimAllowance":262144,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":3,"AutoGrant":false},{"Code":"crplayer","Name":"Creative Player","Description":"Can use/place/break blocks in all areas (priv level 100), create/manage player groups, chat, fly and set his own game mode (= allows fly and change of move speed). Can claim an area of up to 40 chunks.","PrivilegeLevel":100,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["controlplayergroups","manageplayergroups","chat","areamodify","build","useblock","gamemode","freemove","attackcreatures","attackplayers"],"RuntimePrivileges":[],"DefaultGameMode":2,"Color":"LightGreen","LandClaimAllowance":1310720,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":6,"AutoGrant":false},{"Code":"sumod","Name":"Survival Moderator","Description":"Can use/place/break blocks everywhere (priv level 200), create/manage player groups, chat, kick/ban players and do serverwide announcements. Can claim an area of up to 4 chunks.","PrivilegeLevel":200,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["controlplayergroups","manageplayergroups","chat","areamodify","build","useblock","buildblockseverywhere","useblockseverywhere","kick","ban","announce","readlists","attackcreatures","attackplayers"],"RuntimePrivileges":[],"DefaultGameMode":1,"Color":"Cyan","LandClaimAllowance":1310720,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":60,"AutoGrant":false},{"Code":"crmod","Name":"Creative Moderator","Description":"Can use/place/break blocks everywhere (priv level 500), create/manage player groups, chat, kick/ban players, fly and set his own or other players game modes (= allows fly and change of move speed). Can claim an area of up to 40 chunks.","PrivilegeLevel":500,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["controlplayergroups","manageplayergroups","chat","areamodify","build","useblock","buildblockseverywhere","useblockseverywhere","kick","ban","gamemode","freemove","commandplayer","announce","readlists","attackcreatures","attackplayers"],"RuntimePrivileges":[],"DefaultGameMode":2,"Color":"Cyan","LandClaimAllowance":1310720,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":60,"AutoGrant":false},{"Code":"admin","Name":"Admin","Description":"Has all privileges, including giving other players admin status.","PrivilegeLevel":99999,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["build","useblock","buildblockseverywhere","useblockseverywhere","attackplayers","attackcreatures","freemove","gamemode","pickingrange","chat","kick","ban","whitelist","setwelcome","announce","readlists","give","areamodify","setspawn","controlserver","tp","time","grantrevoke","root","commandplayer","controlplayergroups","manageplayergroups","worldedit","denybreakreinforced"],"RuntimePrivileges":[],"DefaultGameMode":1,"Color":"LightBlue","LandClaimAllowance":2147483647,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":99999,"AutoGrant":true}],"DefaultRoleCode":"suplayer","AntiAbuse":0,"OnlyWhitelisted":false,"VerifyPlayerAuth":true,"DefaultSpawn":null,"AllowPvP":true,"AllowFireSpread":true,"AllowFallingBlocks":true},"CurrentRunPhase":"RunGame","IsDedicated":false,"IsShuttingDown":false,"Players":[{"CurrentChunkSentRadius":5,"Role":{"Code":"admin","Name":"Admin","Description":"Has all privileges, including giving other players admin status.","PrivilegeLevel":99999,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["build","useblock","buildblockseverywhere","useblockseverywhere","attackplayers","attackcreatures","freemove","gamemode","pickingrange","chat","kick","ban","whitelist","setwelcome","announce","readlists","give","areamodify","setspawn","controlserver","tp","time","grantrevoke","root","commandplayer","controlplayergroups","manageplayergroups","worldedit","denybreakreinforced"],"RuntimePrivileges":[],"DefaultGameMode":1,"Color":"LightBlue","LandClaimAllowance":2147483647,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":99999,"AutoGrant":true},"ServerData":{"PlayerUID":"R8yjLNOEOYIbdiM2z14VuxKn","RoleCode":"admin","PermaPrivileges":[],"DeniedPrivileges":[],"PlayerGroupMemberShips":{},"AllowInvite":true,"LastKnownPlayername":"Thaeryn","CustomPlayerData":{},"ExtraLandClaimAllowance":0,"ExtraLandClaimAreas":0},"Ping":0.034,"LanguageCode":"en","IpAddress":"127.0.0.1","ConnectionState":"Playing","Groups":[],"SpawnPosition":{"Radius":0,"Motion":{"X":0,"Y":0,"Z":0,"AsBlockPos":{"X":0,"Y":0,"Z":0}},"X":500000.5,"Y":4,"Z":500000.5,"Roll":0,"Yaw":0.7201784,"Pitch":3.14159274,"Stance":0,"AsBlockPos":{"X":500000,"Y":4,"Z":500000},"XYZInt":{"X":500000,"Y":4,"Z":500000},"XYZ":{"X":500000.5,"Y":4,"Z":500000.5,"AsBlockPos":{"X":500000,"Y":4,"Z":500000}},"XYZFloat":{"X":500000.5,"Y":4,"Z":500000.5,"R":500000.5,"G":4,"B":500000.5}}},{"CurrentChunkSentRadius":5,"Role":{"Code":"admin","Name":"Admin","Description":"Has all privileges, including giving other players admin status.","PrivilegeLevel":99999,"DefaultSpawn":null,"ForcedSpawn":null,"Privileges":["build","useblock","buildblockseverywhere","useblockseverywhere","attackplayers","attackcreatures","freemove","gamemode","pickingrange","chat","kick","ban","whitelist","setwelcome","announce","readlists","give","areamodify","setspawn","controlserver","tp","time","grantrevoke","root","commandplayer","controlplayergroups","manageplayergroups","worldedit","denybreakreinforced"],"RuntimePrivileges":[],"DefaultGameMode":1,"Color":"LightBlue","LandClaimAllowance":2147483647,"LandClaimMinSize":{"X":5,"Y":5,"Z":5},"LandClaimMaxAreas":99999,"AutoGrant":true},"ServerData":{"PlayerUID":"D8ylLNOXOYIboiP2z14QulKv","RoleCode":"admin","PermaPrivileges":[],"DeniedPrivileges":[],"PlayerGroupMemberShips":{},"AllowInvite":true,"LastKnownPlayername":"Dingus","CustomPlayerData":{},"ExtraLandClaimAllowance":0,"ExtraLandClaimAreas":0},"Ping":0.034,"LanguageCode":"en","IpAddress":"127.0.0.1","ConnectionState":"Playing","Groups":[],"SpawnPosition":{"Radius":0,"Motion":{"X":0,"Y":0,"Z":0,"AsBlockPos":{"X":0,"Y":0,"Z":0}},"X":500000.5,"Y":4,"Z":500000.5,"Roll":0,"Yaw":0.7201784,"Pitch":3.14159274,"Stance":0,"AsBlockPos":{"X":500000,"Y":4,"Z":500000},"XYZInt":{"X":500000,"Y":4,"Z":500000},"XYZ":{"X":500000.5,"Y":4,"Z":500000.5,"AsBlockPos":{"X":500000,"Y":4,"Z":500000}},"XYZFloat":{"X":500000.5,"Y":4,"Z":500000.5,"R":500000.5,"G":4,"B":500000.5}}}],"ServerUptimeMilliseconds":262038,"ServerUptimeSeconds":262,"TotalReceivedBytes":93612,"TotalSentBytes":9349172,"TotalWorldPlayTime":0}'
        );
      }
      console.log(this);
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style></style>
