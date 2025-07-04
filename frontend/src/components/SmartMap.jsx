import React from 'react';
import LiveTracking from './LiveTracking';
import MockMap from './MockMap';

const SmartMap = (props) => {
    const hasApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY && 
                     import.meta.env.VITE_GOOGLE_MAPS_API_KEY !== 'your_google_maps_api_key_here' &&
                     import.meta.env.VITE_GOOGLE_MAPS_API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY';

    // If API key is available, use real Google Maps
    if (hasApiKey) {
        return <LiveTracking {...props} />;
    }

    // Otherwise, use mock map for development
    return <MockMap {...props} />;
};

export default SmartMap;
