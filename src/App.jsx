import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {

    function ProtectedRoute({ child }) {
        const token = localStorage.getItem('token')
        if(!token)
            return <Navigate to="/login" />;
        return <Layout>{child}</Layout>;
    }

    function PublicRoute({ child }) {
        const token = localStorage.getItem('token')
        return !token ? child : <Navigate to="/login" />;
    }

    return (
        <>
            <Router>
                <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>}/>
            

            {/* <Route path="/upload" element={<Upload />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/buy" element={<BuyCredits />} /> */}
                </Routes>
            </Router>

        </>
    )
}

export default App
