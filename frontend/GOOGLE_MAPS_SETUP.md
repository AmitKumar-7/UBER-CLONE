# Google Maps API Setup Guide

## Issues Fixed
- ✅ Added missing API key configuration
- ✅ Added Map ID for AdvancedMarkerElement support
- ✅ Updated LoadScript to include 'marker' library
- ✅ Fixed performance warning by moving libraries array outside component
- ✅ Created future-ready component with AdvancedMarkerElement

## Setup Steps

### 1. Get Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (if needed)
   - Geocoding API (if needed)
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

### 2. Create Map ID
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to Maps → Map management → Map IDs
3. Create a new Map ID
4. Choose "JavaScript" as the platform
5. Configure map style if needed

### 3. Update Environment Variables
Replace the placeholder values in `frontend/.env`:

```env
VITE_BASE_URL=http://localhost:4000
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
VITE_GOOGLE_MAPS_MAP_ID=your_actual_map_id_here
```

### 4. Choose Implementation
- **Current**: `LiveTracking.jsx` - Uses traditional Marker (still works but deprecated)
- **Future**: `LiveTrackingAdvanced.jsx` - Uses AdvancedMarkerElement (recommended)

To use the new implementation, replace the import in your pages:
```jsx
// Old
import LiveTracking from './components/LiveTracking'

// New
import LiveTrackingAdvanced from './components/LiveTrackingAdvanced'
```

## Migration Notes
- The traditional `Marker` component will continue to work until 2025+ 
- `AdvancedMarkerElement` offers better performance and features
- Map ID is required for advanced markers
- The 'marker' library must be loaded in LoadScript

## Error Resolution
- **ApiProjectMapError**: Add valid API key to environment variables
- **NoApiKeys**: Ensure API key is properly configured
- **InvalidKey**: Your API key is not valid - check it's correctly copied and enabled
- **Performance warning**: Libraries array moved outside component - fixed!
- **Marker deprecation**: Use AdvancedMarkerElement or ignore warning for now

## Important Notes
- **API Key Format**: Should look like `AIzaSyB...` (39 characters)
- **Map ID Format**: Should look like `a1b2c3d4e5f6g7h8` (alphanumeric)
- **Billing**: Google Maps requires billing enabled even for free tier
- **Restrictions**: Add HTTP referrer restrictions for security

## Testing
After setup, the console warnings should disappear and the map should load properly with your current location marker.
