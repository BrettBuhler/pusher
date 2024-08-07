import React, { useState } from 'react'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignup = async (event) => {
        event.preventDefault()
        console.log('This is Email', email, "This is Password", password)
    }

    return (
        <div class='form-div'>
            <form onSubmit={handleLogin} class='form-input'>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='password' placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}
export default Login