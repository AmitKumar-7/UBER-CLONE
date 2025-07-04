import React, { useState, useEffect, useCallback } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

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

const LiveTrackingAdvanced = () => {
    const [currentPosition, setCurrentPosition] = useState(center);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    const onLoad = useCallback((map) => {
        setMap(map);
    }, []);

    const onUnmount = useCallback((map) => {
        setMap(null);
    }, []);

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

        updatePosition();
        const intervalId = setInterval(updatePosition, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // Create AdvancedMarkerElement when map is loaded
    useEffect(() => {
        if (map && window.google && window.google.maps.marker) {
            // Remove existing marker
            if (marker) {
                marker.map = null;
            }

            // Create new AdvancedMarkerElement
            const newMarker = new window.google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: currentPosition,
                title: 'Current Location',
            });

            setMarker(newMarker);
        }
    }, [map, currentPosition]);

    return (
        <LoadScript 
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            libraries={libraries}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
                mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
                options={{
                    disableDefaultUI: false,
                    clickableIcons: false,
                    scrollwheel: true,
                }}
            >
                {/* No JSX Marker component needed - we use AdvancedMarkerElement directly */}
            </GoogleMap>
        </LoadScript>
    );
};

export default LiveTrackingAdvanced;
