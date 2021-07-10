<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <section class="w-full p-4 bg-white shadow-lg lg:w-auto lg:p-8 lg:rounded-xl">
      <h1 class="my-1 text-lg font-medium text-gray font-heading">Manage Stations</h1>
      <p class="my-2 text-sm text-gray-light">Create a new measurement station.</p>

      <div class="flex flex-col items-center justify-between w-full mt-8 ">
        <div class="w-full my-4">
          <p class="my-2 text-sm text-gray-light">Name</p>

          <input
            v-model="station.name"
            placeholder="... Station Name"
            class="block w-full px-3 py-3 text-sm border-transparent rounded bg-background text-gray placeholder-gray-light lg:w-80 focus:outline-none "
          />
        </div>

        <div class="w-full my-4">
          <p class="my-2 text-sm text-gray-light">Latitude</p>

          <input
            v-model="station.location[0]"
            placeholder="... Station Latitude"
            class="block w-full px-3 py-3 text-sm border-transparent rounded bg-background text-gray placeholder-gray-light lg:w-80 focus:outline-none "
          />
        </div>

        <div class="w-full my-4">
          <p class="my-2 text-sm text-gray-light">Longitude</p>

          <input
            v-model="station.location[1]"
            placeholder="... Station Longitude"
            class="block w-full px-3 py-3 text-sm border-transparent rounded bg-background text-gray placeholder-gray-light lg:w-80 focus:outline-none "
          />
        </div>

        <div class="w-full my-4">
          <p class="my-2 text-sm text-gray-light">Password</p>

          <input
            v-model="station.passsword"
            placeholder="... Station Password"
            class="block w-full px-3 py-3 text-sm border-transparent rounded bg-background text-gray placeholder-gray-light lg:w-80 focus:outline-none "
          />
        </div>

        <button class="px-8 py-3 mx-5 my-5 text-sm text-white rounded lg:my-0 bg-primary disabled:bg-gray disabled:text-gray-light focus:outline-none" @click="addStation()"
          >Add Station</button
        >
      </div>
      <div class="my-9">
        <p class="text-sm text-gray-light">Stations List</p>
        <div class="w-full h-px my-3 rounded-full bg-gray-lighter"></div>

        <div class="flex flex-row justify-between w-full my-6 cursor-pointer" v-for="(item, index) in stations" :key="index" @click="$router.push('/stations/' + item._id)">
          <p class="text-sm text-gray">{{ item.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Stations',
    data() {
      return {
        station: { location: ['', ''] },
        stations: [],
      };
    },
    methods: {
      addStation() {
        this.axios.post('/api/stations', this.station).then(() => {
          this.$router.go(-1);
        });
      },
      getStations() {
        this.axios
          .get('/api/stations')
          .then((payload) => {
            this.stations = payload.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    mounted() {
      this.getStations();
    },
  };
</script>
