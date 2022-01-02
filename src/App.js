import React, { useState} from "react";
import LoginForm from "./components/LoginForm";
import GenericButton from "./components/GenericButton";

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

  return (
    <div className="App"> // Always i'll show login page until log in
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
