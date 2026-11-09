import {supabase} from '../lib/supabase.js';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import DeleteStudent from '../Component/DeleteStudent.jsx';
import EditStudent from '../Component/EditStudent.jsx';

function StudentDetails() {
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [student, setStudent] = useState(null);

    useEffect(() => {
        async function fetchStudent() {
           const {data, error} = await supabase.from('students').select('*').eq('id', id).single();

           if (error) {
               setMessage('Error fetching student details: ' + error.message);
           } else {
                setMessage('Student details fetched successfully');
                setStudent(data);
           }
        }
        fetchStudent();
    }, [id]);
    return (
        <div>
            <h1>Student Details</h1>
            <p>{message}</p>
            {student && (
                <div>
                    <p>Name: {student.name}</p>
                    <p>Email: {student.email}</p>
                    <p>Age: {student.age}</p>
                </div>
            )}
            <DeleteStudent />
            <EditStudent />
        </div>
    );
}

export default StudentDetails;