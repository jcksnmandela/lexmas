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

## 5. Detailed DNS Configuration
To point **lexmas.org** to your new host, you need to update the DNS records at your domain registrar (e.g., GoDaddy, Namecheap, or a local provider).

### If using Vercel:
1. **A Record:**
   - Name/Host: `@`
   - Value: `76.76.21.21`
2. **CNAME Record:**
   - Name/Host: `www`
   - Value: `cname.vercel-dns.com`

### If using Netlify:
1. **CNAME Record:**
   - Name/Host: `www`
   - Value: `your-site-name.netlify.app`
2. **ALias/ANAME Record (if supported):**
   - Name/Host: `@`
   - Value: `your-site-name.netlify.app`
   *(Alternatively, use Netlify DNS by changing your Nameservers)*

### General Steps:
1. Log in to your **Domain Registrar's Control Panel**.
2. Find the **DNS Management** or **Name Server Management** section.
3. Look for **DNS Records** or **Zone File**.
4. Add or Edit the records as shown above.
5. **Save Changes**.
6. **Wait:** It can take anywhere from 1 to 24 hours for these changes to "propagate" across the internet.

## 6. SSL (HTTPS)
Both Vercel and Netlify will automatically provide a free SSL certificate once your domain is correctly pointed. Your site will automatically be secure (`https://lexmas.org`).
