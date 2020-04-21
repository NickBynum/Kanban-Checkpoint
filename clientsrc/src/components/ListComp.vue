<template>
  <div class="list">
<h1>this is out list</h1>
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
      return this.$store.state.profile
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