import 'bootstrap/dist/css/bootstrap.min.css'

function Layout({ children }) {
    return (
        <>
            <header className="shadow-lg sticky top-0 z-50">
                <div className="flex items-center justify-between w-full px-6 py-3 bg-gradient-to-r from-blue-800 to-purple-700 text-white rounded-b-xl shadow-xl">
                    <h1 className="text-3xl font-extrabold tracking-tight drop-shadow-lg">Study Circle</h1>
                    <nav className="flex space-x-6">
                        <a href="/" className="hover:text-yellow-300 font-semibold transition-colors duration-200">Home</a>
                        <a href="/upload" className="hover:text-yellow-300 font-semibold transition-colors duration-200">Upload</a>
                        <a href="/contact" className="hover:text-yellow-300 font-semibold transition-colors duration-200">Contact</a>
                        <a href="/about" className="hover:text-yellow-300 font-semibold transition-colors duration-200">About</a>
                        <a href="/buy" className="hover:text-yellow-300 font-semibold transition-colors duration-200">Buy Credits</a>
                    </nav>
                </div>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;