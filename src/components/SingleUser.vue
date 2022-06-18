<template>
  <div class="project">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ user.name }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditUser', params: { id: user.id } }">
          <span class="material-icons">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-icons">delete</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ user.username }}</p>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/users/" + this.user.id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.user.id))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}


</style>