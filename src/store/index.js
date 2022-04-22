import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: JSON.parse(localStorage.getItem('posts')) ?? []
  },
  mutations: {
    addToPosts(state, data) {
      state.posts = data
      localStorage.setItem('posts', JSON.stringify(state.posts))
    },
    createPosts(state, data) {
      state.posts.unshift(data)
      localStorage.setItem('posts', JSON.stringify(state.posts))
    },
    deletePosts(state, id) {
      state.posts = state.posts.filter(el => el.id !== id)
      localStorage.setItem('posts', JSON.stringify(state.posts))  
    },
    updatePosts(state, data) {
      state.posts.forEach(el => {
        if (el.id === data.id) {
          el.title = data.title
          el.body = data.body  
        }
      })
      localStorage.setItem('posts', JSON.stringify(state.posts))
    }  
  },
  actions: {
    async getPosts({commit, dispatch}) {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        return response.json()
    })
      commit('addToPosts', data)  
    }
  },
  getters: {
    posts(state) {
      return state.posts  
    },
    postsById: s => id => s.posts.find(el => el.id === +id)
  }
})
