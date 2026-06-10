# Kinga Rapacka — AI Portfolio

Portfolio website for Kinga Rapacka, AI Solutions Specialist.

## Structure

```
portfolio/
├── index.html              # Main page (hero + projects + skills + certs + contact)
├── about.html              # About page
├── css/
│   ├── style.css           # Global styles
│   └── project.css         # Project/inner page styles
├── js/
│   └── main.js             # Navigation, scroll reveal, animations
├── projects/
│   ├── 3dsmart.html        # 3DSmart AI Orchestrator case study
│   └── tech-writing.html   # Technical Writing portfolio
└── assets/
    ├── Kinga_Rapacka_CV.pdf           # Download CV link
    └── 3DSmart_Technical_Documentation.pdf  # Project docs
```

## Pages

- **index.html** — hero with animated pipeline card, about strip, projects grid, skills, certifications, contact
- **about.html** — full profile, background, what I'm looking for
- **projects/3dsmart.html** — full case study with pipeline diagram, architecture decisions, results
- **projects/tech-writing.html** — structured authoring portfolio overview

## Deploy to GitHub Pages

1. Create a new repository: `github.com/KinRap/ai-portfolio` (or use your GitHub username)
2. Push all files to the `main` branch
3. Go to Settings → Pages → Source: Deploy from branch → `main` → `/ (root)`
4. Your site will be live at `https://kinrap.github.io/ai-portfolio/`

### Update the CV link
Place `Kinga_Rapacka_CV.pdf` in the `assets/` folder before deploying.

### Update the 3DSmart docs link
Place `3DSmart_Technical_Documentation.pdf` in the `assets/` folder.

## Tech stack

- Plain HTML5, CSS3, vanilla JavaScript — no framework, no build step
- Google Fonts: DM Serif Display + Inter + JetBrains Mono
- IntersectionObserver for scroll reveal
- No dependencies, no npm, no bundler

## To add a new project

1. Create `projects/your-project.html` (copy `3dsmart.html` as template)
2. Add a project card to `index.html` in the `#projects` section
3. Update the nav if needed
