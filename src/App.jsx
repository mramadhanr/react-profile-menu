import React from 'react';

import ProfileMenu from './components/ProfileMenu.js/ProfileMenu';

import profilePic from './media/img/profile-pic.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app__profile-menu">
        <ProfileMenu src={profilePic} />
      </div>
    </div>
  );
}

export default App;
