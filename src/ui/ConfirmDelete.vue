<template>
  <div class="delete">
    <h1 class="delete__h1">Вы действительно хотите удалить пост?</h1>
      <Button class="delete__btn" @click="deletePost">Да</Button>
      <Button class="delete__btn">Нет</Button>
  </div>  
</template>

<script>
import Button from './Button.vue'

export default {
  props: {
    id: String  
  },
  components: {
    Button  
  },
  methods: {
    deletePost() {
      this.$store.commit('deletePosts', this.id)    
    }  
  }
}
</script>

<style lang="scss" scoped>
.delete {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__h1 {
    font-size: 25px;
    margin-bottom: 10px;
    font-family: 'Courier New', Courier, monospace;
  }
  &__btn {
    color: black;  
  }    
}
</style>