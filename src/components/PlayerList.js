import React from 'react';
import Player from '../components/player';
import players from '../data/players';

const PlayerList = () =>{
      // Debugging
    return(
    <>
        {players.map((player, index) =>(
            <Player className="hello" key={index} {...player}  />

        )
        )}

        
    </>
  );
}

export default PlayerList;