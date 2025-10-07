YayaGo Project Documentation
Complete Reference Guide for AI Agents & Developers

Table of Contents

Project Overview
Business Model
Tech Stack
Design System
Project Structure
Features & Phases
Page Routes
Component Patterns

Project Overview
What is YayaGo?
YayaGo is a peer-to-peer car rental marketplace founded in Dubai, UAE. It's a B2B and B2C platform where individual car owners can list their vehicles for rent, and renters can browse and contact hosts directly to arrange rentals.
Tagline: "Swiss precision. Dubai speed."
Core Concept

Not a traditional car rental company - YayaGo does NOT own cars
Peer-to-peer marketplace - Users list their own cars
No booking system (MVP) - Renters contact hosts directly (phone/WhatsApp)
Zero commission on rentals - Subscription-based model for hosts (future phase)
Direct communication - Platform facilitates discovery, users handle transactions

Target Market

Phase 1: Dubai, UAE only
Phase 2: Other Emirates (Abu Dhabi, Sharjah, etc.)
Phase 3: Middle Eastern countries
Phase 4: Eurasia
Phase 5: Global expansion

Current Status

In Development - Website not yet published
MVP Stage - Building core marketplace features
Focus: Car listings, user authentication, host-renter connection

Business Model
Revenue Streams (Future Phases)

Subscription Fees - Hosts pay monthly/yearly to list cars (no commission per rental)
Premium Listings - Featured placements for hosts
YayaCare Services - Commission on automotive services (battery, towing, tire service)
Value-Added Services - Delivery fees, insurance upgrades

Subscription Pricing

Tiered pricing based on number of cars
Pay regardless of whether cars are rented
Bonuses for hosts with multiple vehicles

Key Differentiators

✅ Zero commission on rentals (subscription only)
✅ No booking intermediary - direct host-renter contact
✅ Zero-deposit options for qualified renters
✅ Transparent pricing - all costs shown upfront
✅ Multilingual - EN/AR/RU support

Tech Stack
Frontend (Client & Admin Dashboard)
Framework: Next.js 15 (App Router)
Styling: Tailwind CSS 4
UI Components: shadcn/ui (when needed, prefer custom implementations)
Forms: react-hook-form + zod validation
Animation: Framer Motion
Language: TypeScript
Mobile App
Framework: React Native
Router: Expo Router
Runtime: Expo
Backend (Server)
Language: Java
Database: PostgreSQL
Additional Libraries
Date handling: date-fns or dayjs
Icons: lucide-react (from shadcn)
State: React hooks (useState, useContext)
Fetching: fetch API / Axios

Design System
Brand Identity
Primary Brand Color
--brand-primary: #6563cc;
Typography

Design Philosophy
Visual Style

Premium & Elegant - Luxurious feeling
NOT too flat - Avoid overly flat designs like typical luxury brands
Glassmorphism - Key design element (blurry, glassy effects)
Dynamic Backgrounds - Use images, videos, gradients (avoid plain white when possible)
Modern & Clean - Contemporary UI patterns

Design Principles

Transparency First - Show all costs upfront
Trust Signals - Badges, ratings, verified indicators
Visual Hierarchy - Clear CTAs and important info
Mobile-First - Responsive design always
Accessibility - WCAG AA compliance
Performance - Fast load times, optimized images

Glassmorphism Implementation
css/_ Glass Card Effect _/
.glass-card {
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

/_ Dark Glass Variant _/
.glass-dark {
background: rgba(0, 0, 0, 0.3);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
}

Project Structure
Directory Structure
yayago-client/
├── public/
│ ├── images/
│ ├── icons/
│ └── fonts/
├── src/
│ ├── app/ # Next.js 15 App Router
│ │ ├── (auth)/ # Auth route group
│ │ │ ├── login/
│ │ │ │ └── page.tsx
│ │ │ └── signup/
│ │ │ └── page.tsx
│ │ ├── about/
│ │ │ └── page.tsx
│ │ ├── cars/
│ │ │ ├── page.tsx # Car listings
│ │ │ └── [id]/
│ │ │ └── page.tsx # Car detail
│ │ ├── contact/
│ │ │ └── page.tsx
│ │ ├── host/
│ │ │ ├── list-car/
│ │ │ │ └── page.tsx
│ │ │ └── cars/
│ │ │ ├── page.tsx # My cars
│ │ │ └── [id]/
│ │ │ └── page.tsx # Edit car
│ │ ├── profile/
│ │ │ ├── page.tsx
│ │ │ └── settings/
│ │ │ └── page.tsx
│ │ ├── layout.tsx # Root layout
│ │ ├── page.tsx # Home page
│ │ └── globals.css # Global styles
│ ├── components/
│ │ ├── ui/ # shadcn components (when needed)
│ │ ├── layout/ # Layout components
│ │ │ ├── Header.tsx
│ │ │ ├── Footer.tsx
│ │ │ └── Navbar.tsx
│ │ ├── home/ # Home page sections
│ │ │ ├── HeroSection.tsx
│ │ │ ├── FeaturedCars.tsx
│ │ │ ├── HowItWorks.tsx
│ │ │ └── WhyYayaGo.tsx
│ │ ├── cars/ # Car-related components
│ │ │ ├── CarCard.tsx
│ │ │ ├── CarGrid.tsx
│ │ │ ├── CarFilters.tsx
│ │ │ └── SearchWidget.tsx
│ │ └── shared/ # Reusable components
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── Badge.tsx
│ │ └── Modal.tsx
│ ├── lib/
│ │ ├── utils.ts # Utility functions
│ │ └── constants.ts # App constants
│ ├── hooks/
│ │ ├── useAuth.ts
│ │ ├── useCars.ts
│ │ └── useMediaQuery.ts
│ ├── types/
│ │ ├── car.ts
│ │ ├── user.ts
│ │ └── index.ts
│ ├── services/ # API services
│ │ ├── api.ts
│ │ ├── auth.service.ts
│ │ └── car.service.ts
│ └── context/
│ ├── AuthContext.tsx
│ └── ThemeContext.tsx
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json

Features & Phases
MVP (Current Phase - Minimum Viable Product)
Core Features:

✅ User authentication (sign up/login)
✅ Browse available cars
✅ View car details
✅ Host contact information display (phone/WhatsApp)
✅ List your car (host side)
✅ User profile management

What's NOT in MVP:

❌ Booking system (users contact hosts directly)
❌ Payment processing
❌ Calendar/availability management
❌ Reviews/ratings system
❌ Advanced search filters
❌ Real-time tracking
❌ Subscription payment for hosts

Phase 2 (Post-MVP)

Car leasing options
Auto services marketplace (YayaCare)
Host subscription system
Advanced search & filters
Reviews & ratings
Calendar/availability management
In-app messaging

Phase 3 (Future)

Yacht rentals
Car buying/selling marketplace
Car sharing (short-term hourly rentals)
Mobile app launch
EV charging integration
Insurance partnerships

Page Routes
Public Routes (No Auth Required)
/ → Home Page
/cars → Car Listings
/cars/[id] → Car Detail Page
/about → About/How It Works
/contact → Contact/Help
/auth/login → Login
/auth/signup → Sign Up
Protected Routes (Auth Required)
/profile → User Profile
/profile/settings → Account Settings
/host/list-car → List New Car
/host/cars → My Listed Cars (Host Dashboard)
/host/cars/[id] → Edit Car Listing
