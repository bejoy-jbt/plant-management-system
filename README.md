# 🌱 Plant Management System

A simple web application for managing plants with full CRUD (Create, Read, Update, Delete) operations.

## 🚀 Quick Start

### Step 1: Connect to GitHub

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon in the top right → "New repository"
   - Name it (e.g., "plant-management-system")
   - Choose Public or Private
   - **Don't** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Initialize Git and push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Plant Management System"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repository name.

### Step 2: Deploy to Vercel (Get Public URL)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com) and sign up/login (use GitHub to sign in for easy integration)

2. **Import your GitHub repository:**
   - Click "New Project"
   - Select your GitHub repository (plant-management-system)
   - Vercel will automatically detect the configuration

3. **Configure build settings (if needed):**
   - **Root Directory**: Leave as default
   - **Build Command**: `cd client && npm run build`
   - **Output Directory**: `client/build`
   - **Install Command**: `npm install && cd client && npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait for the deployment to complete (usually 1-2 minutes)

5. **Get your public URL:**
   - Once deployed, you'll get a URL like: `https://your-app-name.vercel.app`
   - Your app is now live! 🎉

**Note:** Every time you push to GitHub, Vercel will automatically redeploy your app!

### Run Locally

```bash
npm install
cd client && npm install && cd ..
npm run dev
```

Visit http://localhost:3000

## Features

- ✅ Display all plants
- ✅ Add new plants
- ✅ Edit existing plants
- ✅ Delete plants
- ✅ Beautiful, responsive UI
- ✅ Easy deployment to Vercel

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Data Storage**: JSON file (no database required)
- **Deployment**: Vercel (free PaaS platform)

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install root dependencies:
```bash
npm install
```

2. Install client dependencies:
```bash
cd client
npm install
cd ..
```

### Running the Application

1. Start both server and client:
```bash
npm run dev
```

Or run them separately:

2. Start the backend server:
```bash
npm run server
```

3. In another terminal, start the frontend:
```bash
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Deployment to Vercel (Free Public URL)

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts. Your app will be deployed and you'll get a public URL!

### Option 2: Deploy via GitHub + Vercel (Recommended for Automatic Deployments)

This is the recommended method as it enables automatic deployments whenever you push to GitHub.

1. **Create GitHub repository:**
   - Go to [github.com](https://github.com) → New repository
   - Name it (e.g., "plant-management-system")
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Plant Management System"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign up/login (use GitHub)
   - Click "New Project" → Import your GitHub repository
   - Vercel will auto-detect the configuration
   - Click "Deploy"

4. **Get your public URL:**
   - After deployment, you'll get: `https://your-app-name.vercel.app`
   - Future pushes to GitHub will automatically trigger new deployments!

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up/login

2. Click "New Project" and connect your Git repository

3. Configure the build settings:
   - **Root Directory**: Leave as default
   - **Build Command**: `cd client && npm run build`
   - **Output Directory**: `client/build`

4. Add environment variables if needed (none required for basic setup)

5. Click "Deploy" and wait for the deployment to complete

## API Endpoints

- `GET /api/plants` - Get all plants
- `GET /api/plants/:id` - Get a single plant
- `POST /api/plants` - Create a new plant
- `PUT /api/plants/:id` - Update a plant
- `DELETE /api/plants/:id` - Delete a plant

## Project Structure

```
.
├── api/                   # Vercel serverless function (for deployment)
│   └── index.js
├── client/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                # Express backend (for local development)
│   ├── data/             # JSON data storage (local)
│   └── index.js
├── package.json
├── vercel.json           # Vercel configuration
└── README.md
```

## Notes

- **Local Development**: Data is stored in `server/data/plants.json`
- **Vercel Deployment**: Data is stored in `/tmp/plants.json` (ephemeral - data resets on function restart)
- The app uses a simple JSON file for storage, perfect for small projects and demos
- For production with persistent data, consider using a database like MongoDB, PostgreSQL, or Vercel KV
- The `api/` directory is used for Vercel serverless functions
- The `server/` directory is used for local development

## License

ISC

