import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faTwitter} from "@fortawesome/free-brands-svg-icons"

const Player = (props) => {
    const {player}=props;
    
    const { name,category,value,img,age}=player;
    
    return (
        <div className='bookstore'> 
        <img className='imgsize' src={img} /> 
            <h4> Name: {name}</h4>
            <h4>Category: { category}</h4>
            <h4> Age: {age}</h4>
            <h4>Prize: {value}</h4>
            <button className="btndescription" ><FontAwesomeIcon icon={ faShoppingCart } />Add to Cart</button><br></br><br/>
            <div className='icon'>
            <FontAwesomeIcon className="iconsocial" icon={faFacebook} />
            <FontAwesomeIcon className="iconsocial" icon={faTwitter}/>
            </div>
        </div>
    );
};

export default Player;