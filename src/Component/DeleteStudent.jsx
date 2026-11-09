import {supabase} from '../lib/supabase.js';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function DeleteStudent() {
    const [message, setMessage] = useState('');
    const { id } = useParams();
    
    async function deletestudent(e) {
        e.preventDefault();

        const { error } = await supabase.from('students').delete().eq('id', id);

        if (error) {
            setMessage('Failed to delete student: ' + error.message);
        } else {
            setMessage('Student deleted successfully');
        }
    }

    return (
        <div>
            <h1>Delete Student</h1>
            <form onSubmit={deletestudent}>
                <button type="submit">Delete Student</button>
            </form>
            {message && <h5>{message}</h5>}
        </div>
    );
}

export default DeleteStudent;