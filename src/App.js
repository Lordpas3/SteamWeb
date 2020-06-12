import React from 'react';
import './App.css';

let games = [
  {
    name: 'Terraria',
    img: require('./img/Terraria.jpg'),
    steamAppID: '105600'
  },
  {
    name: 'Smite',
    img: require('./img/Smite.jpg'),
    steamAppID: '386360'
  },
  {
    name: 'Europa Universalis 4',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  },
  {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }, {
    name: 'Placeholder text',
    img: require('./img/eu4.jpg'),
    steamAppID: '236850'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {games.map(game =>
          <div className='App-margin'>
            <p>{game.name}</p>
            <a href={'steam://run/' + game.steamAppID}>
              <img
                src={game.img}
                alt={game.name}
                height='180px'
                width='320px'
              />
            </a>
          </div>)}
      </header>
    </div >
  );
}


export default App;
