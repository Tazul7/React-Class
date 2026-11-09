
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home.jsx';
import NavBar from './Component/NavBar.jsx';
import About from './Page/About.jsx';
import Contact from './Page/Contact.jsx';
import Student from './Page/Students.jsx';
import StudentDetails from './Page/StudentDetails.jsx';
import Login from './Page/Login.jsx';
import Signup from './Page/Signup.jsx';
import DeleteStudent from './Component/DeleteStudent.jsx';
import EditStudent from './Component/EditStudent.jsx';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/students" element={<Student />} />
                <Route path="/students/:id" element={<StudentDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/delete-student/:id" element={<DeleteStudent />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
