import React, { useState} from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = { 
    email: 'admin@admin.com',
    password: '' 
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState('');

  const Login = details => {
     console.log(details)

     if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log('Logged in')
      setUser({
        name: details.name, 
        email: details.email
      })
      console.log(user)
     } else {
      setError('Details do not match!')
     }
  }

  const Logout = () => {
    console.log('Logout')

    setUser({name: '', email: ''})
  }

  return (
    <div className="App">
      {(user.email != '') ? ( //Verificar futuramente com uma variable true que virá da validação do hash de login
        <div className="Welcome"> 
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )} 
    </div>

  );
}

export default App;
