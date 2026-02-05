# ENTENTE-2026 Conference Website

A modern, fully-responsive Next.js web application for the 5th International Conference on Knowledge Society in Transition: Advancing Sustainability through Multidisciplinary Research.

## Overview

ENTENTE-2026 is a professional conference website featuring information about speakers, workshops, committees, and registration details. Built with Next.js 16, TypeScript, and Tailwind CSS.

**Venue:** NIIT University, Neemrana, Rajasthan  
**Dates:** 8–10 April 2026  
**Colors:** Maroon (#8b2635), Gold (#d4af37), White (#ffffff)

## Pages & Sections

### Home (`/`)
Main landing page with hero carousel, conference overview, theme, key highlights, and important dates.

### About
- **Conference** (`/about/conference`) - History and mission
- **University** (`/about/university`) - NIIT University overview

### Conference
- **Theme & Tracks** (`/conference/theme-tracks`) - Research themes and tracks
- **Call for Papers** (`/conference/call-for-papers`) - Submission guidelines
- **Important Dates** (`/conference/important-dates`) - Deadlines and schedule
- **Venue** (`/conference/venue`) - Location and campus info

### Programme
- **Keynote Speakers** (`/programme/keynote-speakers`) - Distinguished speakers
- **Workshops** (`/programme/workshops`) - Featured workshops
- **Events** (`/programme/events`) - Conference schedule

### Committees
- **Advisory Board** (`/committees/advisory-board`) - Advisory members
- **Organizing** (`/committees/organizing`) - Organizing team
- **Patrons** (`/committees/patrons`) - Conference patrons

### Participation
- **Registration** (`/participation/registration`) - Registration info
- **Submission Guidelines** (`/participation/submission-guidelines`) - Paper submission

### Utility Pages
- **Call for Papers** (`/call-for-papers`)
- **Keynote Speakers** (`/keynote-speakers`)
- **Theme Tracks** (`/theme-tracks`)
- **Important Dates** (`/important-dates`)
- **Registration** (`/registration`)
- **Venue** (`/venue`)
- **Contact** (`/contact`)

## Key Components

**Navigation:** Responsive navbar with dropdown menus  
**Cards:** Consistent card layouts with images, titles, and descriptions  
**Buttons:** CTA buttons with hover effects  
**Sections:** Unified section wrapper with `py-6 md:py-8` spacing  
**Footer:** Compact footer with links, contact info, and logo  

## Design Features

✅ Clean white backgrounds with maroon primary color and gold accents  
✅ Responsive grid layouts (1-2-3 columns)  
✅ Reduced padding between sections for visual fluency  
✅ Professional typography hierarchy  
✅ No overlapping elements or broken layouts  
✅ Touch-friendly navigation  
✅ Light mode only design  

## Technical Stack

- **Framework:** Next.js 16.1.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0
- **Icons:** Inline SVG
- **Routes:** 27 pre-rendered static pages

## Building & Deployment

```bash
npm install              # Install dependencies
npm run dev              # Development server (localhost:3000)
npm run build            # Production build
npm start                # Start production server
```

## Contact

**Email:** entente@st.niituniversity.in  
**Phone:** +91-9810197694  
**Location:** NIIT University, Neemrana, Rajasthan, India
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with navbar and footer
│   ├── page.tsx                   # Homepage
│   ├── about/page.tsx             # About Conference & NIIT University
│   ├── theme-tracks/page.tsx      # Conference theme and sub-tracks
│   ├── call-for-papers/page.tsx   # Submission guidelines
│   ├── important-dates/page.tsx   # Key dates and deadlines
│   ├── keynote-speakers/page.tsx  # Keynote speakers & workshops
│   ├── committees/page.tsx        # Committee members
│   ├── registration/page.tsx      # Registration info & fees
│   ├── venue/page.tsx             # NIIT University venue details
│   └── contact/page.tsx           # Contact information
├── components/                    # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroCarousel.tsx
│   ├── SectionWrapper.tsx
│   ├── Card.tsx
│   ├── CTAButton.tsx
│   └── PlaceholderImage.tsx
└── lib/                           # Utility functions
```

---

## 📄 Pages Included

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Overview with hero, highlights, and key information |
| About Conference | `/about` | Detailed about ENTENTE-2026 and NIIT University |
| Theme & Tracks | `/theme-tracks` | Conference theme and indicative sub-tracks |
| Call for Papers | `/call-for-papers` | Submission guidelines and plagiarism policy |
| Important Dates | `/important-dates` | Timeline of key deadlines |
| Keynote & Speakers | `/keynote-speakers` | Keynote speakers, workshops, and featured event |
| Committees | `/committees` | Patrons, mentors, advisory board, organizing committee |
| Registration | `/registration` | Registration categories, fees, and what's included |
| Venue & University | `/venue` | NIIT University campus details and facilities |
| Contact | `/contact` | Contact information and FAQ |

---

## 🎨 Design Features

- **Clean, Professional Layout:** Academic and institutional design
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Sticky Navigation:** Always accessible navigation bar
- **Color Scheme:** Indigo and blue gradients with professional grays
- **Hero Carousel:** Auto-rotating hero section with manual controls
- **Card-Based Layout:** Consistent, scannable content organization

---

## 📝 Content Source

All content is sourced directly from the official **ENTENTE-2026 brochure and flyer**. Each page includes:

- Exact text from official sources (not paraphrased)
- Academic tone maintained throughout
- Proper attribution and links to external resources
- Clear hierarchy and scannable sections

---

## 🖼️ Placeholder Images

The following placeholder images should be replaced with actual images:

1. **Speaker Photos** in `/keynote-speakers` - Circular gradients
2. **Campus Images** in `/venue` - Rounded rectangles
3. **Hero Carousel** slides - Gradient backgrounds

To replace:
1. Add images to `/public/` directory
2. Update image paths in respective components
3. Use Next.js Image component for optimization

---

## 🔗 External Links

These links are fully functional:

- **Paper Submission:** https://easychair.org/conferences?conf=entente2026
- **Registration:** https://forms.gle/Tz3xm1VoTChDnbcA7

---

## 📋 Key Conference Information

### Theme
**Knowledge Society in Transition: Advancing Sustainability through Multidisciplinary Research**

### Important Dates
- **Abstract Submission:** Closes 15 February 2026
- **Full Paper Submission:** Closes 30 December 2025
- **Early Bird Registration:** 1 Jan - 30 Jan 2026
- **Conference Dates:** 8–10 April 2026

### Research Areas
- Humanities & Social Sciences
- Library Sciences
- Educational Technology
- Management

### Highlights
- Best Paper Awards in all four areas
- Workshops on Case Writing & Impactful Research
- Networking Dinner (9 April)
- Publication in proceedings with ISBN
- Springer Nature publication for select papers

---

## 📞 Contact

**Email:** entente@st.niituniversity.in  
**Phone:** +91-9810197694

**Venue:** NIIT University, Neemrana, Rajasthan, India

---

**Built with ❤️ for ENTENTE-2026**  
**Version:** 1.0.0  
**Last Updated:** December 2025
