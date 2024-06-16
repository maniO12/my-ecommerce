import React from 'react'

const Login = () => {
  return (
    <div className="main-container">
        <div class="form-container6">
            <h1>Login</h1>
            <form id="LoginForm">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <button type="submit">Login</button>
            </form>
            <p class="already-signed-up">Not logged in? <a href="/Login" id="alreadySignupLink">Signup in here</a></p>
        </div>
    </div>
  )
}

export default Login
