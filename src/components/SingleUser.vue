<template>
  <div class="users">
    <div class="actions">
      <h3 @click="showDetails=!showDetails">{{ user.username }}</h3>
    </div>
    <div v-if="showDetails" >
      <p>{{ user.email }}</p>
      <p>{{ user.bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false,
    };
  },
  props: ["user"],

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
</style>