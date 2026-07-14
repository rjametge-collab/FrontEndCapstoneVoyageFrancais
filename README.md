Description of the app 
https://github.com/rjametge-collab/travelAndspeakProject-VoyageFrancais.description/blob/main/Voyage_Francais_README.md

# Voyage Français — Frontend 🇫🇷✈️

## Overview

Voyage Français is a travel and French learning platform designed to help users discover France, learn practical French vocabulary, and organize their dream trips.

The frontend is a modern React application that provides an interactive user experience with destination browsing, French lessons, trip planning, authentication, and a personalized dashboard.

## Features

### User Features

* User registration and login
* Persistent user session using local storage
* Personalized dashboard
* Responsive navigation
* User account menu and logout

### French Learning

* Browse French lessons
* View vocabulary and phrases
* Learn practical French for travel

### Travel Discovery

* Explore French destinations
* View destination information
* Browse featured cities

### Trip Planning

* Create travel plans
* View trips
* Edit trips
* Delete trips

## Technologies Used

### Frontend

* React
* Vite
* React Router
* Tailwind CSS
* Axios
* JavaScript ES6+

## Project Structure

```
frontend
│
├── src
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   └── DestinationCard.jsx
│   │
│   ├── Pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Destinations.jsx
│   │   ├── Lessons.jsx
│   │   └── Trips.jsx
│   │
│   ├── api.js
│   ├── App.jsx
│   └── main.jsx
│
├── public
│   └── logo.png
│
└── package.json
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

For production:

```
VITE_API_URL=https://your-backend-url.com/api
```

## Running the Application

Start development server:

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

## API Communication

The frontend communicates with the Express backend using Axios.

Example:

```javascript
api.get("/destinations")
```

Backend API:

```
GET /api/destinations
GET /api/lessons
GET /api/trips
POST /api/auth/login
POST /api/auth/register
```

## Future Improvements

* Lesson completion tracking
* Saved destinations
* Premium travel guides
* French pronunciation audio
* AI travel assistant
* Online French courses

## Author

Voyage Français was created as a full-stack web development capstone project.

## License

This project is for educational and portfolio purposes.


