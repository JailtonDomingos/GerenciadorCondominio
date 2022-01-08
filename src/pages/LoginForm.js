import React, { useState } from 'react'
import Popup from "../components/Popup";

function LoginForm( props ) {
    const [details, setDetails] = useState({name: '', email: '', password: ''})

    const submitHandler = e => {
        e.preventDefault();
        props.Login(details)    
    }

    return (
        <form onSubmit={submitHandler}> 
            <div className="form-inner">
                <h2>Login</h2>
                {(props.error !== '') ? ( <Popup buttonPopup={props.buttonPopup} setButtonPopup={props.setButtonPopup} message={'Invalid User/Password'}></Popup> ) : ''}
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
                <input className="button-submit" type="submit" value="LOGIN" onClick={() => props.setButtonPopup(true)}/>
            </div>
        </form>
    )
}

export default LoginForm

// Futuramente criar um component para Button do tipo Input 'Button-submit'
