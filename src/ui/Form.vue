<template>
  <form @submit.prevent="createForm" class="form">
      <h1 class="form__h1">
        <slot/>    
      </h1>
    <input v-model="title" class="form__input" type="text" placeholder="Название статьи">
    <input v-model="body" class="form__input" type="text" placeholder="Текст статьи">
    <div class="form__button">
      <Button :disabled="!disable">Создать</Button> 
    </div>
  </form>  
</template>

<script>
import Button from './Button.vue'

export default {
  components: {
    Button    
  },
  methods: {
    createForm() {
      const post = {
        title: this.title,
        body: this.body,
        id: Date.now()    
      }
      this.$store.commit('createPosts', post)
      this.clear()  
      alert('Статья успешно создана')     
    },
    clear() {
      this.title = ''
      this.body = ''    
    }    
  },
  data() {
    return {
      title: '',
      body: ''    
    }    
  },
  computed: {
    disable() {
      return !!this.title && !!this.body
    } 
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