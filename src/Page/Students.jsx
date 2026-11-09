import {supabase} from '../lib/supabase.js';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Student() {
    const [message, setMessage] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function fetchStudents() {
            const {data, error} = await supabase.from('students').select('*');

            if (error) {
                setMessage('Error fetching students: ' + error.message);
            } else {
                setMessage('Students fetched successfully');
                setStudents(data);
            }
        }
        fetchStudents();
    }, []);

    return (
        <div>
            <h1>Students List</h1>
            <p>{message}</p>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name}
                        <Link to={`/students/${student.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Student;
