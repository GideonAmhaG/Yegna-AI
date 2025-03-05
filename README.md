# Yegna-AI

A full-stack web application that leverages AI capabilities to provide intelligent solutions. The project is built with a modern tech stack using React for the frontend and Node.js/Express for the backend.

## 🚀 Features

- Modern React-based frontend with Vite
- Express.js backend with MongoDB integration
- OpenAI integration for AI capabilities
- Cloudinary integration for media handling
- Responsive design with Tailwind CSS
- File handling capabilities

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- File-saver

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- OpenAI API
- Cloudinary
- CORS enabled
- Environment variables support

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- MongoDB
- OpenAI API key
- Cloudinary account

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Yegna-AI.git
cd Yegna-AI
```

2. Install frontend dependencies:

```bash
cd client
npm install
```

3. Install backend dependencies:

```bash
cd ../server
npm install
```

4. Set up environment variables:
   - Create a `.env` file in the server directory
   - Add the following variables:
     ```
     MONGODB_URI=your_mongodb_uri
     OPENAI_API_KEY=your_openai_api_key
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

## 🚀 Running the Application

1. Start the backend server:

```bash
cd server
npm start
```

2. Start the frontend development server:

```bash
cd client
npm run dev
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## 📁 Project Structure

```
Yegna-AI/
├── client/                 # Frontend React application
│   ├── src/               # Source files
│   ├── public/            # Static files
│   └── package.json       # Frontend dependencies
│
└── server/                # Backend Node.js application
    ├── controllers/       # Route controllers
    ├── routes/           # API routes
    ├── mongodb/          # MongoDB configuration
    └── index.js          # Server entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.
