import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import SmartMap from '../components/SmartMap'

const Riding = () => {
    const location = useLocation()
    const { ride } = location.state || {}
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended", () => {
        navigate('/home')
    })

    return (
        <div className='h-screen bg-black'>
            <Link to='/home' className='fixed right-4 top-4 h-12 w-12 bg-black flex items-center justify-center rounded-full shadow-lg border border-gray-800'>
                <i className="text-xl text-white ri-home-5-line"></i>
            </Link>
            
            <div className='h-1/2'>
            <SmartMap />
            </div>
            
            <div className='h-1/2 bg-white rounded-t-3xl p-4 pt-6'>
                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-3'>
                        <div className='h-14 w-14 bg-gray-200 rounded-full overflow-hidden'>
                            <img className='h-full w-full object-cover' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="Driver" />
                        </div>
                        <div>
                            <h2 className='text-lg font-bold text-gray-900'>{ride?.captain.fullname.firstname}</h2>
                            <p className='text-sm text-gray-500'>{ride?.captain.vehicle.plate}</p>
                        </div>
                    </div>
                    <div className='bg-black text-white p-2 px-3 rounded-full'>
                        <p className='text-sm font-medium'>4.9 ★</p>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className='flex items-center gap-3 p-3 bg-gray-100 rounded-lg'>
                        <div className='h-10 w-10 bg-black rounded-full flex items-center justify-center'>
                            <i className="text-white ri-map-pin-2-fill"></i>
                        </div>
                        <div>
                            <h3 className='text-base font-medium text-gray-900'>{ride?.destination}</h3>
                            <p className='text-sm text-gray-500'>Destination</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-3 p-3 bg-gray-100 rounded-lg'>
                        <div className='h-10 w-10 bg-black rounded-full flex items-center justify-center'>
                            <i className="text-white ri-bank-card-line"></i>
                        </div>
                        <div>
                            <h3 className='text-base font-medium text-gray-900'>₹{ride?.fare}</h3>
                            <p className='text-sm text-gray-500'>Cash</p>
                        </div>
                    </div>
                </div>
                
                <button className='w-full mt-6 bg-black text-white font-bold p-4 rounded-xl'>
                    Make Payment
                </button>
            </div>
        </div>
    )
}

export default Riding