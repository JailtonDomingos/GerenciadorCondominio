import React, { useState} from "react";
import LoginForm from "./components/LoginForm";
import GenericButton from "./components/GenericButton";

function App() {
  const adminUser = { 
    email: 'admin@admin.com',
    password: 'admin'
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState('');
  const [buttonPopup, setButtonPopup] = useState ()

  const Login = details => {
    console.log(details)

     if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log('Logged in')
      setUser({
        name: details.name, 
        email: details.email
        
      })
      setError('')
     } else {
        setError('Invalid password!')
    }
    console.log(user)
  }

  const Logout = () => {
    console.log('Logout')

    setUser({name: '', email: ''})
  }

  return (
    <div className="App"> 
      {(user.email !== '') ? ( //Verificar futuramente com uma variable true que virá da validação do hash de login
        
        <div className="welcome"> 
          <h2>Welcome, <span>{user.name}</span></h2>
          <GenericButton event={Logout} message={'Logout'}/>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} setError={setError} buttonPopup={buttonPopup} setButtonPopup={setButtonPopup}/>
      )} 
    </div>

  );
}

export default App;