# Deploy with GitHub + Cloudflare Pages

This is a static HTML/CSS website. GitHub stores the source; Cloudflare Pages hosts it.

## GitHub
Create an empty GitHub repository, then run these commands from this project folder, replacing YOUR_USERNAME and YOUR_REPOSITORY:

```powershell
git init
git add .
git commit -m "Prepare portfolio for Cloudflare Pages"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

The .gitignore excludes generated output, backups, source-photo duplicates, logs, and preview screenshots. The public hero image remains included in assets/kabir-portrait.jpg.

## Cloudflare Pages
1. Open Cloudflare > Workers & Pages > Create application > Pages.
2. Choose Import an existing Git repository and connect your GitHub repository.
3. Use these settings:

| Setting | Value |
| --- | --- |
| Production branch | main |
| Framework preset | None |
| Build command | node scripts/build.mjs |
| Build output directory | dist |
| Root directory | Leave blank |
| Environment variables | None required |

4. Deploy and open the provided pages.dev URL.
5. For rajkabir.com.np, add it under the Pages project's Custom domains and follow Cloudflare's DNS setup. Confirm the deployment before switching the existing domain.

GitHub Pages does not need to be enabled. Cloudflare Pages deploys subsequent pushes automatically.

## Contact activation
The form uses https://formsubmit.co/rajkabir234@gmail.com. Submit a test through the deployed website, complete its CAPTCHA, and click the activation email sent to your Gmail inbox. Check Spam too. Submit again and verify delivery. No Gmail password or environment variable is needed. Activation/delivery has not been verified.

## Local build check
```powershell
node scripts/build.mjs
python -m http.server 8000 --directory dist
```

The build checks that every linked local file exists before copying the deployable files. Deploy dist rather than the entire project folder so backups and working files are not hosted. If a later change removes an asset, rebuild into a fresh output directory to avoid retaining unused output from an earlier build.

Official guide: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
