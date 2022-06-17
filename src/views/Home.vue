<template>
  <div class="home">
    <div v-if="users.length">
      <div v-for="user in users" :key="user.token">
        <SingleUser :user="user" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleUser from "../components/SingleUser";
export default {
  name: "Home",
  components: {
    SingleUser,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => (this.users = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.users = this.users.filter((user) => {
        return user.id !== id; 
      });
    },
  },
};
</script>