import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    const uploadedFiles = [
        { name: 'math_notes.pdf', credits: 5 },
        { name: 'physics_cheatsheet.docx', credits: 3 },
        { name: 'chemistry_summary.txt', credits: 2 },
    ];
    return(
        <>
            <h1>Home!</h1>
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Available Files</h2>
                <table className="min-w-full bg-white border rounded shadow">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">File Name</th>
                            <th className="py-2 px-4 border-b">Credits Needed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uploadedFiles.map((file, idx) => (
                            <tr key={idx} className="text-center">
                                <td className="py-2 px-4 border-b">{file.name}</td>
                                <td className="py-2 px-4 border-b">{file.credits}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}