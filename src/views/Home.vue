<template>
  <div class="home">
    <div v-if="user.length">
      <div v-for="item in user" :key="item.token">
        <p>{{item.username}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => (this.user = data))
      .catch((err) => console.log(err.message));
  },
};
</script>