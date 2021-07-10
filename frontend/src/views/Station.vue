<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <section class="w-full p-4 bg-white shadow-lg lg:w-96 lg:p-8 lg:rounded-xl ">
      <h1 class="my-1 text-lg font-medium text-gray font-heading">Station Details - {{ station.name }}</h1>
      <p class="my-2 text-sm text-gray-light">Station Information</p>

      <div class="flex flex-col items-center justify-between w-full mt-8 ">
        <div class="w-full my-4">
          <p class="my-2 text-sm text-gray-light">Name</p>

          <p class="my-2 text-gray">{{ station.name }}</p>
        </div>

        <div class="w-full my-4">
          <p class="my-2 text-sm text-gray-light">Location</p>

          <p class="my-2 text-gray">{{ station.location }}</p>
        </div>

        <div class="w-full my-4">
          <p class="my-2 text-sm text-gray-light">Current Weather</p>

          <p class="my-2 text-gray">30 °C | Wind: 30 km/h</p>
        </div>
      </div>

      <div class="my-9">
        <p class="text-sm text-gray-light">Measurements</p>

        <div class="flex flex-col justify-between w-full my-6 cursor-pointer" v-for="(item, index) in measurements" :key="index">
          <p class="text-sm text-gray">- {{ item.createdAt }}</p>
          <p class="text-sm text-gray" v-for="(value, index) in item.values" :key="index"> : {{ value.name }} = {{ value.value }} {{ value.unit }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Station',
    data() {
      return {
        station: {},
        measurements: [],
      };
    },
    methods: {
      getStation(stationId) {
        this.axios
          .get('/api/stations/' + stationId)
          .then((payload) => {
            this.station = payload.data;
          })
          .catch((err) => {
            console.log(err);
          });

        this.axios
          .get('/api/stations/' + stationId + '/measurements')
          .then((payload) => {
            this.measurements = payload.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    mounted() {
      this.getStation(this.$route.params.stationId);
    },
  };
</script>
