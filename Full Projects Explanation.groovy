css details
📌 CSS PAGE START MAP (SHORT VERSION)

1️⃣ Global / Common

Root variables:
:root { ... }

Header:
/* Header */

Footer:
/* Footer */

2️⃣ Login / Signup Page

Start:
/* Login / sign up */

3️⃣ User Profile Page

Start:
/* User Profile */

4️⃣ Users Stories (My Stories Page)

Start:
/* ---------- Users Separate Stories Page ---------- */

5️⃣ Stories Listing Page

Start:
/* stories */

6️⃣ Home Page

Start:
/* Home page */

7️⃣ About Page

Start:
/* About Page */

8️⃣ Donation Page

Start:
/* donation page */

9️⃣ Contact Page

Start:
/* ---------- Contact Page ---------- */

🧠 Use kaise kare (1 line)

CSS me Ctrl + F → comment paste karo → direct page section mil jayega





📁 React Project Structure – Developer Summary

Project: Humans of Kindness
Path: React Practice/src

📦 src/ (Main Source Folder)

src poore React application ka root hai.
Yahin se app start hoti hai.

1️⃣ assets/

Purpose: Static files (images)

Contains:

All images used across the application
(banners, icons, illustrations, backgrounds)

Usage:

Import images in components/pages when needed

Centralized asset management

👉 Koi logic nahi hota, sirf media files.

2️⃣ components/

Purpose: Reusable UI components
(yeh multiple pages me use ho sakte hain)

Files inside components/:

Header.jsx

Top navigation bar

Login / Logout logic

Profile dropdown

Appears on all pages

Footer.jsx

Footer section

Links, branding, copyright

Appears on all pages

LoginSignup.jsx

Login & Sign Up UI

Authentication handling

Guest → Logged-in user flow

UserProfile.jsx

User profile page

Profile image upload

User impact metrics

User-Stories.jsx

User’s personal stories page

Donation summary

Community encouragement section

👉 Components = reusable + layout related logic

3️⃣ pages/

Purpose: Full pages (route-based)

Each file here represents one route/page.

Files inside pages/:

Home.jsx

Main landing page (after login)

Hero, highlights, featured stories

About-us.jsx

About the platform

Mission, vision, story

Stories.jsx

Public stories listing page

Cards showing different stories

donation.jsx

Donation page

Donation form, amount selection, CTA

contact.jsx

Contact Us page

Contact info + message form

👉 Pages = route level components

4️⃣ Other Files inside src/
🔹 App.jsx

Main routing file

Handles:

React Router routes

Protected routes (login required)

Header & Footer placement

🔹 main.jsx

Application entry point

Renders <App /> into the DOM

React root setup

5️⃣ CSS Structure inside src
🔹 style.css

Main global CSS

Contains:

Page-wise styles

Component styles

Layout styles

Theme variables (:root)

🔹 styleres.css

Responsive CSS

Contains:

Media queries

Mobile / tablet adjustments

Screen-size based fixes

👉 Logic:

style.css → base + desktop

styleres.css → responsive behavior

🧠 Simple Rule for Developers

UI reusable? → components/

New page/route? → pages/

Images/icons? → assets/

Global logic & routing? → App.jsx

Base styles? → style.css

Responsive fixes? → styleres.css

✅ One-Line Understanding

This project follows a clean separation of
Assets → Components → Pages → App Logic → Styles