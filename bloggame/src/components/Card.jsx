import React from 'react'

import image1 from '../assets/img/image1.jpg'

const Card = () => {
    return (
        <div className="card text-center">
            <img src={image1} alt=""/>
            <div className="card-body">
                <h4 className="card-title">My title</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quod delectus unde, nostrum iusto iste quo molestiae laudantium vitae ratione rerum similique qui odit necessitatibus facere. Accusamus at nam sunt?</p>
                <a href="#!" className="btn btn-outline-secondary"> Go to this website</a>
            </div>
            
        </div>
    )
}

export default Card


