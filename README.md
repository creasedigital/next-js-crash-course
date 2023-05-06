Next.js Crash Course
This is a beginner-friendly crash course on Next.js, a React-based web framework for building server-side rendered (SSR) and statically generated (SSG) web applications.

Project Setup
To get started with the project, follow these steps:

Clone the repository from GitHub:
bash
Copy code
git clone https://github.com/creasedigital/next-js-crash-course.git
Install the dependencies:
bash
Copy code
cd nextjscrashcourse
npm install
Run the development server:
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.
Course Curriculum
The course covers the following topics:

Setting up a new Next.js project
Creating pages and navigating between them
Adding styles with CSS modules
Fetching data with API routes
Building a dynamic blog with SSG
Deploying the application to Vercel
Project Structure
The project structure is as follows:

Copy code
next-js-crash-course/
├── components/
│ ├── Header.js
│ ├── Layout.js
│ └── Post.js
├── pages/
│ ├── api/
│ │ └── posts.js
│ ├── index.js
│ ├── about.js
│ └── posts/
│ ├── [slug].js
│ └── index.js
├── public/
│ └── favicon.ico
├── styles/
│ ├── globals.css
│ └── Post.module.css
├── .gitignore
├── LICENSE
├── README.md
└── package.json
Technologies Used
Next.js
React
CSS Modules
Vercel (for deployment)
Resources
Next.js Documentation
React Documentation
CSS Modules Documentation
Vercel Documentation
Author
This project was created by creasedigital.
