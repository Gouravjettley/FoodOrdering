import React from 'react';
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
  return (
    <>
    <div className="contact">
      <h1>Share Your Reviews</h1>
      <textarea  cols="30" rows="10" placeholder='write Something'></textarea><br />
      <button>Submit</button>
    </div>
    <footer  className='foot'>
      <h1>Follow us on</h1><br />
      <ul>
      <a href=""><SocialIcon url="https://www.instagram.com/" /></a>
      <a href=""><SocialIcon url="https://www.facebook.com/" /></a>
      <a href=""><SocialIcon url="https://twitter.com" /></a>
      </ul>
    </footer>
    </>
  )
}

export default Contact