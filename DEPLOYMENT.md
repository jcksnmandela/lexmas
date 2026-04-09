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

## 3. Environment Variables
If you are using the Gemini AI features, you must add your `GEMINI_API_KEY` to the environment variables in your hosting provider's dashboard:
- **Vercel:** Settings > Environment Variables
- **Netlify:** Site settings > Environment variables

## 4. Custom Domain DNS
After adding your domain to the hosting provider, you will need to update your DNS records at your domain registrar (e.g., GoDaddy, Namecheap):
- **A Record:** Points to the IP address provided by the host.
- **CNAME Record:** Points `www` to the host's URL.

For further assistance, please refer to the documentation of your chosen hosting provider.
