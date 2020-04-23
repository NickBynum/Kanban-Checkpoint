<template>
  <div class="boards ">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 class="text-light m-3">Select your board to work with today</h2>
          <form @submit.prevent="addBoard">
            <input type="text" placeholder="title" v-model="newBoard.title" required />
            <input type="text" placeholder="description" v-model="newBoard.description" />
            <button class="btn btn-secondary m-1" type="submit">Create Board</button>
          </form>
        </div>
      </div>
      <div class="row flex-row justify-content-around mt-5">
          <BoardComp v-for="board in boards" :boardData="board" :key="board.id">
            <!-- <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link> -->
          </BoardComp>
    </div>
        </div>
      </div>
</template>

<script>
import BoardComp from "../components/BoardComp";
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
    BoardComp
  }
};
</script>
