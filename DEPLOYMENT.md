# Lexmas Company Limited - Deployment Guide

This project is ready to be hosted on your own domain. Below are the instructions for the most popular hosting platforms.

## 1. Vercel (Recommended)
1. Export your code to GitHub via the AI Studio settings.
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New** > **Project**.
4. Import your GitHub repository.
5. Vercel will automatically detect the Vite settings. Click **Deploy**.
6. Once deployed, go to **Settings** > **Domains** to add your custom domain.
7. *Note: A `vercel.json` file has been added to handle React Router paths.*

## 2. Netlify
1. Export your code to GitHub.
2. Log in to [Netlify](https://netlify.com).
3. Click **Add new site** > **Import from GitHub**.
4. Select your repository.
5. Ensure the build command is `npm run build` and the publish directory is `dist`.
6. Click **Deploy site**.
7. Go to **Domain management** to add your custom domain.
8. *Note: A `public/_redirects` file has been added to handle React Router paths.*

## 3. Traditional Hosting (cPanel / Shared Hosting)
If you already have a hosting plan for **lexmas.org** (like cPanel, Bluehost, or a local Tanzanian host):
1. Download the project as a ZIP.
2. On your computer, run `npm install` and then `npm run build`.
3. This will create a folder named `dist`.
4. Use the **File Manager** in your hosting control panel or an **FTP client** (like FileZilla).
5. Upload all files *inside* the `dist` folder to your `public_html` directory.
6. *Note: I have added a `.htaccess` file in the `public` folder to ensure your pages (like /taxation) work correctly on Apache servers.*

## 4. Connecting lexmas.org to Vercel/Netlify
If you choose to use Vercel or Netlify (recommended for better speed):
1. In their dashboard, go to **Add Domain**.
2. Enter `lexmas.org`.
3. They will give you **DNS Records** (usually an A record and a CNAME record).
4. Log in to your domain registrar (where you bought lexmas.org).
5. Update the DNS settings with the values provided.
6. It may take up to 24 hours for the change to take effect (propagation).

For further assistance, please refer to the documentation of your chosen hosting provider.
