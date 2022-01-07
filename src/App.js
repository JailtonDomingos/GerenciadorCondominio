import React, { useState} from "react";
import LoginForm from "./components/LoginForm";
import GenericButton from "./components/GenericButton";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const adminUser = { // Object admin user for testing
    email: 'admin@admin.com',
    password: 'admin'
  }

  const [user, setUser] = useState({name: "", email: ""}); // Hook for login user/password verify
  const [error, setError] = useState(''); // Hook for error on login
  const [buttonPopup, setButtonPopup] = useState () // Hook for error login popup 

  const Login = details => {
    console.log(details)

     if (details.email === adminUser.email && details.password === adminUser.password) { // If correct user/pass set hook user login
      console.log('Logged in')
      setUser({
        name: details.name, 
        email: details.email
        
      })
      setError('')
     } else { // Setting error for popup message
        setError('Invalid password!')
    }
    console.log(user)
  }

  const Logout = () => { // Function to clear user/pass for log out
    console.log('Logout')

    setUser({name: '', email: ''}) // Setting hook
  }

//Always i'll show login page until log in
  return (
      <div className="App"> 
        {(user.email !== '') ? ( // user.email !== ''//Verificar futuramente com uma variable true que virá da validação do hash de login
            <>
              <Router> 
                <div className="welcome"> 
                    {/*<h2>Welcome, <span>{user.name}</span></h2>*/}

                    <NavBar event={Logout}/>
                    
                    {/*<GenericButton event={Logout} message={'Logout'}/>*/}
                </div>
              </Router>
            </>
          ) : (
            <div className="App-Login">
              <LoginForm Login={Login} error={error} setError={setError} buttonPopup={buttonPopup} setButtonPopup={setButtonPopup}/>
            </div>
          )} 
      </div>

  );
}

export default App;

/*
23:04
16:35 - 1:42:16
  Implementar o component button logout na navbar
  Implementar Logo
  Implementar components para as novas pages

  Re-pensar o login para como irei fazer para user e admin do sistema
  Deixar a primeira tela sendo o login com um background bonito do condominio
  Diferenciar o login de user/admin

*/