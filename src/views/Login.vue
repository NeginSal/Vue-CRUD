<template>
  <form>
    <label>Email:</label>
    <input required v-model="email" />
    <div v-if="EmailError" class="error">{{ EmailError }}</div>
    <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="PasswordError" class="error">{{ PasswordError }}</div>
    <button @click="login">Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      email: "",
      EmailError: "",
      PasswordError: "",
    };
  },
  methods: {
    login() {
      this.EmailError =
        this.email.length > 5
          ? ""
          : ".ایمیل وارد شده باید حداقل ۵ حرف داشته باشد";
      this.PasswordError =
        this.password.length > 8
          ? ""
          : ".رمز وارد شده باید حداقل ۸ رقم داشته باشد";

      let flag = this.NameError || this.EmailError || this.PasswordError;
      if (!flag) {
        let user = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        this.$router.push("/");
      }
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
.error {
  color: red;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>