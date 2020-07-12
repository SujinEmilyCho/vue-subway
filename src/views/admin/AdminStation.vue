<template>
  <div class="flex justify-center md:py-10 lg:py-10 app-container">
    <div class="max-w-md width-450px rounded bg-white shadow-lg p-6">
      <div class="font-bold text-xl mb-3 text-center">지하철역 관리</div>
      <form>
        <div class="mb-4">
          <input
            v-on:keydown.enter.prevent="addStation"
            v-model="newStationName"
            class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            id="station-name"
            type="text"
            autocomplete="off"
            placeholder="역 이름을 추가해주세요."
          />
          <button
            v-on:click.prevent="addStation"
            id="station-add-btn"
            class="inline-block text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded"
          >
            추가
          </button>
        </div>
      </form>
      <div class="mt-5 flex station-list-container relative overflow-y-auto">
        <div id="station-list" class="w-full">
          <div
            v-for="station in stations"
            class="list-item border border-gray-200 py-2 px-4 text-gray-800"
            v-bind:data-id="station.id"
          >
            {{ station.name }}
            <button
              v-on:click.prevent="deleteStation(station)"
              class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
            >
              <span class="mdi mdi-delete"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Todo: API 연결하기(참고: AdminStation.js)
export default {
  name: 'AdminStation',
  props: ['stations'],
  data: function() {
    return {
      newStationName: '',
    };
  },
  methods: {
    addStation() {
      this.$emit('addStation', this.newStationName);
      this.newStationName = '';
    },
    deleteStation(station) {
      this.$emit('deleteStation', station.id);
    },
  },
};
</script>

<style scoped>
.station-list-container {
  max-height: calc(100% - 100px);
}

#station-name {
  width: calc(100% - 61px);
}
</style>
