import React from 'react';
import '../styles.css';  

const Player = ( {name,team,nationality,jerseyNumber,age,imageUrl, flag} ) =>{
    // console.log("Rendering player...", {name, team, nationality, jerseyNumber, age, imageUrl});
    return (
        <>
            <div className="card">
                <div className="container">
                    <div className="background">
                        <div className="player-info">
                            <div className="top">
                                <div className="rating">
                                    <p>99</p>
                                    <p className='pos'>Fw</p>
                                </div>
                                <img alt='player' id='player-img' src={imageUrl}></img>
                            </div>


                            {/* <hr></hr> */}


                            <div className="bottom">
                                <div className="name">
                                    <p>{name}</p>
                                </div>
                                <div className="description">
                                    <div className="one">
                                        <p>AGE: <span className='stat'>{age}</span></p>
                                        <p>TM: <span className='stat'>{team}</span></p>
                                        <p>NAT: <span className='stat'>{nationality}</span></p>
                                    </div>
                                    <div className="two">
                                        {flag}
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Player;