<template>
  <div container-fluid>
    <div class="row">
      <div class="col-12">
        <div class="board">
          <h4 class="text-light">{{boardData.title}}</h4>
          <button class="btn btn-light" @click="selectBoard()">Select Board</button>
          <button class="btn btn-danger" @click="DeleteBoard()">Select Board</button>
        </div>
      </div>
    </div>
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
    }
  },
  components: {}
};
</script>


<style scoped>
</style>