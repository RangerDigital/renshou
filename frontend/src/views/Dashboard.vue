<template>
  <div class="flex flex-col w-full min-h-screen">
    <section class="z-10 flex flex-col w-full h-full">
      <AppNavigation />
    </section>

    <Map class="absolute z-0 w-full h-full" :stations="stations" />
  </div>
</template>

<script>
  import Map from '@/components/Map.vue';
  import AppNavigation from '@/components/AppNavigation.vue';

  export default {
    name: 'Dashboard',
    components: {
      AppNavigation,
      Map,
    },
    data() {
      return {
        stations: [],
      };
    },
    methods: {
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
