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
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store **SOLVED**
      return this.$store.state.activeBoard;
    }
  },
  props: ["boardId"]
};
</script>
