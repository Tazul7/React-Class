import { supabase } from '../lib/supabase.js';
import { useState } from 'react';

function Login() {
    const [message, setMessage] = useState('');
    
    async function loginForm(e) {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            setMessage('Login Failed: ' + error.message);
        } else {
            setMessage('Login Successful');
        }

    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={loginForm}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <br />
                {message && <h5>{message}</h5>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;