<template>
  <form @submit.prevent="handleSubmit">
    <label>UserName:</label>
    <input type="text" required v-model="username" />
    <label>Email:</label>
    <input required v-model="email" />
    <label>Password:</label>
    <input type="password" required v-model="password" />
    <button>Add User</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password:""
    };
  },
  methods: {
    handleSubmit() {
      let user = {
        username: this.username,
        email: this.email,
        password:this.password
      };
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
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
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>