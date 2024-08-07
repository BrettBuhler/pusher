import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import proce
const supabaseUrl = 

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('This is Email', email, "This is Password", password)
    }

    return (
        <div class='form-div'>
            <form onSubmit={handleLogin} class='form-input'>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login