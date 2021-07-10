<template>
  <header class="static flex flex-row items-center justify-between p-3 md:px-20 md:py-3">
    <button v-if="logged" class="px-8 py-3 text-sm font-medium text-white rounded lg:max-w-max bg-primary focus:outline-none" @click="$router.push('/dashboard')">Dashboard</button>
    <button v-if="logged" class="px-8 py-3 text-sm font-medium text-white rounded lg:max-w-max bg-primary focus:outline-none" @click="$router.push('/dashboard')">Dashboard</button>
    <button v-if="logged" class="px-8 py-3 text-sm font-medium text-white rounded lg:max-w-max bg-primary focus:outline-none" @click="$router.push('/dashboard')">Dashboard</button>
  </header>
</template>

<script>
  export default {
    name: 'TopNavigation',
    data() {
      return {
        logged: false,
      };
    },
    mounted() {
      if (localStorage.token) {
        this.logged = true;
      }
    },
  };
</script>
