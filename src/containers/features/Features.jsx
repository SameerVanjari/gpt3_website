import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'improving end distrusts instantly.',
        text: 'From they fine john he gave of rich. They age at the mrs like imrpoving end distrusts may instantly was houshold appluded.'
    },
    {
        title: 'Become the tended active',
        text: 'From they fine john he gave of rich. They age at the mrs like imrpoving end distrusts may instantly was houshold appluded.'
    },
    {
        title: 'Message or am nothing',
        text: 'From they fine john he gave of rich. They age at the mrs like imrpoving end distrusts may instantly was houshold appluded.'
    },
    {
        title: 'Realy boy county',
        text: 'From they fine john he gave of rich. They age at the mrs like imrpoving end distrusts may instantly was houshold appluded.'
    },
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The future is now and You just need To Realize It. Step into Future Today and make it happen.</h1>
                <p>request early to Access to get started </p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
