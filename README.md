# Uber Clone - Full Stack Application

A full-stack Uber clone application built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- User authentication (signup/login)
- Captain (driver) authentication
- Real-time location tracking
- Ride booking and management
- Socket.io for real-time communication
- Google Maps integration (with mock fallback)
- Secure API key management

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Socket.io Client
- Google Maps API

**Backend:**
- Node.js
- Express.js
- MongoDB
- Socket.io
- JWT Authentication
- bcryptjs

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Clone the repository
```bash
git clone https://github.com/yourusername/uber-clone.git
cd uber-clone
```

### Backend Setup
```bash
cd Backend
npm install
```

Create `.env` file in Backend directory:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/uber
JWT_SECRET=your_jwt_secret_here
```

### Frontend Setup
```bash
cd frontend
npm install
```

Create `.env` file in frontend directory (copy from `.env.example`):
```env
VITE_BASE_URL=http://localhost:4000
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
VITE_GOOGLE_MAPS_MAP_ID=your_google_maps_map_id_here
```

## 🔑 Google Maps Setup (Optional)

The application works with a mock map by default. To use real Google Maps:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the Maps JavaScript API
4. Create an API key
5. Create a Map ID
6. Update your `.env` file with the actual values

**Note:** The app will automatically use the mock map if no valid API key is provided.

## 🚀 Running the Application

### Start the backend server
```bash
cd Backend
npm run dev
```

### Start the frontend development server
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:4000

## 📁 Project Structure

```
uber-clone/
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   └── app.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   ├── .env.example
│   └── package.json
└── README.md
```

## 🔒 Security Notes

- Never commit `.env` files to version control
- Use environment variables for all sensitive data
- The mock map component allows development without API keys
- Always use HTTPS in production

## 🧪 Development Features

- **Mock Map**: Develops without Google Maps API key
- **Smart Map**: Automatically switches between real and mock maps
- **Hot Reload**: Both frontend and backend support hot reloading
- **Environment Variables**: Secure configuration management

## 📱 Usage

1. **Register** as a user or captain
2. **Login** to access the dashboard
3. **Set location** using the map (real or mock)
4. **Book rides** (users) or **accept rides** (captains)
5. **Track rides** in real-time

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the troubleshooting section in `frontend/GOOGLE_MAPS_SETUP.md`
2. Ensure all environment variables are set correctly
3. Verify MongoDB is running
4. Check the console for error messages
