<template>
  <div class="post">
    <div class="container">
      <div class="post__buttons">
        <Button v-if="posts.length === 0" @click="downloadPosts" class="post__btn">Загрузить</Button>
        <Button v-if="posts.length !== 0" @click="toCreate">Создать</Button>    
      </div>
      <hr>
      <Search v-if="posts.length !== 0" @updatePost="updatePost" v-model="filter" />
      <div class="post__content" v-for="post in postName" :key="post.id">
        <h1 class="post__h1">Название статьи: {{post.title}}</h1>
        <p class="post__p">Текст статьи: {{post.body}}</p>
        <div class="post__buttons">
         <router-link v-slot="{navigate}"
          custom :to="{name:'Post', params:{id:post.id}}"
         > 
         <Button @click="navigate" class="post__btn">Полный текст</Button>
         </router-link>
         <Button @click="editingModal(post.id)">Редактировать</Button>
         <img @click="deleteModal(post.id)" class="post__icon" src="../assets/delete.svg" alt="">
        </div>
        
        <hr>
      </div>

      <div class="pagination" v-if="posts.length !== 0">
        <div class="pagination__pages" v-for="(page, idx) in pages" :key="idx" @click="changePage(page)" :class="{ 'pagination__pages-selected' : page === pageNumber}">
          {{page}}
        </div> 
      </div>
       
      <modal v-if="modalEdit" @close="modalEdit = false">
        <modal-form :id="id">Обновление Формы</modal-form>   
      </modal>

      <modal v-if="modalDelete" @close="modalDelete = false">
        <confirm-delete :id="id" @click="modalDelete = false"></confirm-delete>   
      </modal>             
    </div>    
  </div>    
  
</template>

<script>
import Button from '../ui/Button.vue'
import Modal from './Modal.vue'
import Search from '../ui/Search.vue'
import ModalForm from '../ui/ModalForm.vue'
import ConfirmDelete from '../ui/ConfirmDelete.vue'

export default {
  components: {
    Button,
    Modal,
    ModalForm,
    ConfirmDelete,
    Search
  },
  data() {
    return {
      modalEdit: false,
      id: null,
      newsPerPage: 10,
      pageNumber: 1,
      filter: '',
      modalDelete: false,
      
    }
  },
  methods: {
    downloadPosts() {
      this.$store.dispatch('getPosts')    
    },
    toCreate() {
      this.$router.push('/create')
    },
    editingModal(id) {
      this.modalEdit = true 
      this.id = id
    },
    deleteModal(id) {
      this.modalDelete = true
      this.id = id 
    },
    changePage(page) {
      this.pageNumber = page   
    },
    updatePost(value) {
      this.filter = value  
    }      
  },
  computed:{
    posts() {
      return this.$store.getters.posts     
    },
    pages() {
    return Math.ceil(this.$store.getters.posts.length / 10)    
  },
    paginatedPosts() {
      let from = (this.pageNumber - 1) * this.newsPerPage
      let to = from + this.newsPerPage
      return this.posts.slice(from, to)
    },
    postName() {
      return this.paginatedPosts.filter(el => {
        if (!this.filter) {
          return true
        }
        return el.title.toLowerCase().includes(this.filter.toLowerCase())
      })  
    }        
  }
}
</script>

<style lang="scss" scoped>
.post {
  background-color: rgb(167, 162, 162);
  &__buttons {
    display: flex;
    margin-bottom: 15px;    
  }  
  &__btn {
    margin: 0 auto;  
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;  
    margin-top: 25px;    
  } 
  &__h1 {
    padding-left: 35px;
    padding-bottom: 25px;
    font-size: 25px;
    font-family: 'Courier New', Courier, monospace;    
  }
  &__p {
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
    padding-bottom: 35px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &__icon {
    width: 20px;
    margin-left: 35px;
    &:hover {
      cursor: pointer;  
    }  
  }       
}
.pagination {
  display: flex;
  justify-content: center;
  &__pages {
    margin-top: 15px;
    margin-left: 15px;
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;;
    padding: 15px;
    border-radius: 5px;
    background-color: white;
    &:hover {
      cursor: pointer;
      background-color: rgb(180, 178, 178);    
    }
    &-selected {
    background-color: rgb(180, 178, 178);  
    }    
  }    
}
</style>