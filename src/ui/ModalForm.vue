<template>
  <form @submit.prevent="upgradeForm" class="form">
    <h1 class="form__h1">
    <slot/>    
    </h1>
     <input v-model="title" class="form__input" type="text" placeholder="Название статьи">
     <input v-model="body" class="form__input" type="text" placeholder="Текст статьи"> 
       <div class="form__button">   
         <Button @click="update" :disabled="!disable" class="form__btn">Обновить</Button>  
       </div>
  </form>    
</template>

<script>
import Button from './Button.vue'

export default {
  props: {
    id: Number  
  },
  data() {
    return {
      title: '',
      body: ''
    }    
  },
  computed: {
    posts() {
      return this.$store.getters.posts  
    },
    disable() {
      return !!this.title && !!this.body
    }
  },
  methods: {
    update() {
      const data = {
        title: this.title,
        body: this.body,
        id: this.id       
      }
      this.$store.commit('updatePosts', data)
      this.clear()
      alert('Обновление статьи прошло успешно')
    },
    clear() {
      this.title = ''
      this.body = ''  
    }    
  },
  components: {
    Button    
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;  
  &__input {
    background-color: #6f717a;
    color: #fff;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 12px 12px;
    border: none;
    outline: none;    
  }
  &__button {
    margin: 0 auto;  
  }
  &__btn {
    color: #3e3f44;    
  }
  ::placeholder {
    color: white;    
  }
  &__h1 {
    text-align: center;
    font-size: 25px;
    font-family: 'Courier New', Courier, monospace;   
  } 
}  
</style>