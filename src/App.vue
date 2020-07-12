<template>
  <div id="app">
    <admin-header></admin-header>
    <router-view
      v-bind:stations="stations"
      v-on:addStation="addStation"
      v-on:deleteStation="deleteStation"
    ></router-view>
  </div>
</template>

<script>
import AdminHeader from './components/AdminHeader';
export default {
  name: 'app',
  components: { AdminHeader },
  data: function() {
    return {
      stations: [
        { id: 1, name: '낙성대역' },
        { id: 2, name: '사당역' },
      ],
    };
  },
  methods: {
    addStation(stationName) {
      const lastStation = this.stations.pop();
      const lastId = lastStation.id;
      this.stations.push(lastStation);
      this.stations.push({ id: lastId + 1, name: stationName });
    },
    deleteStation(stationId) {
      const index = this.stations.findIndex(
        station => station.id === stationId,
      );
      console.log(index);
      this.stations.splice(index, 1);
    },
  },
};
</script>

<style>
/*admin-app.css 파일*/
.app-container {
  height: calc(100vh - 78px);
}

.main-logo {
  width: 170px;
}

body {
  overflow-y: hidden;
}

body.modal-active {
  overflow-x: hidden;
  overflow-y: visible !important;
}

.width-350px {
  width: 350px;
}

.width-400px {
  width: 400px;
}

.width-450px {
  width: 450px;
}

.top-28px {
  top: 28px;
}

.left-10px {
  left: 10px;
}

.right-10px {
  right: 10px;
}

.top-50 {
  top: 50%;
}

.bottom-6px {
  bottom: 6px;
}

.height-90 {
  height: 90%;
}
</style>
