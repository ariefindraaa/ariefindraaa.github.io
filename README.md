# Arief Indra Kusuma — Portfolio

Professional GitHub Pages portfolio for Arief Indra Kusuma, Electrical Engineering
Technology graduate from Universitas Gadjah Mada.

**Default theme: light corporate professional** — chosen so the site reads as clean,
formal, and easy to scan for HR and recruiters. A dark mode is available through the
toggle in the header, and the choice is remembered per visitor in `localStorage`.

## Structure

```text
index.html                 → single-page homepage (hero, profile, role fit,
                             experience, projects, skills, education, contact)
style.css                  → light corporate theme + dark mode tokens
script.js                  → theme toggle, navigation, scroll reveal, filters
projects/                  → project detail pages (case studies)
assets/                    → photos, CV, and certificates (see ASSET_GUIDE.md)
ASSET_GUIDE.md             → how to upload photos and documents
PORTFOLIO_RECOMMENDATIONS.md → content audit and next steps
```

### Project detail pages

| Page | Topic | Main tool |
| --- | --- | --- |
| `projects/transient-stability-ieee39.html` | Final project — transient stability detection | DIgSILENT PowerFactory + Python |
| `projects/neera-distribution-masterplan.html` | 10-year distribution masterplan | ETAP 12.6 |
| `projects/lombok-protection-study.html` | Protection coordination study | ETAP 21 |
| `projects/plts-hybrid-kkn.html` | 1.3 kWp hybrid off-grid PLTS | Field installation |
| `projects/patra-jasa-rtct.html` | RTCT Pertamina MEP testing & commissioning | Field / project control |
| `projects/dekatama-renewable-energy.html` | PLTS planning, BCS, PJUTS, PATS | Renewable energy EPC |

Each page follows the same structure: overview, problem statement, scope and role,
tools used, method and workflow, results, documentation gallery, and lessons learned.

### Assets

```text
assets/img/            → profile.jpg
assets/projects/       → field photos and technical screenshots
assets/cv/             → Arief_Indra_Kusuma_CV.pdf
assets/certificates/   → certificates, HKI, supporting documents
```

Optional assets degrade gracefully: the profile photo falls back to the "AIK"
initials, empty gallery slots show a dashed placeholder instead of a broken image,
and the **Download CV** button stays hidden until the PDF actually exists.
See `ASSET_GUIDE.md` for exact filenames and specifications.

## Content accuracy notes

- **DIgSILENT PowerFactory is used only for the final project**, as the source of
  IEEE 39-bus simulation data.
- **The Neera and Lombok studies use ETAP** (12.6 and 21 respectively), not DIgSILENT.
- **The SMK industrial placement (PKL)** at Distrik Navigasi Kelas II Banjarmasin was
  planned for one year but was cut to roughly three months by COVID-19. It was still
  carried out onsite / offline.

## Local preview

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deployment

GitHub Pages, source branch `main`, folder `/ (root)`:

```text
https://ariefindraaa.github.io/
```
