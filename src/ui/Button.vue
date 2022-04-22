<template>
  <button class="btn"
    @click="click"
  >
    <slot/>      
  </button>  
</template>

<script>
export default {
  emits:['click'],
  methods: {
    click() {
      this.$emit('click')    
    }    
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px solid #000000;
  background: transparent;
  padding: 5px 35px;
  color: white;
  font-weight: 700;
  size: 16px;
  line-height: 36px;
  &:hover {
    cursor: pointer;
    background-color: rgb(202, 194, 194);
  }
  &:disabled {
    cursor: not-allowed;  
  }
}

</style>