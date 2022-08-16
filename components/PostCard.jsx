import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className='card mb-3'>
      <img src='https://images.unsplash.com/photo-1600443546015-f9b924a5b416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBkZXNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80' className='card-img-top img-fluid post-image' alt='...'/>
      <div className='card-body text-center'>
        <h5 className='card-title fw-bold'>{post.title}</h5>
        <div className='d-flex justify-content-center text-muted my-3'>
          <p className='mx-2 my-0'>Author</p>
          <p className='mx-2 my-0'>Date</p>
        </div>
        <p className='card-text text-muted'>{post.excerpt}</p>
        <button className='btn btn-primary continue-reading-btn btn-info'>Continue Reading</button>
      </div>
    </div>
  )
}

export default PostCard