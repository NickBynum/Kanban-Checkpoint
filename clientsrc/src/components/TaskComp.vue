<template>
  <div class="task bg-light text-dark border border-primary rounded">
<p class="m-1 p-2">{{taskData.title}}
<button class="btn-primary" @click="editTask()">edit task</button>
</p>
    <comment class="d-none" v-for="comment in comments" :commentData = "comment" :key="comment._id"></comment>

  </div>
</template>


<script>
import Comment from "../components/CommentComp"
export default {
  name: 'task',
  props: ["taskData"],
  mounted() {
    this.$store.dispatch("getCommentByTaskId", this.taskData.id)
  },
  data(){
    return {}
  },
  computed:{
    profile() {
      return this.$store.state.user
    },
    comments() {
      return this.$store.state.comments
    }
  },
  methods:{
    editTask() {
      this.$store.dispatch("editTask", this.taskData);
      // this.editing = false;
    }
  },
  components:{
    Comment
  }
}
</script>


<style scoped>

</style>