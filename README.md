# INFNOVA Frontend Engineering Challenge

  A pixel-accurate, fully responsive frontend implementation based on the provided Figma design.

  This project was built as part of the **INFNOVA Frontend Internship Engineering Challenge**, focusing on clean UI implementation, strong architecture, and polished UX.

---

## 🔧 Tech Stack

  * **Framework:** React 18
  * **Build Tool:** Vite
  * **Language:** TypeScript
  * **Styling:** TailwindCSS
  * **Data Fetching:** TanStack Query (React Query)
  * **Routing:** React Router
  * **Animations:** Framer Motion

---

## 🚀 Live Demo

  [Live Demo](https://infnova-course.vercel.app)

## 📦 GitHub Repository

  [GitHub Repo](https://github.com/yamneg96/INFNOVA-COURSE.git)

---

## 📌 Features Implemented

### 1. Pixel-Accurate UI
  * Strict adherence to Figma layout
  * Accurate spacing scale
  * Proper border radius and shadows
  * Consistent typography hierarchy
  * Correct image aspect ratios
  * Grid alignment and spacing precision

### 2. Fully Responsive Design
  * Mobile-first implementation
  * **Breakpoints:** 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
  * Course detail layout stacks properly on smaller screens
  * Responsive paddings and container widths

### 3. API Integration
* Integrated with the provided endpoints:
    * `GET https://infnova-course-api.vercel.app/api/courses`
    * `GET https://infnova-course-api.vercel.app/api/courses/:id`
* Data fetching handled via **TanStack Query**
* Cached queries and configured stale time
* Automatic refetch control

### 4. Loading States
  * Implemented professional skeleton loaders to improve perceived performance
  * Grid skeletons for course list
  * Detail page content skeleton
  * Smooth fade-in transitions

### 5. Error Handling
* **Graceful fallback UI:**
    * User-friendly error messages
    * Clean visual presentation
    * No broken UI rendering

### 6. UX Polish
  * Smooth fade-in transitions (**Framer Motion**)
  * Hover lift animation on cards
  * Button hover states and active feedback
  * Focus ring accessibility
  * Smooth route transitions
  * Subtle elevation effects

### 7. Code Quality & Architecture
* **Clear separation of concerns:**
    * `src/api/` → API layer
    * `src/hooks/` → TanStack query hooks
    * `src/components/` → Reusable UI + domain components
    * `src/pages/` → Route-level pages
    * `src/layouts/` → Layout wrappers
    * `src/types/` → Strong TypeScript types
    * `src/router/` → Centralized routing

---

## 🎨 Color System & UX Polish

- **Primary Button & Action Color:** #FF6900 (used for enroll/signin buttons, left side of gradients)
- **Accent/Secondary Orange:** #F54900 (used for right side of gradients, other orange UI parts)
- **Teacher Profile Gradient:** #FF8904 (left) to #F54900 (right)
- **Why:** These colors were chosen for strong visual hierarchy, accessibility, and brand consistency. Gradients are used to create depth and highlight key actions and sections.

---

## 🧭 Navigation Experience

- **Scroll-to-Top:** When navigating between pages, the scroll position resets to the top for a consistent and professional user experience. This is handled via a custom router utility.

---

## 📁 Folder Structure (Expanded Rationale)

- **Modular Organization:** Each folder has a clear responsibility, supporting separation of concerns and scalability.
- **Domain-Driven Components:** Components are grouped by domain (course, layout, ui) for easy maintenance and reusability.
- **Centralized Routing:** All navigation logic is in `src/router/`, making route management straightforward.
- **Type Safety:** Types are defined in `src/types/` for consistent data contracts across the app.
- **API Layer:** All backend communication is abstracted in `src/api/`, allowing easy updates and testing.
- **Custom Hooks:** Data fetching and business logic are encapsulated in `src/hooks/`, promoting DRY principles.
- **Layouts:** Shared page layouts are in `src/layouts/`, ensuring consistent structure and easy global changes.

---

## 🏆 Architectural Strengths

- **Scalability:** Structure supports easy feature addition and team collaboration.
- **Maintainability:** Clear boundaries and strong typing reduce bugs and speed up onboarding.
- **Industry Alignment:** Follows patterns used in large-scale React projects, making it familiar to new developers.
- **Accessibility & UX:** Color choices, focus rings, and scroll management ensure a polished, accessible experience.

---

## 📚 Documentation & Onboarding

- The folder structure and architectural choices are documented for easy onboarding and future maintenance.
- All major design and UX decisions are explained for transparency and knowledge sharing.

---

## 📦 GitHub Repository

  [GitHub Repo](https://github.com/yamneg96/INFNOVA-COURSE.git)

---

## 🧠 Architectural Decisions

  * **Why TanStack Query?** Clean separation of server state, built-in caching, and production-grade loading/error management.
  * **Why Component Segmentation?** Encourages reusability, testability, and long-term maintainability.
  * **Why TypeScript?** Ensures safer API integration with clear data contracts and a better developer experience.

---

## ⚙️ Setup Instructions

### 1. Clone Repository

  ```bash
  git clone https://github.com/yamneg96/INFNOVA-COURSE
  cd INFNOVA-COURSE

  ```

### 2. Install Dependencies

  ```bash
  npm install

  ```

### 3. Run Development Server

  ```bash
  npm run dev

  ```

### 4. Build for Production

  ```bash
  npm run build

  ```

---

## 🎯 Evaluation Alignment

  | Criteria | Implementation |
  | --- | --- |
  | **Visual Accuracy** | Precise spacing, layout, and typography |
  | **Responsiveness** | Mobile-first responsive grid system |
  | **Code Quality** | Structured folders, clean naming, and strong typing |
  | **UX Polish** | Skeletons, Framer Motion animations, and hover states |

---

## 🔍 Performance Considerations

  * Query caching with `staleTime` to reduce unnecessary API calls.
  * Minimized re-renders through proper component memoization.
  * Optimized image rendering and lightweight animation usage.

## 📝 Notes

  The primary implementation integrates directly with the official API. In the event of CORS restrictions during local development, a proxy or local mock data can be toggled via the API layer.

---

**👤 Author** 
**Yamlak** 
*Lead Frontend Developer*