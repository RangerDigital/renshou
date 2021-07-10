<template>
  <header class="static flex flex-col items-center justify-between p-3 md:flex-row md:px-20 md:py-3">
    <button class="px-8 py-3 text-sm font-medium text-white rounded lg:max-w-max bg-primary focus:outline-none" @click="$router.push('/stations')">Manage Stations</button>
    <button class="px-8 py-3 text-sm font-medium text-white rounded lg:max-w-max bg-primary focus:outline-none" @click="$router.push('/alerts')">View Alerts</button>
    <button class="px-8 py-3 text-sm font-medium text-white rounded lg:max-w-max bg-primary focus:outline-none" @click="$router.push('/users')">Manage Users</button>
  </header>
</template>

<script>
  export default {
    name: 'TopNavigation',
  };
</script>
