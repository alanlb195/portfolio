const certificates = [
    {
        title: "DevOps: Docker, Kubernetes, Jenkins, GitFlow CI/CD",
        provider: "Udemy",
        date: "March 6, 2023",
        duration: "16.5 Hours",
        technologies: ["Docker", "Jenkins", "Kubernetes", "Git", "CI/CD"],
        description:
            "This certificate helped me understand the entire cycle from development to deployment. It also served as the basis for my university thesis, as I chose this topic.",
        certificateUrl: "https://www.udemy.com/certificate/UC-7ead730f-c8bb-4934-b190-9fae87c2439a/",
    },
    {
        title: "React Native CLI: Native Apps for iOS and Android",
        provider: "Udemy",
        date: "February 23, 2025",
        duration: "33 Hours",
        technologies: ["React Native", "Navigation", "UI Components", "Zustand", "TanStack Query"],
        description:
            "I learned React Native out of curiosity for mobile development and my love for JavaScript and TypeScript. It was my first step into building native mobile apps.",
        certificateUrl: "https://www.udemy.com/certificate/UC-c8022ba9-0bda-4623-826b-6e0844ed6fd5/",
    },
    {
        title: "TanStack Query: A Powerful Asynchronous State Manager",
        provider: "DevTalles",
        date: "March 12, 2025",
        duration: "37.5 Hours",
        technologies: ["TanStack Query"],
        description:
            "After discovering the power of TanStack Query in React Native, this course helped me better understand this powerful tool.",
        certificateUrl: "https://cursos.devtalles.com/certificates/xfbvdfdjyn",
    },
    {
        title: "Node.js: From Zero to Expert",
        provider: "DevTalles",
        date: "March 29, 2025",
        duration: "37.5 Hours",
        technologies: ["Node.js", "MongoDB", "PostgreSQL", "Express", "Jest"],
        description:
            "This course helped me master backend fundamentals, including building scalable APIs, working with databases, and applying architecture best practices.",
        certificateUrl: "https://cursos.devtalles.com/certificates/j5egawmq6g",
    },
    {
        title: "NestJS: Scalable Backend Development with Node",
        provider: "DevTalles",
        date: "April 04, 2025",
        duration: "25 Hours",
        technologies: ["NestJS", "MongoDB", "PostgreSQL", "TypeORM", "Websockets"],
        description:
            "I learned everything from data validation to JWT authentication, middleware, guards, and WebSockets — all essential for building scalable backend systems.",
        certificateUrl: "https://cursos.devtalles.com/certificates/3cgst3u9dp",
    },
    {
        title: "NestJS + Reports: Generate PDFs from Node",
        provider: "DevTalles",
        date: "April 11, 2025",
        duration: "6.5 Hours",
        technologies: ["NestJS", "HTML Elements in Reports", "Charts and SVGs", "Tables"],
        description:
            "This course showed me how to create modern PDF reports using PDFMake — a major upgrade from tools like Crystal Reports that require external software.",
        certificateUrl: "https://cursos.devtalles.com/certificates/dvrvuuprxw",
    },
    {
        title: "SOLID Principles and Clean Code",
        provider: "DevTalles",
        date: "April 12, 2025",
        duration: "6.5 Hours",
        technologies: ["SOLID", "Clean Code"],
        description:
            "This course reinforced what I already knew about SOLID principles and Clean Code—fundamental concepts that every developer should keep in mind.",
        certificateUrl: "https://cursos.devtalles.com/certificates/npzuarkhzg",
    },
    {
        title: "GIT + GitHub: A Complete Version Control System from Scratch",
        provider: "DevTalles",
        date: "April 14, 2025",
        duration: "11.5 Hours",
        technologies: ["Git", "GitHub"],
        description:
            "I took this course to explore specific Git topics such as conflict management, revert, reset, and overall safe practices when using Git.",
        certificateUrl: "https://cursos.devtalles.com/certificates/latb73hhun",
    },
    {
        title: "Design Patterns: Practical and Efficient Solutions",
        provider: "DevTalles",
        date: "April 17, 2025",
        duration: "10 Hours",
        technologies: ["Design Patterns"],
        description:
            "I took time to give each design pattern the attention it deserved. This course helped me understand how to solve recurring problems more effectively.",
        certificateUrl: "https://cursos.devtalles.com/certificates/hgjyrb4qae",
    },
    {
        title: "NestJS + Testing: Unit and End-to-End (e2e) Testing",
        provider: "DevTalles",
        date: "April 17, 2025",
        duration: "12.5 Hours",
        technologies: ["Jest"],
        description:
            "I explored how to apply testing in backend systems using Jest, learning how to keep applications stable and error-free through automated tests.",
        certificateUrl: "https://cursos.devtalles.com/certificates/feu8t2qu4r",
    },
    {
        title: "Docker: A Practical Guide for Developers",
        provider: "DevTalles",
        date: "April 26, 2025",
        duration: "14 Hours",
        technologies: ["Docker", "GitHub Actions"],
        description:
            "This course was a crucial step in understanding advanced Docker concepts like multi-stage builds and automated builds.",
        certificateUrl: "https://cursos.devtalles.com/certificates/b3dszxwct4",
    },
    {
        title: "NestJS + Microservices: Scalable and Modular Applications",
        provider: "DevTalles",
        date: "May 05, 2025",
        duration: "20.5 Hours",
        technologies: ["Nest", "Docker", "Kubernetes", "GKE", "Helm"],
        description:
            "This course showed me that microservices are ideal for large-scale infrastructures—not always necessary for every system but very interesting to explore.",
        certificateUrl: "https://cursos.devtalles.com/certificates/buqepvjxme",
    },
    {
        title: "Astro: The Framework for Content-Focused Websites",
        provider: "DevTalles",
        date: "May 09, 2025",
        duration: "25.5 Hours",
        technologies: ["Astro"],
        description:
            "I took this course to showcase my projects with a modern web framework. Astro gave me the speed, simplicity, and flexibility I was looking for.",
        certificateUrl: "https://cursos.devtalles.com/certificates/c9iw8igntk",
    },
    {
        title: "OpenAI: Practical Exercises and Assistants with React + NestJS",
        provider: "DevTalles",
        date: "May 11, 2025",
        duration: "10 Hours",
        technologies: ["NestJS", "Open AI API"],
        description:
            "What interested me the most in this course was using an AI API with NestJS. The frontend part didn’t catch my attention but it was interesting to do it.",
        certificateUrl: "https://cursos.devtalles.com/certificates/xddwahomij",
    },
    {
        title: "Mini-Course Zustand: State Management for React",
        provider: "DevTalles",
        date: "May 11, 2025",
        duration: "6 Hours",
        technologies: ["Zustand"],
        description:
            "Curious after using Zustand in React Native, I dove deeper to understand why it’s considered a modern replacement for Redux in many React projects.",
        certificateUrl: "https://cursos.devtalles.com/certificates/hpqsp0cxal",
    },
    {
        title: "React: Real-Time Applications with Socket.io",
        provider: "DevTalles",
        date: "May 12, 2025",
        duration: "16 Hours",
        technologies: ["Socket.io"],
        description:
            "I focused on what I needed from this course: handling websockets and good practices with Socket.io, as the frontend content was not related to websockets and wasn’t what I was looking for.",
        certificateUrl: "https://cursos.devtalles.com/certificates/ercpez6xx8",
    },
];

export default certificates;
