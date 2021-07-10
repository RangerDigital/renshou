<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <section class="w-full p-4 bg-white shadow-lg lg:w-96 lg:p-8 lg:rounded-xl">
      <h1 class="my-1 text-lg font-medium text-gray font-heading">View Alerts</h1>
      <p class="my-2 text-sm text-gray-light"> Currently active alerts</p>

      <div class="my-9">
        <p class="text-xs text-gray-light">Active Alerts</p>
        <div class="w-full h-px my-3 rounded-full bg-gray-lighter"></div>

        <div class="flex flex-col justify-between w-full cursor-pointer my-6c" v-for="(item, index) in alerts" :key="index" @click="$router.push('/stations/' + item.station._id)">
          <p class="my-1 text-sm text-gray">{{ item.createdAt }} Station: {{ item.station.name }}</p>

          <p class="my-1 text-gray">{{ item.message }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Alerts',
    data() {
      return {
        alerts: [],
      };
    },
    methods: {
      getAlerts() {
        this.axios
          .get('/api/alerts')
          .then((payload) => {
            this.alerts = payload.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    mounted() {
      this.getAlerts();
    },
  };
</script>
