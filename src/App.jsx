import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Layout from './Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Contact from './pages/Contact'
import About from './pages/About'
import Buy from './pages/Buy'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    function ProtectedRoute({ child }) {
        const token = localStorage.getItem('token')
        if(!token)
            return <Navigate to="/login" />;
        return {child};
    }

    function PublicRoute({ child }) {
        const token = localStorage.getItem('token')
        return !token ? child : <Navigate to="/login" />;
    }

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout><Home /></Layout>} />
                    
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
            

                    <Route path="/upload" element={<Layout><Upload /></Layout>} />
                    <Route path="/contact" element={<Layout><Contact /></Layout>} />
                    <Route path="/about" element={<Layout><About /></Layout>} />
                    <Route path="/buy" element={<Layout><Buy /></Layout>} />
                </Routes>
            </Router>

        </>
    )
}

export default App
