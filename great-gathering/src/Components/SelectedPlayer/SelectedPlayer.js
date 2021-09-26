import React from 'react';
import './SelectedPlayer.css';
const SelectedPlayer = (props) => {
    const {player}=props;
    const { name,img}=player;
    return (
        <div className="selectedPlayer">
            <img className="lastimg" src={img} />
            <h3 className='playername'>{name} </h3>
            
        </div>
    );
};

export default SelectedPlayer;