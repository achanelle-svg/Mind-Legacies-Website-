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

## 3. Your phone number

The site currently shows "Phone: coming soon" wherever a phone number would go (footer, About, Contact). Once you have a dedicated Mind Legacies number, search each `.html` file for the text `Phone: coming soon` and replace it with a real link, e.g.:
```html
<a href="tel:0123456789">012 345 6789</a>
```

## 4. Editing team & hiring info

The clickable team/role cards (on the SYNAPSIS and About pages) pull their text from one place: `js/main.js`, near the top, in a section called `const ROLES = { ... }`. To update a role's description, status ("hiring" / "vacant" / "filled"), or add a name once someone's hired, edit the matching entry there — every page using that role updates automatically.

## 5. What's already in the site

- **Home** — hero, brand pillars, the tensegrity-based company brief, founder story (your photo + story + quote), SYNAPSIS + AfroNovari preview cards.
- **SYNAPSIS** — positioned as an IP System Venture within the Mind Legacies portfolio (kept high-level to protect the underlying architecture), its three divisions (Technology, Science, Operations) with clickable leadership roles, a "Now Hiring" section for the Technology Lead and Business Development Lead, applications, the V0A (live) / V0B (coming soon) roadmap, the 4-stage commercial engagement model, and the R15,000 Discovery Session pricing card.
- **AfroNovari** — coming-soon teaser with waitlist signup form.
- **About** — the tensegrity model, the three venture categories (IP System Ventures / Type A / Type B subsidiaries), leadership, a "Now Hiring" section for the Operations Lead and Finance Lead (both hired directly by Mind Legacies), and registration details.
- **Contact** — form with a dropdown for enquiry type, plus your email/address/registration info. "Request a Demo," "Book a Discovery Session," and every "I'm Interested — Apply" button route here with the subject pre-filled.

## 6. Editing text or colours later

- All page copy is plain text inside each `.html` file — open in GitHub's editor and change directly.
- Colours, fonts, and spacing all live in `css/style.css` at the top under `:root{ }` if you ever want to adjust the palette.

## 7. Local preview (optional)

If you want to preview changes before pushing to GitHub, just double-click `index.html` — it opens directly in your browser from your computer.
