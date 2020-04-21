<template>
  <div class="board container-fluid">
    <div class="row">
      <p>{{board.title}}</p>
    </div>
    <div class="flex-row card bg-dark text-light" v-if="board.title">
      <list v-for="list in lists" :listData="list" :key="list._id"></list>
       <form>
       <input type="text" v-model="newList.title" class="bg-dark text-white input-group-sm border-0 ml-5" placeholder="New List" @submit="addNewList()">
        <button type="submit" @click="addNewList()">submit</button>
        </form>
    </div>

    <!--dont touch
    -->
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import List from "../components/ListComp";
export default {
  data () {
    return {
      newList: {}
    }
  },
  name: "board",
  props: ["boardId"],
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
  methods: {
    addNewList(){
      this.newList.boardId = this.$route.params.boardId
      this.newList.creatorEmail = this.board.creatorEmail
      console.log("addNewList", this.newList.creatorEmail);
      this.$store.dispatch("addNewList", this.newList);
      this.newList = {}
    }
  },
  components: {
    List
  }
};
</script>

<style>

</style>
