import React from 'react'
import { Link } from 'react-router-dom'
import "./notFound.scss"

function NotFound() {
  return (

    
    
    <section id='not-found'>
    <Link to={'/'}><p className='salam'>Home / <b>Not Found</b></p></Link>
    <div className="err">
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to={"/"}><button>Back to home page</button></Link>

    </div>


    </section>

  )
}

export default NotFound