# 📚 GitHub Setup Guide

This guide will help you connect your Plant Management System to GitHub and deploy it to Vercel.

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create an account)

2. Click the **"+"** icon in the top right corner → **"New repository"**

3. Fill in the repository details:
   - **Repository name**: `plant-management-system` (or any name you prefer)
   - **Description**: "Plant Management System with CRUD operations"
   - **Visibility**: Choose **Public** (free) or **Private**
   - **Important**: Do NOT check "Add a README file", "Add .gitignore", or "Choose a license" (we already have these)

4. Click **"Create repository"**

## Step 2: Initialize Git and Push to GitHub

Open your terminal/command prompt in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Plant Management System"

# Rename branch to main (if needed)
git branch -M main

# Add GitHub repository as remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

**Example:**
```bash
git remote add origin https://github.com/johndoe/plant-management-system.git
```

## Step 3: Verify on GitHub

1. Go to your GitHub repository page
2. You should see all your project files
3. Your code is now on GitHub! ✅

## Step 4: Deploy to Vercel via GitHub

### Option A: Using Vercel Website (Easiest)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click **"Sign Up"** or **"Log In"**
   - **Use GitHub to sign in** (recommended for easy integration)

2. **Import Repository:**
   - After logging in, click **"Add New..."** → **"Project"**
   - You'll see a list of your GitHub repositories
   - Find and click **"Import"** next to your `plant-management-system` repository

3. **Configure Project:**
   - **Project Name**: Leave as default or change it
   - **Root Directory**: Leave as default (`.`)
   - **Framework Preset**: Vercel will auto-detect
   - **Build Command**: `cd client && npm run build`
   - **Output Directory**: `client/build`
   - **Install Command**: `npm install && cd client && npm install`

4. **Deploy:**
   - Click **"Deploy"**
   - Wait 1-2 minutes for the deployment to complete

5. **Get Your Public URL:**
   - Once deployed, you'll see a success message
   - Your app is live at: `https://your-app-name.vercel.app`
   - Click the URL to open your app in the browser! 🎉

### Option B: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```
   This will open your browser to authenticate.

3. **Deploy:**
   ```bash
   vercel
   ```
   Follow the prompts:
   - Link to existing project? **No** (for first deployment)
   - Project name: Press Enter for default
   - Directory: Press Enter for default
   - Override settings? **No**

4. **Get Your Public URL:**
   - Vercel will provide you with a deployment URL
   - Your app is now live!

## Step 5: Automatic Deployments (Bonus!)

Once connected to GitHub, Vercel will automatically:
- ✅ Deploy your app whenever you push to the `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Show deployment status on GitHub

**To update your app:**
1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
3. Vercel will automatically deploy the new version!

## Troubleshooting

### Git Push Issues

**If you get "remote origin already exists":**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

**If you get authentication errors:**
- Use a Personal Access Token instead of password
- GitHub Settings → Developer settings → Personal access tokens → Generate new token
- Use the token as your password when pushing

### Vercel Deployment Issues

**Build fails:**
- Check that all dependencies are in `package.json`
- Make sure `client/package.json` exists
- Check the build logs in Vercel dashboard

**API not working:**
- Verify `vercel.json` is in the root directory
- Check that `api/index.js` exists
- Review Vercel function logs in the dashboard

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com)
- [Vercel Support](https://vercel.com/support)

---

**Congratulations!** 🎉 Your Plant Management System is now live on the internet!

