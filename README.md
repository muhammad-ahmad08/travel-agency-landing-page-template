# 🌍 Al-Safar Travels | Premium Travel Agency & Tour Operator Landing Page

A modern, high-conversion, fully responsive landing page template tailored for travel agencies, tour operators, and spiritual/vacation travel booking services (Hajj & Umrah, international tours, visa assistance, and luxury getaways). Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion / Motion**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

---

## ✨ Key Features

- **⚡ Next.js 16 App Router**: Server components, optimized fonts (Inter & Poppins), and lightning-fast static export support.
- **🎨 Modern & Responsive UI**: Built with Tailwind CSS v4 and custom animations powered by **Motion**.
- **📜 Intersection Scroll Animations**: Smooth, polished fade-in reveals that trigger once per element on initial scroll.
- **🌟 Featured Packages Grid**: Interactive cards highlighting Hajj & Umrah, Turkey, Dubai, Maldives, and Egypt tours with pricing, duration, and direct inquiry triggers.
- **💬 Testimonials Carousel**: Auto-sliding and manual dot-navigation review cards with guaranteed spacing (no overlap).
- **📱 Conversion Boosters**: Floating WhatsApp chat button, scroll progress bar, trust badges bar, and responsive mobile drawer navigation.
- **📧 Inquiry & Contact Form**: Professional contact section with server-side API handling via Resend.
- **☁️ CI/CD Deployment Ready**: Fully configured with GitHub Actions to automatically build and sync static exports to **AWS S3**.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) v16
- **UI Library:** [React](https://react.dev/) v19
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations:** [Motion](https://motion.dev/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Email Service:** [Resend](https://resend.com/)
- **Hosting & CI/CD:** GitHub Actions & AWS S3

---

## 📂 Project Structure

```text
├── .github/workflows/deploy.yml   # CI/CD pipeline for automated AWS S3 deployment
├── next.config.ts                 # Next.js static export & unoptimized image config
├── src/
│   ├── config.ts                  # Centralized agency brain (name, phone, whatsapp, email, socials)
│   ├── app/
│   │   ├── globals.css            # Global Tailwind CSS variables & custom utilities
│   │   ├── layout.tsx             # Root layout with Google Fonts, Preloader, and ScrollProgress
│   │   └── page.tsx               # Main landing page component assembly
│   └── components/
│       ├── ui/                    # Reusable UI primitives (Button, Card, Logo, Reveal, etc.)
│       ├── layout/                # Structural layout components (Navbar, Hero, Footer, WhatsAppFloat)
│       └── sections/              # Landing page sections (FeaturedPackages, Services, Testimonials, Contact)
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v20 or higher) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/muhammad-ahmad08/travel-agency-landing-page-template.git
   cd travel-agency-landing-page-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the template.

---

## ⚙️ Customization (`src/config.ts`)

Rebranding this template for a new client is extremely simple. Open `src/config.ts` and update your agency details:

```typescript
export const siteConfig = {
  agencyName: "Al-Safar Travels",
  logo: "/images/logo-v2.png",
  logoDark: "/images/logo-white-v2.png",
  phone: "+92 324 5693908",
  whatsapp: "923245693908", // Number without '+' or spaces for direct link
  email: "info@alsafartours.com",
  address: "123 Travel Street, Lahore, Pakistan",
  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  }
};
```

---

## ☁️ CI/CD Deployment (AWS S3 & GitHub Actions)

The repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds the static export (`npm run build`) and syncs it to your AWS S3 bucket on every push to `main`.

### Required GitHub Secrets:
To enable automated deployments, add the following secrets under your GitHub repository settings (**Settings > Secrets and variables > Actions**):
- `AWS_ACCESS_KEY_ID`: Your AWS IAM User Access Key
- `AWS_SECRET_ACCESS_KEY`: Your AWS IAM User Secret Key
- `AWS_S3_BUCKET`: Your target S3 bucket name

---

## 📜 License

This project is licensed under the MIT License. Feel free to use and adapt it for your clients or portfolio projects.
