import React, { useState } from 'react'
import './Style/App.css'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
    { id: 2, title: 'C#', body: 'Programming language' },
    { id: 3, title: 'Python', body: 'Programming language' },
    { id: 4, title: 'Java', body: 'Programming language' },
    { id: 5, title: 'Swift', body: 'Programming language' },
    { id: 6, title: 'Golang', body: 'Programming language' },
  ])

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  return <div className="App_wrapper"></div>
}

export default App
