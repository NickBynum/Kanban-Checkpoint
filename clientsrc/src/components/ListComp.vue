<template>
  <div class="list col-2 m-2 ml-4 p-2 border rounded">
    <div class="row">
      <div class="col-12">{{listData.title}}</div>

    </div>

    <button class="d-none" @click="editList()">edit</button>
    <task v-for="task in tasks" :taskData = "task" :key="task._id"></task>
  </div>
</template>


<script>
import Task from "../components/TaskComp";
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
    return this.$store.state.tasks[this.listData.id]
    }
  },
  methods: {
    addList(){

    },
    editList() {
      this.$store.dispatch("editList", this.listData);
      // this.editing = false;
    }
  },
  components: {
    Task
  }
};
</script>


<style scoped>
</style>