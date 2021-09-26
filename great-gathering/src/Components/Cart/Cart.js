import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for(const player of cart){
        total=total+player.value;
    }
    return (
        <div>
            <h3> <FontAwesomeIcon icon={faUser}/> Player added:{cart.length} </h3>
            
            <h3> Total cost:{total}</h3> 
           {
               cart.map(player=><SelectedPlayer player={player} ></SelectedPlayer>)
           }
           <button className="btnBuy"> Buy Now </button>     
        </div>
    );
};

export default Cart;