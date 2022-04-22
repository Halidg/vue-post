<template>
  <section class="post">
    <div class="container">
      <h1 class="post__h1">Полный текст</h1>
      <p class="post__p">{{post.body}}</p>
      <Button @click="goBack">Назад</Button>
    </div>    
  </section>
</template>

<script>
import Button from '../ui/Button.vue'

export default {
  computed: {
    post() {
      return this.$store.getters.postsById(this.$route.params.id)    
    }    
  },
  components: {
    Button    
  },
  methods: {
    goBack() {
      this.$router.back('/')    
    } 
  }
}
</script>

<style lang="scss" scoped>
.post {
   background-color: rgb(182, 178, 178);
   &__h1 {
     font-size: 30px;
     font-family: 'Courier New', Courier, monospace;
     padding-bottom: 25px;    
   }
   &__p {
     font-size: 20px;
     font-family: 'Courier New', Courier, monospace;
     padding-bottom: 25px;
   }   
}
</style>