import React, { useState } from 'react'
import Popup from "./Popup";

function LoginForm({ Login, error, trigger, setTrigger }) {
    const [details, setDetails] = useState({name: '', email: '', password: ''})

    const submitHandler = e => {
        e.preventDefault();
        Login(details)    
    }

    return (
        <form onSubmit={submitHandler}> 
            <div className="form-inner">
                <h2>Login</h2>
                {(error != '') ? ( <Popup trigger={trigger} setTrigger={setTrigger}><h3>Invalid Password!</h3></Popup> ) : ''}
                <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input type="name" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})}/>
                </div>
                <input className="button-submit" type="submit" value="LOGIN" onClick={() => setTrigger(true)}/>
            </div>
        </form>
    )
}

export default LoginForm

// Notas que eu estou passando meus valores de detail pela variavel que já esta vindo no parametro 'Login' pela constante details criada na classe
// Investigar se é possível fazer isso para a classe popup com as variaveis de setTriger
// Criar um state na classe popup e passar essa constante para a variavel que virá das classe que chamam este componente

//Corrigir bug erro sempre que der um primeiro Erro no login