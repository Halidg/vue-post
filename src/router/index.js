import { createRouter, createWebHashHistory } from 'vue-router'
import Posts from '../components/Posts.vue'
import CreatePosts from '../components/CreatePosts.vue'
import PostView from '../views/PostView.vue'

const routes = [
  {
    path: '/', name: 'Home', component: Posts 
  },
  {
    path: '/create', name: 'Create', component: CreatePosts
  },
  {
    path: '/post/:id', name: 'Post', component: PostView 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
