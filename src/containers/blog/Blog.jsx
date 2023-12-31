import React from 'react'
import './blog.css'
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from "./imports"

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
          <Article imgUrl={blog01} date={"Jul 23, 2023"} title={"GPT-3 and Open AI it the future. Let us explore how it is?"}/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date={"Jul 23, 2023"} title={"GPT-3 and Open AI it the future. Let us explore how it is?"}/>
          <Article imgUrl={blog03} date={"Jul 23, 2023"} title={"GPT-3 and Open AI it the future. Let us explore how it is?"}/>
          <Article imgUrl={blog04} date={"Jul 23, 2023"} title={"GPT-3 and Open AI it the future. Let us explore how it is?"}/> 
          <Article imgUrl={blog05} date={"Jul 23, 2023"} title={"GPT-3 and Open AI it the future. Let us explore how it is?"}/> 
        </div>
      </div>
    </div>
   )
}

export default Blog