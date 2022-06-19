<template>
  <form @submit.prevent="handleSubmit">
    <label>name</label>
    <input type="text" v-model="name" required />
    <label>username</label>
    <input v-model="username" required />
    <label>email</label>
    <input v-model="email" required />
    <button>Update User</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      uri: "http://localhost:3000/users/" + this.id,
      name: "",
      username: "",
      email: "",
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.name = data.name;
        this.username = data.username;
        this.email = data.email;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.name,
          username: this.username,
          email: this.email,
        }),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>