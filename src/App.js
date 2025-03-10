import React from 'react';
import PlayerList from './components/PlayerList';



const App = () => {
  return (
    <>
      <div className="main-container">
        <div className="list">
          <PlayerList />
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default App;