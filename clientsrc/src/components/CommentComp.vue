<template>
  <div class="comment">
<h1>this is our comment</h1>
<p>{{commentData.title}}</p>
<button @click="editComment()">edit comment</button>

  </div>
</template>


<script>
export default {
  name: 'comment',
  props: ["commentData"],
  data(){
    return {}
  },
  computed:{
    profile() {
      return this.$store.state.user
    }
  },
  methods:{
    editComment() {
      this.$store.dispatch("editComment", this.commentData);
      // this.editing = false;
    }
  },
  components:{}
}
</script>


<style scoped>

</style>