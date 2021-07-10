<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <section class="w-full p-4 bg-white shadow-lg lg:w-auto lg:p-8 lg:rounded-xl">
      <h1 class="my-1 text-lg font-medium text-gray font-heading">Manage Users</h1>
      <p class="my-2 text-sm text-gray-light"> Create or view users.</p>

      <div class="flex flex-col items-center justify-between w-full mt-8 ">
        <div class="w-full my-4">
          <p class="my-2 text-sm text-gray-light">User Email</p>

          <input
            v-model="email"
            placeholder="... User Email"
            class="block w-full px-3 py-3 text-sm border-transparent rounded bg-background text-gray placeholder-gray-light lg:w-80 focus:outline-none "
            autofocus
            autocomplete
          />
        </div>

        <button class="px-8 py-3 mx-5 my-5 text-sm text-white rounded lg:my-0 bg-primary disabled:bg-gray disabled:text-gray-light focus:outline-none" @click="addUser()"
          >Add User</button
        >
      </div>
      <div class="my-9">
        <p class="text-sm text-gray-light">Users List</p>

        <div class="flex flex-row justify-between w-full my-6" v-for="(item, index) in users" :key="index">
          <p class="text-sm text-gray">{{ item.email }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Users',
    data() {
      return {
        email: '',
        users: [],
      };
    },
    methods: {
      addUser() {
        this.axios
          .post('/api/users/', {
            email: this.email,
          })
          .then(() => {
            this.$router.go(-1);
          });
      },
      getUsers() {
        this.axios
          .get('/api/users')
          .then((payload) => {
            this.users = payload.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    mounted() {
      this.getUsers();
    },
  };
</script>
