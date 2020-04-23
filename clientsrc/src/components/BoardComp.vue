
<template>
  <div class="board col-12 col-md-4 card m-1 p-2">
          <h4 class="text-dark">{{boardData.title}}</h4>
          <p class="text-dark">Description: {{boardData.description}}</p>
          <button class="btn btn-secondary m-1" @click="selectBoard()">Select Board</button>
          <button class="btn btn-danger m-1" @click="DeleteBoard()">Delete Board</button>
  </div>
</template>


<script>
export default {
  name: 'board',
  props: ["boardData"],
  data(){
    return {}
  },
  computed:{},
  methods:{
    selectBoard() {
      this.$store.commit("setActiveBoard", {})
      this.$router.push({
        name: "board",
        params: {boardId: this.boardData.id}
      })
    }
  },
  components:{}
}
</script>


<style scoped>

</style>