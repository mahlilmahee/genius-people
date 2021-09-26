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
    
    return (
        <div className="mainPart">
            <div className="bookSectionOnly" >
    {
        
        Players.map(player=> <Player player={player} key={player.key}> </Player>)
          
    }
    </div>
    <Cart></Cart>
        </div>
    );
};

export default Select;