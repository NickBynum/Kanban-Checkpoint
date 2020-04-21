<template>
  <div class="board container-fluid">
    <div class="row flex-row">
        <p>{{board.title}}</p>
    </div>
      <div class="col-12 card bg-dark text-light" v-if="board.title">
        <div class="row">
          <div class="col-12"></div>
        </div>
        <list v-for="list in lists" :listData="list" :key="list._id"></list>
        <div class="col-6"><button class="btn btn-sm bg-dark text-white" @click="addList()">Add List</button></div>
      </div>


      <!--dont touch
      -->
      <div v-else>Loading...</div>
  </div>
</template>

<script>
import List from "../components/ListComp";
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getBoard", this.$route.params.boardId);
    this.$store.dispatch("getListByBoardId", this.$route.params.boardId);
  },
  computed: {
    board() {
      //**SOLVED** //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    },
    profile() {
      return this.$store.state.user;
    }
  },
  props: ["boardId"],
  components: {
    List
  }
};
</script>
