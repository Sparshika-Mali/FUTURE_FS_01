# Modern AI-Powered Full Stack Developer Portfolio

A futuristic, premium developer portfolio website built for **Sparshika Ravindra Mali**. Features a glassmorphism UI, gradient effects, smooth animations, a dark/light mode toggle, and a responsive design.

## Features
- **Frontend Framework:** React.js initialized with Vite.
- **Styling:** Tailwind CSS (custom animations, gradients, glassmorphism).
- **Animations:** Framer Motion (scroll reveals, hover effects, typing animation) & React-tsparticles (animated particle background).
- **Backend:** Node.js + Express.js for handling contact form submissions.
- **Database:** MySQL to securely store messages.
- **Extra Features:** Custom stylized cursor, smooth scrolling, fully responsive design.

## Folder Structure
```
/
├── frontend/             # React (Vite) Frontend
│   ├── src/
│   │   ├── components/   # UI Components (Hero, About, Projects, etc.)
│   │   ├── context/      # Theme Context
│   │   ├── App.jsx       # Main Application layout
│   │   └── index.css     # Global styles & Tailwind directives
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/              # Node.js + Express Backend
│   ├── config/           # Database config
│   ├── server.js         # Express app and API routes
│   └── package.json
│
└── schema.sql            # MySQL Database schema
```

## Local Development Setup

### Prerequisites
- Node.js installed
- MySQL installed and running locally

### 1. Database Setup
1. Open MySQL Workbench or your terminal.
2. Run the SQL commands found in `schema.sql` at the root of the project to create the `portfolio_db` database and `contacts` table.

### 2. Backend Setup
1. Open a terminal and navigate to the `backend/` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file in the `backend/` directory with your database credentials:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=portfolio_db
   PORT=5000
   ```
4. Start the server: `npm run dev`

### 3. Frontend Setup
1. Open a new terminal and navigate to the `frontend/` directory.
2. Install dependencies: `npm install`
3. Start the Vite development server: `npm run dev`
4. The application should now be running on `http://localhost:5173`

## Deployment Instructions

### Deploying the Frontend (Vercel or Netlify)
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) and create a new project from your repository.
3. Set the Root Directory to `frontend/`.
4. The build command should automatically be detected as `npm run build` and the publish directory as `dist`.
5. Deploy the site.
*Note: Once deployed, you will need to update the API URL in `frontend/src/components/Contact.jsx` from `http://localhost:5000/api/contact` to your deployed backend URL.*

### Deploying the Backend (Render or Vercel)
1. You can deploy the backend using [Render](https://render.com/).
2. Create a new Web Service and link your GitHub repository.
3. Set the Root Directory to `backend/`.
4. Build command: `npm install`. Start command: `npm start` (make sure `"start": "node server.js"` is in your `package.json`).
5. Add your Environment Variables (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).

### Deploying the MySQL Database
You cannot use a local MySQL database for a deployed app. You need a cloud-hosted MySQL database.
Providers include:
- [Aiven](https://aiven.io/mysql)
- [PlanetScale](https://planetscale.com/)
- AWS RDS
Update your backend's `.env` file on Render with the cloud database credentials.
