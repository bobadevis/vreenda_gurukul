# Vreenda Gurukul Static Website

A modern, responsive educational website built using only HTML, CSS, and Vanilla JavaScript for **Vreenda Gurukul**.

Repository:
`https://github.com/bobadevis/vreenda_gurukul.git`

Expected GitHub Pages URL:
`https://bobadevis.github.io/vreenda_gurukul/`

## Project Setup

1. Keep these files in the project root:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `.nojekyll`
2. Keep the GitHub Actions workflow in:
   - `.github/workflows/pages.yml`
3. Open `index.html` in your browser for local preview.

## GitHub Pages Deployment

1. Push this project to the `main` branch of:
   - `https://github.com/bobadevis/vreenda_gurukul.git`
2. In GitHub, open:
   - `Settings > Pages`
3. Under `Build and deployment`, choose:
   - `Source: GitHub Actions`
4. Push to `main` again if needed.
5. GitHub Actions will build and deploy the site automatically.
6. After the workflow succeeds, the site will be available at:
   - `https://bobadevis.github.io/vreenda_gurukul/`

## How To Change WhatsApp Number

Search for this URL in `index.html`:

```text
https://wa.me/919422370809?text=Hello%20I%20want%20enquiry%20about%20Vreenda%20Gurukul
```

Replace `919422370809` with your actual WhatsApp number in international format.

Example:

```text
https://wa.me/919876543210?text=Hello%20I%20want%20enquiry%20about%20Vreenda%20Gurukul
```

## How To Add Images

1. Create an `images` folder in the project root.
2. Add real classroom, activity, or institute photos there.
3. Update the gallery section in `index.html`.
4. Replace placeholder gallery panels with actual image elements or background images.
5. Update lightbox behavior in `script.js` if you want previews for real images.

## Folder Structure

```text
vreenda_gurukul/
|-- .github/
|   `-- workflows/
|       `-- pages.yml
|-- .nojekyll
|-- index.html
|-- style.css
|-- script.js
`-- README.md
```

## Notes

- The website is fully static and suitable for GitHub Pages.
- The contact form is currently a static frontend form.
- Update placeholder address, phone, email, and map details before publishing.
