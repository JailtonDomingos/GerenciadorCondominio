import React, { useState } from 'react'
import Popup from "../Popup";

function initialState() {
	return { user: '', password: '' }
}

function LoginForm() {
    const [values, setValues] = useState(initialState);

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values, 
            [name]: value
        });
    }


    return (
        <div className="App-Login">
            <form> 
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="name" name="name" id="name" onChange={onChange} value={values.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={onChange} value={values.password}/>
                    </div>
                    <input className="button-submit" type="submit" value="LOGIN"/> {/*Implementar um button component*/}
                </div>
            </form>
        </div>
    )
}

export default LoginForm

// Futuramente criar um component para Button do tipo Input 'Button-submit'
