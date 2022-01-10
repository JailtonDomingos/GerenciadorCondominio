import React, { useState} from "react";
import LoginForm from "./components/User/LoginForm";
import GenericButton from "./components/GenericButton";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Apartamentos from "./pages/Apartamentos";
import Home from "./pages/Home";
import Condominos from "./pages/Condominos"
import Reservas from "./pages/Reservas"
import Avisos from "./pages/Avisos"


import storeProvider from "./utils/useStorage"

function App() {

  const [user, setUser] = useState({name: "", email: ""}); // Hook for login user/password verify


//Always i'll show login page until log in
  return (
    <div className="App"> 
      <Router className="welcome">
        <storeProvider>
          <Routes>
            <Route exact path="/login" element={<LoginForm/>} />
            <Route path="/" Element={<Home/>} />
          </Routes>
        </storeProvider>
      </Router>
    </div>

  );
}

export default App;

/*
  Antigo button logout: <GenericButton event={Logout} message={'Logout'}/>


  -----

  <div className="App"> 
        {(user.email !== '') ? ( // this.state.isUserAuthenticated
          // user.email !== ''//Verificar futuramente com uma variable true que virá da validação do hash de login
            <>
              <Router className="welcome"> 
                  <NavBar event={Logout}/>
                  <Routes>
                    <Route exact path='/home' element={<Home/>} />
                    <Route exact path='/apartamentos' element={<Apartamentos/>} />
                    <Route exact path='/condominos' element={<Condominos/>} />
                    <Route exact path='/reservas' element={<Reservas/>} />
                    <Route exact path='/avisos' element={<Avisos/>} />
                  </Routes>  
              </Router>
            </>
          ) : (
            <div className="App-Login">
              <>
                <LoginForm Login={Login} error={error} setError={setError} buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} />
              </>
            </div>
          )} 
      </div>
*/
