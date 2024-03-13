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
  
    // Check if the email ends with @hawk.iit.edu
    if (userObject.email.endsWith("@hawk.iit.edu")) {
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;
      window.location.href = 'dashboard.html'; 
    } else {
      alert("Only users from the organization (with @hawk.iit.edu emails) can log in.");
    }
  }
  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  
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
      { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();
  }, []); 

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
