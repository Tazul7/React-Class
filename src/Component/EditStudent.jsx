import { supabase } from "../lib/supabase.js";
import { useState } from "react";
import { useParams } from "react-router-dom";

function EditStudent() {
    const [message, setMessage] = useState("");
    const { id } = useParams();

    async function editstudent(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const age = e.target.age.value;

        const { error } = await supabase.from("students").update({ name, email, age }).eq("id", id);

        if (error) {
            setMessage("Error updating student: " + error.message);
        } else {
            setMessage("Student updated successfully!");
        }
    };

    return (
        <form onSubmit={editstudent}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                />
            </div>
            <button type="submit">Update Student</button>
            {message && <h5>{message}</h5>}
        </form>
    );
}

export default EditStudent;