import {supabase} from '../lib/supabase.js';
import { useState } from 'react';

function AddStudent() {
    const [message, setMessage] = useState('');

    async function addstudent(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const age = e.target.age.value;
        const address = e.target.address.value;
        const email = e.target.email.value;

        const { error } = await supabase.from('students').insert([{ name, age, address, email }]);

        if (error) {
            setMessage('Failed to add student: ' + error.message);
        } else {
            setMessage('Student added successfully');
        }
    }

    return (
        <div>
            <h1>Add Student</h1>
            <form onSubmit={addstudent}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />
                <br />
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                {message && <h5>{message}</h5>}
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudent;