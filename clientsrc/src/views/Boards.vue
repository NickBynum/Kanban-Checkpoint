<template>
  <div class="boards">
    WELCOME TO THE BOARDS!!!
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <board v-for="board in boards" :boardData="board" :key="board.id">
      <!-- <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link> -->
    </board>
  </div>
</template>

<script>
import Board from "../components/Board";
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  created() {
        this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    }
  },
  components: {
    Board
  }
};
</script>