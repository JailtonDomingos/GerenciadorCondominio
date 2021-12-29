import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: '', email: '', password: ''})

    const submitHandler = e => {
        e.preventDefault();
        
        Login(details)    

    }


    return (
        <form onSubmit={submitHandler}> 
            <div className="form-inner">
                <h2>Login</h2>
                {(error != '') ? ( <div className='error'>{error}</div>  ) : ''}
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
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm
