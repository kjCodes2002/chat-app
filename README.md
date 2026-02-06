# Chat App

A real-time chat application built with WebSockets, featuring a Node.js/Express backend and a React frontend.

## Tech Stack

### Backend
- **Node.js** with Express.js
- **Socket.IO** for real-time WebSocket communication

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development and bundling
- **Tailwind CSS** for styling

## Project Structure

```
chat-app/
├── backend/           # Express + Socket.IO server
│   ├── index.js       # Main server file
│   └── package.json
├── frontend/          # React + Vite application
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chat-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The server will run on `http://localhost:3000`

2. **Start the frontend development server** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (default Vite port)

## Available Scripts

### Backend
| Command | Description |
|---------|-------------|
| `npm start` | Start the server |
| `npm run dev` | Start the server with watch mode |

### Frontend
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

ISC
