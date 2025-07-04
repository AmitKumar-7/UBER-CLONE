import React, { useState, useEffect } from 'react';

const MockMap = ({ onLocationUpdate }) => {
    const [currentPosition, setCurrentPosition] = useState({
        lat: 20.3620352,
        lng: 85.819392
    });

    useEffect(() => {
        // Simulate location updates
        const updatePosition = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        const newPosition = {
                            lat: latitude,
                            lng: longitude
                        };
                        setCurrentPosition(newPosition);
                        console.log('Position updated:', latitude, longitude);
                        
                        if (onLocationUpdate) {
                            onLocationUpdate(newPosition);
                        }
                    },
                    (error) => {
                        console.log('Geolocation error:', error.message);
                        // Use mock position if geolocation fails
                        if (onLocationUpdate) {
                            onLocationUpdate(currentPosition);
                        }
                    }
                );
            }
        };

        updatePosition();
        const intervalId = setInterval(updatePosition, 1000);

        return () => clearInterval(intervalId);
    }, [onLocationUpdate]);

    return (
        <div className="w-full h-full bg-gray-200 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
            {/* Mock map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
                {/* Grid lines to simulate map */}
                <div className="absolute inset-0 opacity-20">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={`h-${i}`} className="absolute w-full h-px bg-gray-400" style={{ top: `${i * 10}%` }} />
                    ))}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={`v-${i}`} className="absolute h-full w-px bg-gray-400" style={{ left: `${i * 10}%` }} />
                    ))}
                </div>
            </div>

            {/* Mock location marker */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div className="mt-2 px-3 py-1 bg-white rounded-lg shadow-md text-sm font-medium text-gray-700">
                    Current Location
                </div>
            </div>

            {/* Mock map info */}
            <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md text-xs text-gray-600">
                <div>Lat: {currentPosition.lat.toFixed(6)}</div>
                <div>Lng: {currentPosition.lng.toFixed(6)}</div>
            </div>

            {/* Mock map controls */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50">
                    +
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50">
                    -
                </button>
            </div>

            {/* Development notice */}
            <div className="absolute top-4 left-4 bg-yellow-100 border border-yellow-300 px-3 py-2 rounded-lg text-xs text-yellow-800">
                <div className="font-semibold">Development Mode</div>
                <div>Add Google Maps API key to use real maps</div>
            </div>
        </div>
    );
};

export default MockMap;
