<template>
  <div class="board">
    <div v-if="board.title">{{board.title}}
      


    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getBoard", this.$route.params.boardId)
  },
  computed: {
    board() {
     //**SOLVED** //FIXME This does not work on page reload because the activeBoard is empty in the store 
      return this.$store.state.activeBoard;
    }
  },
  props: ["boardId"]
};
</script>
