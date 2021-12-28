import React, { useState} from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = { 
    email: 'admin@admin.com',
    password: 'teste123' 
  }

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');

  const Login = details => {
     console.log(details)
  }

  const Logout = () => {
    console.log('Logout')
  }

  return (
    <div className="App">
      {(user.email != '') ? (
        <div className="Welcome"> 
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm/>
      )}
    </div>

  ); // Return
}

export default App;
