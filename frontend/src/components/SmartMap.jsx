import React from 'react';
import LiveTracking from './LiveTracking';
import MockMap from './MockMap';

const SmartMap = (props) => {
    const hasApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY && 
                     import.meta.env.VITE_GOOGLE_MAPS_API_KEY !== 'your_google_maps_api_key_here' &&
                     import.meta.env.VITE_GOOGLE_MAPS_API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY';

    const hasMapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID &&
                    import.meta.env.VITE_GOOGLE_MAPS_MAP_ID !== 'your_google_maps_map_id_here' &&
                    import.meta.env.VITE_GOOGLE_MAPS_MAP_ID !== 'YOUR_GOOGLE_MAPS_MAP_ID';

    // Only use real Google Maps if both API key and Map ID are available
    if (hasApiKey && hasMapId) {
        return <LiveTracking {...props} />;
    }

    // Otherwise, use mock map for development
    return <MockMap {...props} />;
};

export default SmartMap;
