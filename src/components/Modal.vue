<template>
  <div class="container">
    <div class="modal-backdrop"></div>
      <img class="modal__icon" src="../assets/close.svg" alt="" @click="$emit('close')">
      <div class="modal">
        <slot />  
       </div>
    </div>
   
</template>

<script>
import ModalForm from '../ui/ModalForm.vue'

export default {
  props: {
    id: Number  
  },
  emits:['close'],
  components: {
    ModalForm    
  }
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .35);
  z-index: 100;
}

.modal {
 position: fixed;
 top: 60px;
 width: 30%;
 padding: 30px;
 background: #fff;
 z-index: 1000;
 left: 50%;
 border-radius: 10px; 
 transform: translateX(-50%);
 box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
 &__h1 {
   font-size: 30px;
   font-family: 'Courier New', Courier, monospace;    
 }
 &__icon {
  position: fixed;
  top: 60px;
  left: 35%;
  z-index: 2000;
  width: 30px;
  &:hover {
    cursor: pointer;  
  }       
 }
}
</style>