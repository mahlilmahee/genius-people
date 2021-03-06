import React from 'react';
import './Cart.css';
// adding icon link 
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
            <h3 className="totaladded"> <FontAwesomeIcon icon={faUser}/> Person added:{cart.length} </h3>
            
            <h3 className="totaladdedagain"> Total cost: $ {total}  </h3> 
            {/* doing the cart dynamic  */}
           {
               cart.map(player=><SelectedPlayer player={player} key={player.key} ></SelectedPlayer>)
           }
           <button className="btnBuy"> Buy Now </button>     
        </div>
    );
};

export default Cart;