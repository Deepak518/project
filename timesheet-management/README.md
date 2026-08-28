# Timesheet Management Application

## 📋 Project Overview

A full-stack timesheet management application built with:
- **Backend:** Node.js + Express + MongoDB
- **Frontend:** React + Vite
- **Authentication:** JWT-based
- **Database:** MongoDB Atlas (Cloud)

## ✨ Features

- 🔐 User Registration & Login
- 📊 Employee Dashboard with statistics
- ⏱️ Timesheet tracking and management
- 📈 Reports and analytics
- 👤 User Profile management
- 🚪 Secure logout

## 🛠️ Tech Stack

### Backend
- Express.js (API Framework)
- MongoDB & Mongoose (Database)
- JWT (Authentication)
- bcryptjs (Password encryption)
- CORS (Cross-origin requests)

### Frontend
- React 19
- Vite (Build tool)
- Axios (HTTP client)
- React Router (Navigation)

## 🚀 Deployment Guide

### Option 1: Deploy on Render.com (Recommended for Backend)

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Deploy Backend**
   - Connect your GitHub repository
   - Create new Web Service
   - Select `timesheet-management/backend` as root directory
   - Environment:
     - Runtime: Node
     - Build Command: `npm install`
     - Start Command: `npm start`
   - Add Environment Variables:
     ```
     NODE_ENV=production
     PORT=5000
     MONGO_URI=your_mongodb_atlas_uri
     JWT_SECRET=your_jwt_secret
     ```
   - Deploy!

3. **Get Your Backend URL**
   - Example: `https://timesheet-backend-xxx.onrender.com`

### Option 2: Deploy Frontend on Vercel

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Deploy Frontend**
   - Import your GitHub repository
   - Select `frontend/frontend` as root directory
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: `dist`

3. **Add Environment Variable**
   - Go to Settings → Environment Variables
   - Add: `VITE_API_URL=https://your-backend-url.onrender.com`

4. **Deploy!**

### Alternative: Deploy Frontend on Netlify

1. Build Frontend locally:
   ```bash
   cd frontend/frontend
   npm run build
   ```

2. Deploy `dist` folder to Netlify
3. Add environment variable in Netlify dashboard

## 📚 Local Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Git

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev
```

### Frontend Setup
```bash
cd frontend/frontend
npm install
cp .env.example .env.local
# Edit .env.local with backend URL
npm run dev
```

## 🔑 Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your-secret-key-here
NODE_ENV=development
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000
```

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Timesheets
- `POST /api/timesheets` - Create timesheet
- `GET /api/timesheets` - Get user's timesheets
- `PUT /api/timesheets/:id` - Update timesheet
- `DELETE /api/timesheets/:id` - Delete timesheet

## 🔒 Security

- Passwords hashed with bcryptjs
- JWT token-based authentication
- Protected routes with middleware
- CORS configured for production
- Environment variables for sensitive data

## 📦 Project Structure

```
timesheet-management/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   └── frontend/
│       ├── src/
│       │   ├── components/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── vite.config.js
│       └── package.json
└── README.md
```

## 🚨 Troubleshooting

### Backend won't connect to MongoDB
- Verify MongoDB URI is correct
- Check MongoDB Atlas IP whitelist (allow 0.0.0.0/0 for development)
- Ensure database user has proper permissions

### Frontend can't reach backend
- Check VITE_API_URL environment variable
- Ensure backend is running
- Check browser console for CORS errors
- Verify backend URL is accessible

### Port already in use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

## 📞 Support

For issues or questions, check the GitHub repository or contact the development team.

## 📄 License

ISC License

---

**Happy time tracking! ⏱️**
