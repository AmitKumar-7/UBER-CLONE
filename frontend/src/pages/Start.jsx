import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      }}>
      
      <div className="absolute top-8 left-8">
        <img className="w-16" src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="Uber Logo" />
      </div>

      <div className="absolute bottom-0 w-full bg-white p-8 rounded-t-3xl">
        <h2 className="text-4xl font-bold mb-8">Get Started with Uber</h2>

        <Link
          to="/login"
          className="block w-full bg-black text-white text-xl font-semibold py-4 px-6 rounded-lg text-center mb-4"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="block w-full border border-black text-black text-xl font-semibold py-4 px-6 rounded-lg text-center"
        >
          Signup
        </Link>
      </div>
    </div>
  )
}

export default Start
