<template>
  <div class="list">
<h1>this is our list</h1>
<p>{{listData.title}}</p>
<button @click="editList()">edit</button>

  </div>
</template>


<script>
export default {
  name: 'list',
  props: ["listData"],
  data(){
    return {}
  },
  computed:{
    profile() {
      return this.$store.state.user
    }
  },
  methods:{
    editList() {
      this.$store.dispatch("editList", this.listData);
      // this.editing = false;
    }
  },
  components:{}
}
</script>


<style scoped>

</style>