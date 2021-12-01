import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


// 1:11:49 
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
          <div className="gpt3__header-content">
            <h1 className="gradient__text">Let's Build something great with GPT3 Open AI</h1>
            <p>Yet bad for travelling assistance indulgence unpleasing. Not thoughts all excessive blessing. Indulgence wahy everything joy alternation bouldexpress the attachment. Party we years to allow under us </p>

            <div className="gpt3__header-content__input">
              <input type="email" placeholder="Your Email Address" />
              <button type="button">Get Started</button>
            </div>

            <div className="gpt3__header-content__people">
              <img src={people} alt="people" />
              <p>1600 people requested access for your site</p>
            </div>

          </div>
          <div className="gpt3__header-image">
            <img src={ai} alt="ai" />
          </div>
        </div>
    )
}

export default Header
