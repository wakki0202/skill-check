import React, { useState } from 'react'

const ApiFetch = () => {
  const [posts, setPosts] = useState([])
  function getPostData() {
    

      fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          setPosts(data)
        })
    }

  return (
    <div>
      <button onClick={getPostData}>データを取得する</button>
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>

    </div>
  )
}

export default ApiFetch