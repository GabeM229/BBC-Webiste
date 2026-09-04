# BBC — BEAST Broadcasting Corporation

Unofficial parody website for the Tuks Rowing B Men / BEAST crew at Universities Boat Race on the Kowie River.

## Files
- `index.html` — website content
- `styles.css` — visual design + mobile responsiveness
- `script.js` — ticker, article popups, mobile menu, random headline generator

## Add crew photos later

The current site uses letter placeholders. The easiest way to replace one:

1. Put the photo in a new `images` folder, e.g. `images/nick.jpg`.
2. In `index.html`, find:
   `<div class="portrait placeholder"><span>NJ</span></div>`
3. Replace it with:
   `<img class="portrait" src="images/nick.jpg" alt="Nick J">`

For the group image, replace the `.hero-photo` placeholder with:
`<img class="hero-photo" src="images/crew.jpg" alt="BEAST crew">`

If needed, add this to `styles.css`:
```
img.portrait, img.hero-photo {
  width: 100%;
  object-fit: cover;
}
```

## Publish it free

### GitHub Pages
1. Create a new GitHub repository.
2. Upload these three website files.
3. In repository Settings → Pages, deploy from the `main` branch.
4. GitHub will give you a public URL.

### Netlify
Drag the whole site folder into Netlify's manual deploy area. It will generate a public link.

## Important
This site is intentionally styled as a parody newsroom. It includes a footer stating that it is unofficial and not affiliated with the BBC or presented as official University of Pretoria communications.
