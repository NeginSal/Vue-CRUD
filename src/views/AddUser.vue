<template>
  <form @submit.prevent="handleSubmit">
    <label>Name</label>
    <input type="text" required v-model="name" />
    <div v-if="NameError" class="error">{{ NameError }}</div>
    <label>Email</label>
    <input required type="text" v-model="email" />
    <div v-if="EmailError" class="error">{{ EmailError }}</div>
    <label>Password</label>
    <input required v-model="password" type="password" />
    <div v-if="PasswordError" class="error">{{ PasswordError }}</div>
    <button>Add User</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      NameError: "",
      EmailError: "",
      PasswordError: "",
    };
  },
  methods: {
    handleSubmit() {
      this.NameError =
        this.name.length > 3 ? "" : ".نام وارد شده باید حداقل ۳ حرف داشته باشد";
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
        console.log(user);

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        })
          .then(() => {
            this.$router.push("/");
          })
          .catch((err) => console.log(err));
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