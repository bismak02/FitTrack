// Header.js
import React from 'react';

function Header({ user, onSignOut }) {
  return (
    <header className="App-header">
      {user && (
        <div className="user-info">
          <img src={user.picture} alt="User profile" className="user-pic" />
          <button onClick={onSignOut}>Sign Out</button>
        </div>
      )}
    </header>
  );
}

export default Header;
