# Kabir portfolio — setup

Hosting: use GitHub for source control and Cloudflare Pages for deployment. Run `node scripts/build.mjs` and deploy the generated `dist/` folder. See DEPLOYMENT.md for the complete setup.

## Contact form (important)
The email link and FormSubmit POST endpoint in `index.html` are configured for `rajkabir234@gmail.com`. No Gmail password, app password, or private API key is needed.

1. Deploy the updated HTML files to your website.
2. Submit a test message from the deployed contact form and complete the CAPTCHA.
3. Open the activation email from FormSubmit in `rajkabir234@gmail.com` and confirm the form. Check Spam if it does not arrive.
4. Submit another test message after activation and confirm that the name, email, subject, and message reach your inbox. Verify that replying addresses the visitor.

Delivery is not verified until that second test arrives. FormSubmit processes the submitted data and handles the confirmation page. CAPTCHA and the honeypot remain enabled. The email link provides a direct-contact fallback.

## Typography
Body text uses Inter across all four pages, loaded through Google Fonts. Playfair Display headings and DM Mono labels remain in place.

## Portfolio content
The event collection contains four YouTube videos from Personal Website.xlsx. Embedded players preserve the two supplied start times; each includes a direct YouTube link. Engineering Projects contains all ten supplied Google Drive PDF links and their interest areas and categories. Ensure every Drive report is shared as "Anyone with the link" with Viewer access before publishing; access has not been verified.

Graphics Design still needs your images and project details. Its cards remain placeholders.

## Featured logos
The homepage uses all seven supplied PNG logos from `Work Featured/`, labeled "My work featured on". Upload this folder alongside the four HTML files and preserve filenames, including `KU.png`. Keep the folder name and its space unchanged.

## Check details
Confirm the exact institution name for the Dhapakhel teaching-assistant position (the request mentioned both Kantipur Engineering College and Kathmandu Engineering College), and add its start date. Replace the short generic role descriptions with accurate responsibilities. Existing profile image, CV, and portfolio thumbnails are referenced from rajkabir.com.np and need to remain accessible. Existing counts are inherited from the original and should be verified.

## Picto-inspired redesign
All four pages share `site.css` and use Work Sans, purple (#9929FB), white, charcoal, and soft lilac gradients. This is a custom implementation inspired by Picto, not a copy of its template source. Original HTML is saved in `backups/before-picto/`. Upload `site.css` alongside the HTML files. The previous remote portrait and thumbnail URLs return 404; the homepage now uses an intentional KR monogram and category artwork until real replacement images are supplied.

## Client Works
`client-works.html` replaces the Graphics Design collection. The old `graphics-design.html` redirects to it for existing links. Its responsive bento grid reserves larger panels for websites and systems and smaller panels for visual work. The illustrations are abstract placeholders, not real client projects; entries are marked Coming soon. Replace them with actual screenshots/images, project titles, your role, and optional website or case-study links when supplied. Upload the new HTML file and updated stylesheet.

Client Works now contains the three supplied website URLs and six selected Instagram artwork thumbnails stored in assets/client-works/. Each visual links to its original post. Website previews are captured screenshots; nepalistartup.org could not resolve during setup, so its card uses a text treatment and retains the supplied link. Systems & tools and More creative work are removed. Upload assets/client-works/ with the site.
