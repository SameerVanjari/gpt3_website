import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import './possibility.css'

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request early Access to get started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination </h1>
                <p>Yet bad any for travelling assistance is something you get from the company. this are the features we provide for subscribing to our channel the modest pelican</p>
                <h4>Request early Access to get started</h4>
            </div>
        </div>
    )
}

export default Possibility
