<template>
  <div class="list">
    <h1>{{listData.title}}</h1>
    <p>{{this.$route.params}}</p>
    <button @click="editList()">edit</button>
    <taskComp v-for="task in tasks" :taskData = "task" :key="task._id"></taskComp>
  </div>
</template>


<script>
import TaskComp from "../components/TaskComp";
export default {
  name: "list",
  props: ["listData"],
  mounted() {
    // this.$store.dispatch("getListByBoardId", this.$route.params.listId);
    this.$store.dispatch("getTaskByListId", this.listData.id);
  },
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.user;
    },
    tasks(){
    return this.$store.state.tasks
    }
  },
  methods: {
    editList() {
      this.$store.dispatch("editList", this.listData);
      // this.editing = false;
    }
  },
  components: {
    TaskComp
  }
};
</script>


<style scoped>
</style>