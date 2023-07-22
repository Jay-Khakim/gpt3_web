import React from 'react'
import './blog.css'

const Blog = () => {
   return(
    <div className="gpt3__blog section__padding" id='blog'>
      <div className="gpt3__blog-heading"> 
        <h1 className='gradient__text'>
          A lot is happining, We are bloggin it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          Article
        </div>
        <div className="gpt3__blog-container_groupB">
          Article
          Article
          Article 
        </div>
      </div>
    </div>
   )
}

export default Blog