# Mind Legacies — Company Website

A 5-page site: **Home, SYNAPSIS, AfroNovari, About, Contact**. Plain HTML/CSS/JS — no build step, no server needed. This guide assumes zero prior experience.

---

## 1. Put it on GitHub (free hosting via GitHub Pages)

1. Go to [github.com](https://github.com) and create a free account if you don't have one.
2. Click the **+** icon top-right → **New repository**.
   - Name it something like `mindlegacies-website`
   - Set it to **Public**
   - Don't add a README (you already have one) — just click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Drag in **every file and folder** from this project (`index.html`, `synapsis.html`, `afronovari.html`, `about.html`, `contact.html`, `css/`, `js/`, `assets/`, this `README.md`) and click **Commit changes**.
5. Go to **Settings** (top tab of the repo) → **Pages** (left sidebar).
6. Under "Build and deployment" → Source: choose **Deploy from a branch**. Branch: **main**, folder: **/ (root)**. Click **Save**.
7. Wait 1–2 minutes, refresh the page — GitHub will show you a live link like:
   `https://yourusername.github.io/mindlegacies-website/`

That's your live website. Anyone can visit that link right now.

### Using your own domain (mindlegacies.com)
If you own `mindlegacies.com` already: in the same **Pages** settings, enter it under "Custom domain," then go to wherever you bought the domain (e.g. Afrihost, Domains.co.za) and add a **CNAME record** pointing to `yourusername.github.io`. GitHub will show you the exact steps once you type the domain in.

---

## 2. Make the contact & waitlist forms actually email you

Right now the forms are wired to a placeholder address. To make them work:

1. Go to [formspree.io](https://formspree.io) and create a **free account** with the email you want enquiries sent to.
2. Click **New Form**, give it any name (e.g. "Mind Legacies Contact"), and confirm your email.
3. Formspree will give you a URL like `https://formspree.io/f/abc123xy`.
4. Open **`contact.html`** and **`afronovari.html`** in GitHub (click the file, then the pencil/edit icon), find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your real ID (e.g. `abc123xy`) in **both files**, then commit the change.
5. Done — form submissions will now land in your inbox.

---

## 3. Add your photo to the Founder Story section

1. Add your photo to the `assets` folder, named exactly `amantle-pitso.jpg`.
2. Open **`index.html`**, find this block:
   ```html
   <div class="founder-photo">
     <!-- Replace this placeholder with a photo: assets/amantle-pitso.jpg -->
     <div class="placeholder">
       ...
     </div>
   </div>
   ```
3. Replace the whole `<div class="placeholder">...</div>` block with:
   ```html
   <img src="assets/amantle-pitso.jpg" alt="Amantle Pitso">
   ```
4. Commit the change.

---

## 4. What's already in the site

- **Home** — hero, brand pillars, company brief, founder story (placeholder photo + bio — please review the pull-quote wording, it's a first draft), SYNAPSIS + AfroNovari preview cards.
- **SYNAPSIS** — what it is (kept high-level to protect the underlying architecture), applications, the V0A (live) / V0B (coming soon) roadmap, the 4-stage commercial engagement model, and the R15,000 Discovery Session pricing card. "Request a Demo" and "Book a Discovery Session" both route to the Contact page with the subject pre-filled.
- **AfroNovari** — coming-soon teaser with waitlist signup form.
- **About** — full company profile: vision, mission, dual-division org structure, industry applications, registration details.
- **Contact** — form with a dropdown for enquiry type, plus your phone/address/registration info.

## 5. Editing text or colours later

- All page copy is plain text inside each `.html` file — open in GitHub's editor and change directly.
- Colours, fonts, and spacing all live in `css/style.css` at the top under `:root{ }` if you ever want to adjust the palette.

## 6. Local preview (optional)

If you want to preview changes before pushing to GitHub, just double-click `index.html` — it opens directly in your browser from your computer.
