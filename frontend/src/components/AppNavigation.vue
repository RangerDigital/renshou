<template>
  <header class="static flex flex-row items-center justify-between p-3 md:px-20 md:py-3">
    <button class="px-8 py-3 text-sm font-medium text-white rounded lg:max-w-max bg-primary focus:outline-none" @click="$router.push('/stations')">Stations</button>
    <button class="px-8 py-3 text-sm font-medium text-white rounded lg:max-w-max bg-primary focus:outline-none" @click="$router.push('/alerts')">Alerts</button>
    <button class="px-8 py-3 text-sm font-medium text-white rounded lg:max-w-max bg-primary focus:outline-none" @click="$router.push('/users')">Users</button>
  </header>
</template>

<script>
  export default {
    name: 'TopNavigation',
  };
</script>
