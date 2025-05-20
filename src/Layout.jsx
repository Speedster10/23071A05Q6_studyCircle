
function Layout({ children }) {
    return (
        <>
            <header>
                <div className="flex items-center justify-between w-full px-4 py-2 bg-gray-800 text-white">
                    <h1 className="text-2xl font-bold">Study Circle</h1>
                    <nav className="flex space-x-4">
                        <a href="/" className="hover:text-gray-400">Home</a>
                        <a href="/upload" className="hover:text-gray-400">Upload</a>
                        <a href="/contact" className="hover:text-gray-400">Contact</a>
                        <a href="/about" className="hover:text-gray-400">About</a>
                        <a href="/buy" className="hover:text-gray-400">Buy Credits</a>
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