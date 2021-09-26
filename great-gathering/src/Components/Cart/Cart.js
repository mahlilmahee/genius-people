import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
const Cart = () => {
    return (
        <div>
            <h3> <FontAwesomeIcon icon={faUser}/> Player added: </h3>
            
            <h3> Total cost:</h3>      
              </div>
    );
};

export default Cart;