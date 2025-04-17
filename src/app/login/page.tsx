"user client";

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form className="bg-white p-6 rounded shadow-md w-96">
            <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input type="text" id="username" className="border border-gray-300 rounded p-2 w-full" />
            </div>
            <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" id="password" className="border border-gray-300 rounded p-2 w-full" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
        </form>
        </div>
    );
}