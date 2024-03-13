import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

import './App.css';

function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    // Also remove the user info from the nav bar
    updateNavBar({});
  }

  // This function will update the navigation bar
  const updateNavBar = (userObj) => {
    const navBar = document.querySelector('.custom_nav-container .navbar-nav');
    if (navBar) {
      // Clear previous user info
      const existingUserInfo = document.getElementById('userNavInfo');
      if (existingUserInfo) existingUserInfo.remove();
  
      if (Object.keys(userObj).length !== 0) {
        const userDiv = document.createElement('li');
        userDiv.className = 'nav-item';
        userDiv.id = 'userNavInfo';
        userDiv.innerHTML = `
          <a class="nav-link" href="#">
            <img src="${userObj.picture}" alt="User profile" style="height: 40px; width: 40px; border-radius: 20px; margin-right: 5px;">
            ${userObj.name} |
          </a>
        `;
        const signOutButton = document.createElement('button');
        signOutButton.textContent = 'Sign Out';
        // Directly attach an event listener
        signOutButton.addEventListener('click', handleSignOut);
  
        // Append the button to your userDiv
        userDiv.querySelector('a').appendChild(signOutButton);
  
        navBar.appendChild(userDiv);
      }
    }
  };
  
  useEffect(() => {
    window.__ReactApp = {
      handleSignOut
    };

    /* global google */
    google.accounts.id.initialize({
      client_id: "571637408007-ci740cdc7kiu0pujma417ijd9ae4k6vu.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"), 
      { theme: "outline", size: "large", width: 300 }
    );
    google.accounts.id.prompt();

    // Initial call to update the navbar based on the current user state
    updateNavBar(user);
  }, [user]); // Re-run when the user state changes

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
    
  );
}

export default App;
