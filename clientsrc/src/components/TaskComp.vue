<template>
  <div class="task">
<h1>this is our task</h1>
<p>{{taskData.title}}</p>
<button @click="editTask()">edit</button>

  </div>
</template>


<script>
export default {
  name: 'task',
  props: ["taskData"],
  data(){
    return {}
  },
  computed:{
    profile() {
      return this.$store.state.user
    }
  },
  methods:{
    editTask() {
      this.$store.dispatch("editTask", this.taskData);
      // this.editing = false;
    }
  },
  components:{}
}
</script>


<style scoped>

</style>