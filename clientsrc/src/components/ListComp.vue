<template>
  <div class="list col-12 col-md-6 col-lg-2 border rounded">
    <div v-if="!editing">
      <div class="row">
        <div class="col-12">
          <div class="row justify-content-between">
            <div class="col-8">{{listData.title}}</div>
            <div class="col-4">
              <div class="row">
                  <div class="col-12 p-0">
                    <button class="btn btn-sm text-warning p-0 m-0" @click="editing = true">
                      <svg
                        class="bi bi-pencil"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>

                    <button class="btn btn-sm text-danger p-0 m-0" @click="deleteList()">
                      <svg
                        class="bi bi-trash"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <form  @submit="editList()">
        <input type="text" v-model="listData.title" />
        <button class="btn text-warning" type="submit">Submit</button>
      </form>
    </div>
    <task v-for="task in tasks" :taskData="task" :key="task._id"></task>
    <form @submit="addNewTask()">
       <input type="text" v-model="newTask.title" class="bg-dark text-white m-0 p-0 w-100 border-0" placeholder="Enter New Task">
       <button type="submit" class="btn btn-sm btn-light">Submit Task</button>
    </form>
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
    return {
      editing: false,
      newTask: {}
    };
  },
  computed: {
    profile() {
      return this.$store.state.user;
    },
    tasks() {
      return this.$store.state.tasks[this.listData.id];
    },
  },
  methods: {
    addNewTask() {
      this.newTask.listId = this.listData.id
      this.newTask.creatorEmail = this.listData.creatorEmail
      console.log("addNewList", this.newTask.creatorEmail);
      this.$store.dispatch("addNewTask", this.newTask);
      this.newTask = {}
    },
    deleteList() {
      this.$store.dispatch("deleteList", this.listData);
    },
    editList() {
      this.$store.dispatch("editList", this.listData);
      this.editing = false;
    }
  },
  components: {
    Task
  }
};
</script>


<style scoped>
</style>