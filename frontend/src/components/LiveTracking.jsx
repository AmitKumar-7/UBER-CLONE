import React, { useState, useEffect } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

// Note: Using traditional Marker for now due to @react-google-maps/api compatibility
// Will need to migrate to AdvancedMarkerElement when the library supports it

// Move libraries array outside component to prevent re-renders
const libraries = ['marker'];

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = () => {
    const [ currentPosition, setCurrentPosition ] = useState(center);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                console.log('Position updated:', latitude, longitude);
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            });
        };

        updatePosition(); // Initial position update

        const intervalId = setInterval(updatePosition, 1000); // Update every 10 seconds

    }, []);

    return (
        <LoadScript 
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            libraries={libraries}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
                mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
                options={{
                    disableDefaultUI: false,
                    clickableIcons: false,
                    scrollwheel: true,
                }}
            >
                <Marker position={currentPosition} />
            </GoogleMap>
        </LoadScript>
    )
}

export default LiveTracking