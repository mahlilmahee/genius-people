import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Select.css';
import Player from '../Players/Player';
const Select = () => {
    const [Players, setPlayers]=useState([]);
    useEffect(()=>{
        fetch('./cricketer.json')
        .then(res=>res.json())
        .then(player=>setPlayers(player))
    },[])
    const [cart,setCart]=useState([]);
    const selectPlayer=(player)=>{
        
     const idOfPlayer=player.key; 
     console.log(idOfPlayer);
     const matchingElement=cart.find(player=>player.key===idOfPlayer);
     if(!matchingElement){
         const newCart=[...cart,player];
                setCart(newCart);
     }
          else{

          }      

    }

    return (
        <div className="mainPart">
            <div className="bookSectionOnly" >
    {
        
        Players.map(player=> <Player player={player} key={player.key} selectPlayer={selectPlayer}>  </Player>)
          
    }
    </div>
    <Cart cart={cart}></Cart>
        </div>
    );
};

export default Select;