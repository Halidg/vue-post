<template>
  <input class="search__input" type="text" placeholder="Введите название статьи" v-model="name">
</template>

<script>
export default {
  props:['modelValue'],
  data() {
    return {
      name:''
    }    
  },
  watch: {
    name(value) {
      this.$emit('updatePost', value)    
    }    
  }
}
</script>

<style lang="scss" scoped>
.search__input {
  background-color: #393a3b;
  color: #fff;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 12px 12px;
  border: none;
  outline: none;  
}
</style>