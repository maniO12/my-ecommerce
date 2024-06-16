import React from 'react'
const Loginsignup = () => {
 
  return (
<div class="main-container">
        <div className="login">
            <div class="form-container6">
                <h1>Sign Up</h1>
                <form id="signupForm">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p class="already-signed-up">Already signed up? <a href="/Loginlog" id="alreadySignupLink">Log in here</a></p>
            </div>
        </div>
    </div>
  )
}

export default Loginsignup
