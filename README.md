# Vreenda Gurukul Static Website

A modern, responsive educational website built using only HTML, CSS, and Vanilla JavaScript for **Vreenda Gurukul**.

## Project Setup

1. Open the project folder.
2. Keep these files together in the root directory:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `.gitlab-ci.yml`
3. Open `index.html` in your browser for local preview.

## GitLab Pages Deployment

1. Create a GitLab project and upload all files to the `main` branch.
2. Ensure the repository includes the provided `.gitlab-ci.yml`.
3. Push changes to `main`.
4. GitLab will run the Pages pipeline automatically.
5. After the pipeline succeeds, open:
   - `Deploy > Pages`
   - Or your GitLab Pages URL

## How To Change WhatsApp Number

Search for this URL in `index.html`:

```text
https://wa.me/919999999999?text=Hello%20I%20want%20enquiry%20about%20Vreenda%20Gurukul
```

Replace `919999999999` with your actual WhatsApp number in international format.

Example:

```text
https://wa.me/919876543210?text=Hello%20I%20want%20enquiry%20about%20Vreenda%20Gurukul
```

## How To Add Images

1. Create an `images` folder in the project root.
2. Add your real classroom, activity, or institute photos there.
3. Update the gallery section in `index.html`.
4. Replace placeholder gallery buttons with actual image elements or background images.
5. If needed, update the lightbox content in `script.js` to match the new images.

## Folder Structure

```text
vreenda-gurukul/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
`-- .gitlab-ci.yml
```

## Notes

- The website is fully static and suitable for GitLab Pages.
- The contact form is currently a static frontend form.
- Update placeholder address, phone, email, and map details before publishing.
