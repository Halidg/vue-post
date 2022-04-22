<template>
  <section class="form">
    <div class="container">
      <Form>Создание статьи</Form>
      <Button @click="goBack">Назад</Button>    
    </div>
  </section>   
</template>

<script>
import Form from '../ui/Form.vue'
import Button from '../ui/Button.vue'

export default {
  components: {
    Form,
    Button  
  },
  methods: {
    goBack() {
      this.$router.back('/')    
    },
  }
}
</script>

<style lang="scss" scoped>
.form {
  background-color: rgb(182, 178, 178);
  padding: 15px;
  &__content {
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;    
  }
  
}
</style>