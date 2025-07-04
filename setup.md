# Project Setup Instructions

## 🚀 Quick Start

### 1. Clone and Setup
```bash
git clone https://github.com/yourusername/uber-clone.git
cd uber-clone
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create `.env` in Backend directory:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/uber
JWT_SECRET=your_jwt_secret_here
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
cp .env.example .env
```

Edit `frontend/.env` (optional - works with mock map by default):
```env
VITE_BASE_URL=http://localhost:4000
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here  # Optional
VITE_GOOGLE_MAPS_MAP_ID=your_map_id_here    # Optional
```

### 4. Run the Application
```bash
# Terminal 1 - Backend
cd Backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

## 🗺️ Map Configuration

The app works perfectly without Google Maps API keys using a **mock map component**.

### Option 1: Use Mock Map (Default)
- No setup required
- Shows location coordinates
- Perfect for development
- Automatic fallback when no API key provided

### Option 2: Use Real Google Maps
1. Get API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable "Maps JavaScript API"
3. Create a Map ID
4. Update your `.env` file
5. Enable billing (required even for free tier)

## 🔒 Security Features

✅ **Environment variables protected**
✅ **.env files excluded from git**
✅ **Mock map for development without API exposure**
✅ **Smart component switching**
✅ **Secure configuration management**

## 📱 Features Working Out of the Box

- ✅ User/Captain authentication
- ✅ Real-time location tracking (mock)
- ✅ Ride booking system
- ✅ Socket.io communication
- ✅ Mock map with coordinates
- ✅ Responsive design

## 🐛 Troubleshooting

**Performance Warning Fixed**: Libraries array moved outside components
**API Key Errors**: Use mock map by default - no API key required
**Build Issues**: Ensure environment variables are set correctly

Ready to push to GitHub safely! 🎉
