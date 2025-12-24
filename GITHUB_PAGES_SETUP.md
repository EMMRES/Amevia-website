# GitHub Pages Setup Instructions

## ✅ What I've Done

1. ✅ Updated `vite.config.js` with base path `/Amevia-website/`
2. ✅ Created GitHub Actions workflow (`.github/workflows/deploy.yml`)
3. ✅ Added 404.html for React Router support
4. ✅ Built the project with correct paths

## 📋 Next Steps to Enable GitHub Pages

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/EMMRES/Amevia-website
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
   - (NOT "Deploy from a branch")
5. Click **Save**

### Step 2: Wait for GitHub Actions to Deploy

1. Go to **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Once it shows a green checkmark ✅, your site is deployed!

### Step 3: Access Your Website

Your website will be available at:
**https://emmres.github.io/Amevia-website/**

## 🔧 If It Still Doesn't Work

### Check GitHub Actions
1. Go to **Actions** tab
2. Check if the workflow ran successfully
3. If it failed, check the error message

### Manual Deployment (Alternative)
If GitHub Actions doesn't work, you can manually deploy:

```bash
# Build the project
npm run build

# Copy dist folder contents to a gh-pages branch
git checkout -b gh-pages
git add dist/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

Then in GitHub Settings > Pages, select:
- **Source**: `gh-pages` branch
- **Folder**: `/ (root)`

## 🐛 Troubleshooting

### Blank Page
- Make sure the base path in `vite.config.js` matches your repository name
- Check browser console for errors (F12)
- Verify all assets are loading correctly

### 404 Errors on Routes
- The `404.html` file should handle React Router redirects
- Make sure it's in the `public` folder and gets copied to `dist`

### Assets Not Loading
- Check that paths in `dist/index.html` start with `/Amevia-website/`
- Verify all images are in the `public` folder

## ✅ Current Configuration

- **Base Path**: `/Amevia-website/`
- **Build Output**: `dist/` folder
- **Deployment**: GitHub Actions (automatic on push to main)
- **React Router**: Supported via 404.html

Your website should be live once GitHub Actions completes the deployment!

