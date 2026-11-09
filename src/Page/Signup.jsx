import { useState } from 'react';
import { supabase } from '../lib/supabase.js';

function Signup() {
    const [message, setMessage] = useState('');

    async function signupForm(e) {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        const { error } = await supabase.auth.signUp({ email, password }, { data: { name } });

        if (error) {
            setMessage('Signup Failed: ' + error.message);
        }else {
            setMessage('Signup Successful');
        }
    }

    return (
        <div>
            <h1>Signup Page</h1>
            <form onSubmit={signupForm}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" minLength="6" required />
                <br />
                <label htmlFor="confirmPassword">Confirm password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <br />
                {message && <h5>{message}</h5>}
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
