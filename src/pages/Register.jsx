import { useState } from 'react';

export default function Register() {
    const [Name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (!Name || !password) {
            setError('Name and password are required.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        // Use localStorage to simulate user database
        let users = [];
        try {
            users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        } catch {
            users = [];
        }
        if (users.find(u => u.Name === Name)) {
            setError('Name already registered.');
            return;
        }
        users.push({ Name, password });
        localStorage.setItem('registeredUsers', JSON.stringify(users));
        setSuccess('Registration successful! You can now log in.');
        setName('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-gray-200">
                <h2 className="text-3xl font-extrabold mb-8 text-center text-green-700 tracking-tight">Register</h2>
                {error && <div className="mb-4 text-red-600 font-semibold text-center">{error}</div>}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={Name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition shadow"
                >
                    Register
                </button>
            </form>
            {success && <div className="mb-4 text-green-600 font-semibold text-center">{success}</div>}
        </div>
    );
}