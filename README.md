# Image Gallery Website

A small static website that lets you enter 5 image URLs and display them in a gallery.

## Usage

1. Open `index.html` in your browser.
2. Paste up to 5 image URLs into the input fields.
3. Click **Show Images**.

## Files

- `index.html` — website structure and form
- `styles.css` — page styling
- `script.js` — gallery behavior

## Deploy publicly

### Option 1: GitHub Pages
1. Install Git on your machine:
   - Ubuntu/Debian: `sudo apt install git`
   - macOS: `brew install git`
   - Windows: install from https://git-scm.com/
2. Create a new GitHub repository.
3. Initialize git in `image-gallery/` and push your files:
   ```bash
   cd "image-gallery"
   git init
   git add .
   git commit -m "Initial image gallery site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
4. In repo Settings > Pages, choose branch `main` and folder `/ (root)`.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

### Option 2: Netlify
1. Go to https://app.netlify.com/ and log in.
2. Create a new site from Git.
3. Connect your GitHub repo and select the repo with this site.
4. Set the publish directory to `/` and deploy.

### Option 3: Vercel
1. Go to https://vercel.com/ and log in.
2. Import your GitHub repository.
3. Choose the `image-gallery` folder as the root.
4. Deploy the project.

These options let anyone open the site in a browser without running it locally.
