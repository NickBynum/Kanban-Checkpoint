
<template>
  <div class="board col-12 col-md-4 card m-1 p-2">
    <h4 class="text-dark">{{boardData.title}}</h4>
    <p class="text-dark">Description: {{boardData.description}}</p>
    <button class="btn btn-secondary m-1" @click="selectBoard()">Select Board</button>
    <button class="btn btn-danger m-1" @click="deleteBoard()">Delete Board</button>
  </div>
</template>


<script>
export default {
  name: "board",
  props: ["boardData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectBoard() {
      this.$store.commit("setActiveBoard", {});
      this.$router.push({
        name: "board",
        params: { boardId: this.boardData.id }
      });
    },
    deleteBoard() {
      if(confirm('Are you sure?')){
      this.$store.dispatch("deleteBoard", this.boardData);
      }
    },
    editBoard() {
      this.$store.dispatch("editBoard", this.boardData);
      this.editing = false;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>