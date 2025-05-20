import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import users from JSON (will work with Vite if the file is populated)
import users from '../database/auth.json';

function Login() {
    const [Name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Combine users from auth.json and localStorage
        let localUsers = [];
        try {
            localUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        } catch {
            localUsers = [];
        }
        const allUsers = Array.isArray(users) ? users.concat(localUsers) : localUsers;
        const found = allUsers.find(u => u.Name === Name && u.password === password);
        if (found) {
            localStorage.setItem('token', 'dummy-token');
            navigate('/');
        } else {
            setError('Invalid Name or password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-gray-200">
                <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-700 tracking-tight">Login</h2>
                {error && <div className="mb-4 text-red-600 font-semibold text-center">{error}</div>}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={Name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition shadow"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
