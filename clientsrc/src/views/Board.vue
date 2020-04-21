<template>
  <div class="board">
    <div v-if="board.title">{{board.title}}
    <list v-for="list in lists" :listData = "list" :key="list._id"></list>


    </div><!--dont touch
    --><div v-else>Loading...</div>
  </div>
</template>

<script>
import List from "../components/ListComp";
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getBoard", this.$route.params.boardId);
  },
  computed: {
    board() {
      //**SOLVED** //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.activeBoard.lists
    },
    profile(){
      return this.$store.state.profile
    }
  },
  props: ["boardId"],
  components: {
    List
  }
};
</script>
