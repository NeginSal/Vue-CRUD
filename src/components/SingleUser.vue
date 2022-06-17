<template>
  <div class="users">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ user.username }}</h3>
      <div class="icons">
        <span class="material-icons">edit</span>

        <span @click="deleteUser" class="material-icons">delete</span>
      </div>
    </div>
    <div v-if="showDetails">
      <p>{{ user.email }}</p>
      <!-- <p>{{ user.bio }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      showDetails: false,
      uri:'http://localhost:3000/users'+this.user.id
    };
  },
  methods: {
    deleteUser() {
      fetch(this.uri,{methods:'DELETE'})
      .then(()=>this.$emit('delete',this.user.id))
      .catch(err=>console.log(err))
    },
  },
};
</script>


<style scoped>
.users {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
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