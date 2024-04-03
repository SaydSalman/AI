import React from 'react'
import login from "../assets/images/login.jpg"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      
      <div className="lg:w-1/2">
        <img src={login} alt="Login" className="object-cover w-screen h-screen lg:h-screen" />
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <div className=''>
                <p>New User? <Link to={'/signup'} className='bg-gray-600 rounded p-2'>Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
