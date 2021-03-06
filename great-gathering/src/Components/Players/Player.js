import React from 'react';
import './Player.css';
// adding font for social media and marketing 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faTwitter} from "@fortawesome/free-brands-svg-icons"

const Player = (props) => {
    const {player}=props;
    
    const { name,category,value,img,age,country}=player;
   
    return (
        <div className='bookstore'> 
        <img className='imgsize' src={img} /> 
            <h4> Name: {name}</h4>
            <h4>Category: { category}</h4>
            <h4> Deid at:{age} years</h4>
            <h4>Country:{country}</h4>
            <h4>Salary Per Year:$ {value}</h4>
            {/* adding button and its handler for data handling  */}
            <button className="btndescription" onClick={()=>props.selectPlayer(props.player)} ><FontAwesomeIcon icon={ faShoppingCart } />Add to Cart</button><br></br><br/>
            <div className='icon'>
            <FontAwesomeIcon className="iconsocial" icon={faFacebook} />
            <FontAwesomeIcon className="iconsocial" icon={faTwitter}/>
            </div>
        </div>
    );
};

export default Player;