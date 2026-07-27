import type { ProjectCaseStudy } from "@/types/project";

export const projects: ProjectCaseStudy[] = [
  {
    id: 1,
    slug: "ai-smart-application-system",

    title: "AI Smart Application",
    highlightedTitle: "System",

    subtitle:
      "An AI-powered recruitment platform designed to simplify candidate applications, CV analysis and decision-making through secure, role-based digital workflows.",

    categories: ["Full Stack", "AI"],
    statuses: ["Featured", "Completed"],

    theme: "cyan",

    heroImage:
      "/images/projects/ai-smart-application-system/hero.png",

    heroImageAlt:
      "AI Smart Application System recruitment dashboard",

    links: [
      {
        label: "View Repository",
        href: "https://github.com/vahid2104/ai-smart-application-system",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://ai-smart-application-system.vercel.app/",
        type: "live",
      },
    ],

    metrics: [
      {
        value: "3",
        label: "User roles",
        icon: "users",
      },
      {
        value: "Full Stack",
        label: "Application type",
        icon: "layers",
      },
      {
        value: "AI",
        label: "CV analysis",
        icon: "zap",
      },
      {
        value: "Deployed",
        label: "Production workflow",
        icon: "server",
      },
    ],

    overview: {
      eyebrow: "Project overview",

      title: "More than a recruitment dashboard",

      description:
        "The platform connects applicants, reviewers and managers through one centralized system.",

      paragraphs: [
        "AI Smart Application System is a full-stack recruitment platform created to improve how applications are submitted, reviewed and evaluated.",

        "Applicants can create an account, upload their CV and apply through a structured digital process. Reviewers and managers can access candidate information, inspect applications and use AI-generated analysis to support their decisions.",

        "The project was developed as my master's thesis and combines frontend engineering, backend development, database design, authentication, AI integration and cloud deployment.",
      ],

      contributionEyebrow: "My contribution",

      contributionTitle: "End-to-end development",

      contributions: [
        "Product and interface planning",
        "Frontend implementation",
        "Backend REST API development",
        "MongoDB database integration",
        "Authentication and authorization",
        "AI service integration",
        "Frontend and backend deployment",
      ],
    },

    problemSolution: {
      eyebrow: "Problem and solution",

      title: "Turning a slow manual process into a digital workflow",

      description:
        "The product was designed around a practical recruitment problem rather than a collection of disconnected features.",

      problem: {
        title:
          "Candidate evaluation can become fragmented and time-consuming",

        items: [
          "Applications may arrive through different channels",
          "Manual CV evaluation requires significant time",
          "Candidate information can be difficult to organize",
          "Applicants may have limited visibility into their status",
          "Different recruitment roles require different access levels",
        ],
      },

      solution: {
        title:
          "One platform for applications, analysis and decisions",

        items: [
          "Centralized candidate and application management",
          "AI-supported CV analysis and structured insights",
          "Secure role-based dashboards",
          "Clear application status tracking",
          "Protected backend routes and authenticated workflows",
        ],
      },
    },

    features: {
      eyebrow: "Core functionality",

      title: "Features built around real user roles",

      description:
        "Each part of the system supports a specific step of the recruitment workflow.",

      items: [
        {
          title: "Role-Based Authentication",
          description:
            "Secure authentication flow with different permissions and protected experiences for applicants, reviewers and managers.",
          icon: "lock",
        },
        {
          title: "AI-Powered CV Analysis",
          description:
            "Uploaded CVs are analyzed by AI to generate structured insights and support faster candidate evaluation.",
          icon: "zap",
        },
        {
          title: "Application Management",
          description:
            "Managers and reviewers can access applications, inspect candidate information and manage recruitment decisions.",
          icon: "grid",
        },
        {
          title: "CV File Upload",
          description:
            "Applicants can upload their CV and submit the required information through a dedicated application flow.",
          icon: "upload",
        },
        {
          title: "Protected API Routes",
          description:
            "Sensitive backend endpoints are secured through authentication middleware, authorization and request validation.",
          icon: "shield",
        },
        {
          title: "Application Status Tracking",
          description:
            "Applicants can follow the progress of their submissions and view the current application status.",
          icon: "trending",
        },
      ],
    },

    techStack: {
      eyebrow: "Technology stack",

      title: "A complete full-stack architecture",

      description:
        "The stack was selected to support responsive interfaces, secure APIs, scalable data and AI-assisted functionality.",

      groups: [
        {
          title: "Frontend",
          icon: "code",
          technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "React Router",
            "Axios",
          ],
        },
        {
          title: "Backend",
          icon: "server",
          technologies: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "REST API",
            "JWT",
            "bcrypt",
          ],
        },
        {
          title: "Database",
          icon: "database",
          technologies: [
            "MongoDB",
            "MongoDB Atlas",
            "Mongoose",
          ],
        },
        {
          title: "AI & Deployment",
          icon: "zap",
          technologies: [
            "OpenAI API",
            "Prompt Engineering",
            "GitHub",
            "Postman",
            "Render",
            "Vercel",
          ],
        },
      ],
    },

    architecture: {
      eyebrow: "System architecture",

      title: "How the application communicates",

      description:
        "The frontend communicates with a protected backend API, which manages application data and AI service requests.",

      items: [
        {
          title: "User Interface",
          subtitle: "React application",
          icon: "users",
        },
        {
          title: "REST API",
          subtitle: "Node.js and Express",
          icon: "server",
        },
        {
          title: "Database",
          subtitle: "MongoDB Atlas",
          icon: "database",
        },
        {
          title: "AI Service",
          subtitle: "OpenAI integration",
          icon: "zap",
        },
      ],

      note:
        "Authentication middleware validates user sessions before protected operations are completed. Role checks determine whether the user can access applicant, reviewer or manager functionality.",
    },

    challenges: {
      eyebrow: "Engineering challenges",

      title: "What required the most thought",

      description:
        "The most valuable parts of the project were the decisions behind the implementation.",

      items: [
        {
          number: "01",
          title: "Designing role-based access",
          description:
            "The platform needed separate interfaces and permissions for applicants, reviewers and managers. Protected routes and backend authorization rules ensure each role can only access the appropriate actions.",
        },
        {
          number: "02",
          title: "Structuring AI responses",
          description:
            "AI responses had to be useful and predictable rather than unstructured paragraphs. The prompt and response flow were designed to produce structured candidate insights.",
        },
        {
          number: "03",
          title: "Handling authentication securely",
          description:
            "Authentication required password hashing, token creation, protected API endpoints and secure frontend session handling.",
        },
        {
          number: "04",
          title: "Deploying multiple services",
          description:
            "The frontend, backend and cloud database were deployed separately, requiring correct environment variables, CORS settings and production URLs.",
        },
      ],
    },

    learnings: {
      eyebrow: "Key learnings",

      title: "What this project taught me",

      description:
        "The project brought together several areas of software engineering in one end-to-end development process.",

      items: [
        "Designing a complete full-stack application from frontend to deployment",
        "Creating reusable REST API endpoints and backend service layers",
        "Building secure JWT authentication and role-based authorization",
        "Integrating an AI service into a real product workflow",
        "Working with file uploads and CV-related application data",
        "Handling production deployment, environment variables and CORS",
        "Structuring MongoDB collections for users and applications",
        "Transforming an academic idea into a functioning digital product",
      ],
    },

    gallery: {
      eyebrow: "Project gallery",

      title: "A closer look at the product",

      description:
        "Screenshots from the most important dashboards and user flows.",

      images: [
        {
          src: "/images/projects/ai-smart-application-system/gallery/dashboard.png",
          alt: "AI Smart Application System manager dashboard",
          label: "Manager Dashboard",
        },
        {
          src: "/images/projects/ai-smart-application-system/gallery/applications.png",
          alt: "Candidate application management page",
          label: "Application Management",
        },
        {
          src: "/images/projects/ai-smart-application-system/gallery/ai-analysis.png",
          alt: "AI-powered candidate analysis result",
          label: "AI Candidate Analysis",
        },
        {
          src: "/images/projects/ai-smart-application-system/gallery/application-form.png",
          alt: "Applicant submission form",
          label: "Applicant Experience",
        },
      ],
    },

    cta: {
      eyebrow: "Explore more work",

      title: "Interested in how I build complete digital products?",

      description:
        "Explore my other projects or review the source code behind this application.",
    },
  },

  {
    id: 2,
    slug: "lets-speak-law",

    title: "Let's Speak",
    highlightedTitle: "Law",

    subtitle:
      "A social platform created specifically for law students, combining professional networking, educational content and modern social interaction in one community-focused product.",

    categories: ["Frontend", "Startup", "Legal Tech"],
    statuses: ["Startup", "In Development"],

    theme: "violet",

    heroImage: "/images/projects/lets-speak-law/hero.png",

    heroImageAlt:
      "Let's Speak Law social platform landing page",

    links: [
      {
        label: "Visit Landing Page",
        href: "https://letsspeaklaw.com",
        type: "landing",
      },
    ],

    metrics: [
      {
        value: "Startup",
        label: "Product category",
        icon: "zap",
      },
      {
        value: "Law Students",
        label: "Target audience",
        icon: "users",
      },
      {
        value: "Team",
        label: "Development model",
        icon: "userPlus",
      },
      {
        value: "Active",
        label: "Development status",
        icon: "trending",
      },
    ],

    overview: {
      eyebrow: "Project overview",

      title: "A dedicated digital community for law students",

      description:
        "Let's Speak Law brings professional networking, educational content and social interaction into one focused platform.",

      paragraphs: [
        "Let's Speak Law is an early-stage social media startup designed specifically for law students.",

        "The product combines elements of professional networks and modern visual social platforms. Students will be able to build profiles, share legal and educational content, discover other students and participate in a focused legal community.",

        "Unlike general-purpose social networks, the platform is centered around a clearly defined audience and aims to provide both social engagement and professional value.",
      ],

      contributionEyebrow: "My involvement",

      contributionTitle: "Product and development",

      contributions: [
        "Contributing to the startup concept",
        "Planning product features",
        "Frontend and interface development",
        "User experience discussions",
        "Technical decision-making",
        "Working collaboratively with the team",
        "Supporting the product roadmap",
      ],
    },

    story: {
      eyebrow: "Startup story",

      title: "Where law and technology meet",

      description:
        "The project reflects both my original legal education and my current software engineering path.",

      heading:
        "Building something for a community I understand",

      paragraphs: [
        "Before moving into computer science and software development, I completed my bachelor's education in law.",

        "This background helped me understand the challenges law students face when trying to find relevant communities, educational content, professional contacts and opportunities in one place.",

        "Let's Speak Law was created from that intersection: legal domain knowledge combined with software and product development.",
      ],
    },

    problemSolution: {
      eyebrow: "Problem and solution",

      title:
        "Creating a focused alternative to general social platforms",

      description:
        "The product addresses the lack of a dedicated online environment for law students.",

      problem: {
        title:
          "Relevant student communities are often fragmented",

        items: [
          "Legal content is distributed across unrelated platforms",
          "General social networks are not focused on law students",
          "Professional networking platforms can feel overly formal",
          "Useful student discussions can be difficult to discover",
          "Students lack one central environment for connection and growth",
        ],
      },

      solution: {
        title:
          "One social and professional platform built around law students",

        items: [
          "Student profiles with academic and professional information",
          "A focused feed for educational and legal content",
          "Social discovery and networking between law students",
          "Community discussions and knowledge sharing",
          "A modern experience designed for ongoing engagement",
        ],
      },
    },

    principles: {
      eyebrow: "Product principles",

      title: "The ideas guiding the product",

      description:
        "The product direction is based on relevance, community and a balance between professional and social experiences.",

      items: [
        {
          title: "Built for law students",
          description:
            "The platform focuses on the specific needs, interests and communication habits of law students.",
          icon: "target",
        },
        {
          title: "Professional and social",
          description:
            "The experience combines professional networking with modern and engaging social interactions.",
          icon: "users",
        },
        {
          title: "Community-led growth",
          description:
            "The long-term direction depends on useful content, meaningful participation and trusted student communities.",
          icon: "trending",
        },
      ],
    },

    features: {
      eyebrow: "Planned functionality",

      title: "Core features of the platform",

      description:
        "These features represent the primary product direction and may evolve during development.",

      items: [
        {
          title: "Professional Profiles",
          description:
            "Law students can create profiles that reflect their education, interests, achievements and professional development.",
          icon: "users",
        },
        {
          title: "Legal Content Sharing",
          description:
            "Users can publish educational, professional and visual content related to law and university life.",
          icon: "edit",
        },
        {
          title: "Social Networking",
          description:
            "Students can discover and connect with other law students who share similar interests.",
          icon: "userPlus",
        },
        {
          title: "Community Discussions",
          description:
            "The platform is designed to encourage discussions, knowledge exchange and collaboration.",
          icon: "message",
        },
        {
          title: "Content Discovery",
          description:
            "Users can discover relevant posts, people and legal topics through a structured experience.",
          icon: "compass",
        },
        {
          title: "Saved Content",
          description:
            "Useful legal resources, educational posts and discussions can be saved for later access.",
          icon: "bookmark",
        },
      ],
    },

    roadmap: {
      eyebrow: "Product roadmap",

      title: "From concept to an active community",

      description:
        "The startup is being developed gradually, beginning with the core product experience.",

      items: [
        {
          stage: "01",
          title: "Concept and validation",
          status: "Completed",
          description:
            "Define the target audience, product identity and initial value proposition.",
        },
        {
          stage: "02",
          title: "Landing page",
          status: "Completed",
          description:
            "Create the public product presence and communicate the startup concept.",
        },
        {
          stage: "03",
          title: "Core MVP",
          status: "In Development",
          description:
            "Build the main profile, post, connection and social interaction features.",
        },
        {
          stage: "04",
          title: "Community testing",
          status: "Planned",
          description:
            "Collect feedback from early users and improve the product experience.",
        },
      ],
    },

    challenges: {
      eyebrow: "Product challenges",

      title: "What requires the most thought",

      description:
        "Building a startup involves product, user and collaboration challenges in addition to technical implementation.",

      items: [
        {
          number: "01",
          title: "Defining a focused product identity",
          description:
            "The product needed a clear identity built specifically around law students rather than feeling like a generic copy of an existing social network.",
        },
        {
          number: "02",
          title:
            "Balancing professional and social experiences",
          description:
            "The platform needs to remain engaging and modern while maintaining enough professional value for networking and career development.",
        },
        {
          number: "03",
          title: "Planning an expandable feature set",
          description:
            "The MVP needs a focused scope that can gradually expand without making the product unnecessarily complex.",
        },
        {
          number: "04",
          title: "Building a product as a team",
          description:
            "The project requires coordination across ideas, design decisions, technical implementation and long-term product direction.",
        },
      ],
    },

    learnings: {
      eyebrow: "Key learnings",

      title: "What this startup is teaching me",

      description:
        "Let's Speak Law provides experience beyond coding by introducing product, audience and collaboration decisions.",

      items: [
        "Turning a domain-specific idea into a structured digital product",
        "Connecting my legal background with software development",
        "Planning features around a clearly defined target audience",
        "Working collaboratively on an early-stage startup product",
        "Balancing social interaction with professional networking",
        "Thinking beyond implementation toward users and product growth",
        "Designing an MVP that can expand gradually",
        "Communicating an in-development product honestly and professionally",
      ],
    },

    gallery: {
      eyebrow: "Product gallery",

      title: "A closer look at the startup",

      description:
        "Available product designs, landing page screenshots and development previews.",

      images: [
        {
          src: "/images/projects/lets-speak-law/gallery/landing-page.png",
          alt: "Let's Speak Law landing page",
          label: "Landing Page",
        },
        {
          src: "/images/projects/lets-speak-law/gallery/home-feed.png",
          alt: "Let's Speak Law community feed",
          label: "Community Feed",
        },
        {
          src: "/images/projects/lets-speak-law/gallery/profile.png",
          alt: "Let's Speak Law student profile",
          label: "Student Profile",
        },
        {
          src: "/images/projects/lets-speak-law/gallery/mobile.png",
          alt: "Let's Speak Law mobile experience",
          label: "Mobile Experience",
        },
      ],
    },

    cta: {
      eyebrow: "Startup in development",

      title: "Follow the journey of Let's Speak Law",

      description:
        "Visit the landing page to learn more about the product and explore my other software projects.",
    },
  },
    {
    id: 3,
    slug: "v-stream",

    title: "V",
    highlightedTitle: "Stream",

    subtitle:
      "A modern streaming platform for discovering movies and TV series, watching trailers, managing watchlists and exploring personalized entertainment content.",

    categories: ["Frontend", "Next.js"],
    statuses: ["Featured", "Live"],

    theme: "violet",

    heroImage: "/images/projects/v-stream/hero.png",

    heroImageAlt: "V Stream movie streaming platform homepage",

    links: [
      {
        label: "View Repository",
        href: "https://github.com/vahid2104/V_Stream",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://v-stream-liard.vercel.app/",
        type: "live",
      },
    ],

    metrics: [
      {
        value: "Next.js",
        label: "Application framework",
        icon: "code",
      },
      {
        value: "TMDB",
        label: "Movie data source",
        icon: "database",
      },
      {
        value: "Firebase",
        label: "Authentication",
        icon: "lock",
      },
      {
        value: "Responsive",
        label: "User experience",
        icon: "layers",
      },
    ],

    overview: {
      eyebrow: "Project overview",

      title: "A complete entertainment discovery experience",

      description:
        "V Stream combines movie discovery, user authentication and interactive streaming-platform functionality in one responsive application.",

      paragraphs: [
        "V Stream is a modern streaming platform inspired by premium entertainment products and built with Next.js, TypeScript and Tailwind CSS.",

        "The application allows users to explore movies and television series, search for content, view trailers, read details and manage a personal watchlist.",

        "Dynamic entertainment data is provided through the TMDB API, while Firebase is used for authentication and user-related functionality.",
      ],

      contributionEyebrow: "My contribution",

      contributionTitle: "Frontend product development",

      contributions: [
        "Planning the platform structure and user flows",
        "Building the interface with Next.js and TypeScript",
        "Integrating the TMDB API",
        "Implementing Firebase authentication",
        "Creating dynamic movie and TV detail pages",
        "Developing search and trailer functionality",
        "Building responsive layouts for desktop and mobile",
      ],
    },

    problemSolution: {
      eyebrow: "Problem and solution",

      title: "Organizing large amounts of entertainment content",

      description:
        "Streaming-style applications require users to discover relevant content without becoming overwhelmed by large catalogs.",

      problem: {
        title:
          "Entertainment content can become difficult to explore and organize",

        items: [
          "Large catalogs can make discovery difficult",
          "Users need fast access to trailers and content information",
          "Search results must support movies and television series",
          "Personal watchlists require authenticated user data",
          "Interfaces must remain usable across different screen sizes",
        ],
      },

      solution: {
        title:
          "A responsive platform for discovery, previews and personal collections",

        items: [
          "Structured content sections and categories",
          "Dynamic search powered by the TMDB API",
          "Dedicated movie and television detail pages",
          "Trailer playback through external media data",
          "Firebase authentication and personal watchlists",
        ],
      },
    },

    features: {
      eyebrow: "Core functionality",

      title: "Features designed for entertainment discovery",

      description:
        "The platform combines content discovery, account functionality and responsive media experiences.",

      items: [
        {
          title: "Movie and TV Discovery",
          description:
            "Users can explore popular, newly released and featured entertainment content.",
          icon: "compass",
        },
        {
          title: "Dynamic Search",
          description:
            "The navigation search supports movies and television series through TMDB data.",
          icon: "grid",
        },
        {
          title: "Trailer Playback",
          description:
            "Available trailers can be opened directly from the content detail experience.",
          icon: "zap",
        },
        {
          title: "Firebase Authentication",
          description:
            "Users can sign in securely through Google authentication.",
          icon: "lock",
        },
        {
          title: "Personal Watchlist",
          description:
            "Authenticated users can save entertainment content for later.",
          icon: "bookmark",
        },
        {
          title: "Responsive Interface",
          description:
            "The platform adapts across desktop, tablet and mobile screens.",
          icon: "layers",
        },
      ],
    },

    techStack: {
      eyebrow: "Technology stack",

      title: "Built with a modern Next.js frontend stack",

      description:
        "The project combines server-aware frontend development with third-party media and authentication services.",

      groups: [
        {
          title: "Frontend",
          icon: "code",
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
          ],
        },
        {
          title: "Authentication",
          icon: "lock",
          technologies: [
            "Firebase Auth",
            "Google Sign-In",
            "Protected UI",
          ],
        },
        {
          title: "External Data",
          icon: "database",
          technologies: [
            "TMDB API",
            "Search API",
            "Trailer API",
          ],
        },
        {
          title: "Tools",
          icon: "server",
          technologies: [
            "Git",
            "GitHub",
            "Vercel",
            "Turbopack",
          ],
        },
      ],
    },

    architecture: {
      eyebrow: "Application architecture",

      title: "How content reaches the user interface",

      description:
        "Next.js routes communicate with external media services and Firebase to produce dynamic entertainment pages.",

      items: [
        {
          title: "User Interface",
          subtitle: "Next.js application",
          icon: "users",
        },
        {
          title: "API Routes",
          subtitle: "Search and trailer requests",
          icon: "server",
        },
        {
          title: "TMDB",
          subtitle: "Movie and TV data",
          icon: "database",
        },
        {
          title: "Firebase",
          subtitle: "Authentication and user data",
          icon: "lock",
        },
      ],

      note:
        "Next.js dynamic routes generate content detail pages, while dedicated API routes handle search and trailer requests without exposing unnecessary implementation details to the interface.",
    },

    challenges: {
      eyebrow: "Engineering challenges",

      title: "What required the most attention",

      description:
        "The project involved dynamic routing, external API integration and responsive streaming-style layouts.",

      items: [
        {
          number: "01",
          title: "Handling multiple media types",
          description:
            "Movies and television series use different TMDB endpoints and data structures, so the application needed a consistent interface for both.",
        },
        {
          number: "02",
          title: "Building dynamic detail routes",
          description:
            "Each content item required a reusable detail page based on its media type and unique identifier.",
        },
        {
          number: "03",
          title: "Managing unavailable trailers",
          description:
            "Some content has no valid trailer, requiring a clear fallback experience instead of broken playback.",
        },
        {
          number: "04",
          title: "Maintaining responsive layouts",
          description:
            "Dense media sections, navigation and cards needed to remain usable across large and small screens.",
        },
      ],
    },

    learnings: {
      eyebrow: "Key learnings",

      title: "What V Stream taught me",

      description:
        "The project strengthened my ability to build polished frontend products around external services.",

      items: [
        "Building dynamic applications with Next.js App Router",
        "Working with third-party entertainment APIs",
        "Creating reusable components for media content",
        "Implementing Firebase Google authentication",
        "Handling dynamic routes with multiple content types",
        "Designing responsive streaming-platform interfaces",
        "Creating API routes for search and trailer functionality",
        "Managing empty and unavailable external API responses",
      ],
    },

    gallery: {
      eyebrow: "Project gallery",

      title: "A closer look at V Stream",

      description:
        "Screenshots from the homepage, content detail and responsive user experience.",

      images: [
        {
          src: "/images/projects/v-stream/gallery/homepage.png",
          alt: "V Stream homepage",
          label: "Streaming Homepage",
        },
        {
          src: "/images/projects/v-stream/gallery/details.png",
          alt: "V Stream movie details page",
          label: "Content Details",
        },
        {
          src: "/images/projects/v-stream/gallery/search.png",
          alt: "V Stream search experience",
          label: "Content Search",
        },
        {
          src: "/images/projects/v-stream/gallery/authentication.png",
          alt: "V Stream login interface",
          label: "Authentication",
        },
      ],
    },

    cta: {
      eyebrow: "Explore the platform",

      title: "Discover the complete V Stream experience",

      description:
        "Open the live application, review its source code or explore my other software projects.",
    },
  },

  {
    id: 4,
    slug: "real-time-data-visualization-dashboard",

    title: "Real-Time Data",
    highlightedTitle: "Dashboard",

    subtitle:
      "A full-stack monitoring dashboard that displays continuously changing data through WebSockets, interactive charts, authentication and real-time alerts.",

    categories: ["Full Stack", "Dashboard"],
    statuses: ["Featured", "Real-Time"],

    theme: "cyan",

    heroImage:
      "/images/projects/real-time-data-visualization-dashboard/hero.png",

    heroImageAlt:
      "Real-Time Data Visualization monitoring dashboard",

    links: [
      {
        label: "View Repository",
        href: "https://github.com/vahid2104/Real-Time-Data-Visualization-Dashboard",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://real-time-data-visualization-dashbo.vercel.app/",
        type: "live",
      },
    ],

    metrics: [
      {
        value: "WebSockets",
        label: "Real-time communication",
        icon: "zap",
      },
      {
        value: "Full Stack",
        label: "Application type",
        icon: "layers",
      },
      {
        value: "Recharts",
        label: "Data visualization",
        icon: "trending",
      },
      {
        value: "Team",
        label: "Development model",
        icon: "users",
      },
    ],

    overview: {
      eyebrow: "Project overview",

      title: "Live operational data in one dashboard",

      description:
        "The dashboard provides continuously updating metrics, visualizations and alerts through a real-time client-server connection.",

      paragraphs: [
        "Real-Time Data Visualization Dashboard is a full-stack monitoring application built to display live operational data through interactive charts and KPI cards.",

        "The frontend receives updates from the backend through Socket.IO, allowing users to see data changes without refreshing the page.",

        "The project was developed collaboratively. My primary contribution focused on the frontend interface and real-time data presentation, while backend responsibilities were shared within the team.",
      ],

      contributionEyebrow: "My contribution",

      contributionTitle: "Frontend and real-time experience",

      contributions: [
        "Building the dashboard user interface",
        "Creating interactive chart components",
        "Connecting frontend components to Socket.IO events",
        "Displaying real-time KPI updates",
        "Implementing connection status indicators",
        "Creating alert and notification interfaces",
        "Supporting integration with the backend team",
      ],
    },

    problemSolution: {
      eyebrow: "Problem and solution",

      title: "Making changing data immediately understandable",

      description:
        "Operational dashboards must present fast-changing information without forcing users to refresh the page.",

      problem: {
        title:
          "Traditional dashboards can display outdated information",

        items: [
          "Manual refreshes interrupt monitoring workflows",
          "Changing metrics can be difficult to notice",
          "Large datasets need clear visual organization",
          "Users need immediate alerts for important events",
          "Connection failures must be visible to the user",
        ],
      },

      solution: {
        title:
          "A WebSocket-powered interface with live visual feedback",

        items: [
          "Continuous updates through Socket.IO",
          "Interactive Recharts visualizations",
          "Live KPI cards and metric changes",
          "Real-time alert notifications",
          "Visible server connection status",
        ],
      },
    },

    features: {
      eyebrow: "Core functionality",

      title: "Features built for real-time monitoring",

      description:
        "The platform transforms incoming data into a clear and responsive monitoring experience.",

      items: [
        {
          title: "Live Data Updates",
          description:
            "Dashboard values update automatically through an active WebSocket connection.",
          icon: "zap",
        },
        {
          title: "Interactive Charts",
          description:
            "Recharts components display trends and changing values through visual graphs.",
          icon: "trending",
        },
        {
          title: "KPI Cards",
          description:
            "Important metrics are summarized through readable dashboard cards.",
          icon: "grid",
        },
        {
          title: "Real-Time Alerts",
          description:
            "Important system events can be surfaced immediately through alert components.",
          icon: "message",
        },
        {
          title: "Authentication Flow",
          description:
            "Protected dashboard access is supported through an authentication workflow.",
          icon: "lock",
        },
        {
          title: "Connection Status",
          description:
            "Users can see whether the client is connected to the real-time server.",
          icon: "server",
        },
      ],
    },

    techStack: {
      eyebrow: "Technology stack",

      title: "A WebSocket-enabled full-stack architecture",

      description:
        "The project combines a typed React frontend with a Node.js real-time backend.",

      groups: [
        {
          title: "Frontend",
          icon: "code",
          technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Recharts",
          ],
        },
        {
          title: "Backend",
          icon: "server",
          technologies: [
            "Node.js",
            "Express.js",
            "Socket.IO",
            "REST API",
          ],
        },
        {
          title: "Database",
          icon: "database",
          technologies: ["MongoDB", "Mongoose"],
        },
        {
          title: "Testing & Tools",
          icon: "shield",
          technologies: [
            "Vitest",
            "Supertest",
            "Git",
            "GitHub",
          ],
        },
      ],
    },

    architecture: {
      eyebrow: "System architecture",

      title: "How real-time updates move through the system",

      description:
        "The backend emits events through Socket.IO and the frontend transforms those events into visual dashboard updates.",

      items: [
        {
          title: "Data Source",
          subtitle: "Generated operational events",
          icon: "database",
        },
        {
          title: "Backend Server",
          subtitle: "Express and Socket.IO",
          icon: "server",
        },
        {
          title: "WebSocket",
          subtitle: "Live event delivery",
          icon: "zap",
        },
        {
          title: "Dashboard",
          subtitle: "React and Recharts",
          icon: "trending",
        },
      ],

      note:
        "Socket.IO maintains a persistent connection between the frontend and backend, allowing new data to update the interface immediately without polling or page refreshes.",
    },

    challenges: {
      eyebrow: "Engineering challenges",

      title: "What required the most thought",

      description:
        "Real-time systems introduce timing, connection and interface challenges beyond traditional request-response applications.",

      items: [
        {
          number: "01",
          title: "Managing continuous state updates",
          description:
            "Incoming WebSocket events needed to update charts and KPI cards without creating unnecessary rendering problems.",
        },
        {
          number: "02",
          title: "Visualizing fast-changing data",
          description:
            "The interface needed to remain readable even while values changed continuously.",
        },
        {
          number: "03",
          title: "Handling connection states",
          description:
            "Users needed clear feedback when the real-time connection was active, interrupted or unavailable.",
        },
        {
          number: "04",
          title: "Collaborating across frontend and backend",
          description:
            "Socket event names and payload structures needed to remain consistent between team members.",
        },
      ],
    },

    learnings: {
      eyebrow: "Key learnings",

      title: "What the real-time dashboard taught me",

      description:
        "The project strengthened my understanding of event-driven full-stack applications.",

      items: [
        "Integrating Socket.IO with React applications",
        "Updating charts from continuous event streams",
        "Building responsive data visualization dashboards",
        "Handling WebSocket connection lifecycle states",
        "Collaborating across frontend and backend responsibilities",
        "Designing reusable KPI and chart components",
        "Testing Node.js API endpoints",
        "Presenting real-time data without overwhelming users",
      ],
    },

    gallery: {
      eyebrow: "Project gallery",

      title: "A closer look at the dashboard",

      description:
        "Screenshots of live charts, KPI metrics, alerts and monitoring states.",

      images: [
        {
          src: "/images/projects/real-time-data-visualization-dashboard/gallery/dashboard.png",
          alt: "Real-time dashboard overview",
          label: "Dashboard Overview",
        },
        {
          src: "/images/projects/real-time-data-visualization-dashboard/gallery/analytics.png",
          alt: "Real-time dashboard analytics",
          label: "Live Analytics",
        },
        {
          src: "/images/projects/real-time-data-visualization-dashboard/gallery/alerts.png",
          alt: "Real-time dashboard alerts",
          label: "System Alerts",
        },
        {
          src: "/images/projects/real-time-data-visualization-dashboard/gallery/settings.png",
          alt: "Real-time dashboard settings",
          label: "Settings",
        },
      ],
    },

    cta: {
      eyebrow: "Explore the system",

      title: "See how live data becomes a usable interface",

      description:
        "Review the source code, open the deployed dashboard or explore my other full-stack projects.",
    },
  },

  {
    id: 5,
    slug: "ai-code-review-app",

    title: "AI Code Review",
    highlightedTitle: "App",

    subtitle:
      "A full-stack developer tool that analyzes source code and provides structured AI-generated feedback, improvement suggestions and review history.",

    categories: ["Full Stack", "AI"],
    statuses: ["Featured", "Live"],

    theme: "violet",

    heroImage: "/images/projects/ai-code-review-app/hero.png",

    heroImageAlt: "AI Code Review App dashboard",

    links: [
      {
        label: "View Repository",
        href: "https://github.com/vahid2104/AI_Code_Review_App",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://ai-code-review-app-sigma.vercel.app/",
        type: "live",
      },
    ],

    metrics: [
      {
        value: "AI",
        label: "Code analysis",
        icon: "zap",
      },
      {
        value: "Full Stack",
        label: "Application type",
        icon: "layers",
      },
      {
        value: "JWT",
        label: "Authentication",
        icon: "lock",
      },
      {
        value: "10",
        label: "Free AI reviews",
        icon: "code",
      },
    ],

    overview: {
      eyebrow: "Project overview",

      title: "An AI assistant for reviewing source code",

      description:
        "The product helps developers identify code issues and improvement opportunities through structured AI feedback.",

      paragraphs: [
        "AI Code Review App is a full-stack developer tool that allows users to submit source code and receive AI-generated review feedback.",

        "The application organizes feedback into a readable interface and stores previous reviews so users can return to earlier results.",

        "It includes authentication, usage limits, review history, account settings and a structured backend service connected to an AI provider.",
      ],

      contributionEyebrow: "My contribution",

      contributionTitle: "Full product implementation",

      contributions: [
        "Designing the dashboard and review experience",
        "Building the React and TypeScript frontend",
        "Creating Node.js and Express backend endpoints",
        "Implementing JWT authentication",
        "Integrating the OpenAI API",
        "Adding usage-limit logic",
        "Deploying frontend and backend services",
      ],
    },

    problemSolution: {
      eyebrow: "Problem and solution",

      title: "Making code feedback faster and easier to understand",

      description:
        "Developers often need a second perspective on code quality, structure and maintainability.",

      problem: {
        title:
          "Manual code review can be slow and unavailable for individual developers",

        items: [
          "Developers may not always have an available reviewer",
          "Small issues can be overlooked during implementation",
          "Unstructured feedback can be difficult to act on",
          "Previous reviews may become difficult to track",
          "AI usage requires limits and error handling",
        ],
      },

      solution: {
        title:
          "A structured AI review workflow with saved history",

        items: [
          "Code submission through a dedicated review interface",
          "AI-generated feedback and improvement suggestions",
          "Authenticated user accounts",
          "Saved review history",
          "Usage tracking and free-review limits",
        ],
      },
    },

    features: {
      eyebrow: "Core functionality",

      title: "Features designed for developer productivity",

      description:
        "The product combines AI analysis with account and history management.",

      items: [
        {
          title: "AI Code Analysis",
          description:
            "Submitted code is analyzed and returned with structured feedback.",
          icon: "zap",
        },
        {
          title: "Secure Authentication",
          description:
            "Users can register and sign in through a JWT-based authentication flow.",
          icon: "lock",
        },
        {
          title: "Review History",
          description:
            "Previous AI reviews are stored and available through the user dashboard.",
          icon: "bookmark",
        },
        {
          title: "Usage Limits",
          description:
            "Free users receive a limited number of AI-powered reviews.",
          icon: "shield",
        },
        {
          title: "Settings and Upgrade",
          description:
            "Dedicated pages support account settings and future subscription plans.",
          icon: "grid",
        },
        {
          title: "Responsive Dashboard",
          description:
            "The application remains usable across desktop and smaller screens.",
          icon: "layers",
        },
      ],
    },

    techStack: {
      eyebrow: "Technology stack",

      title: "A secure AI-enabled full-stack application",

      description:
        "The stack connects a responsive frontend with authenticated APIs and an external AI service.",

      groups: [
        {
          title: "Frontend",
          icon: "code",
          technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
          ],
        },
        {
          title: "Backend",
          icon: "server",
          technologies: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "REST API",
          ],
        },
        {
          title: "Database & Auth",
          icon: "database",
          technologies: [
            "MongoDB Atlas",
            "Mongoose",
            "JWT",
            "bcrypt",
          ],
        },
        {
          title: "AI & Deployment",
          icon: "zap",
          technologies: [
            "OpenAI API",
            "Prompt Engineering",
            "Render",
            "Vercel",
          ],
        },
      ],
    },

    architecture: {
      eyebrow: "System architecture",

      title: "How a code review request is processed",

      description:
        "Authenticated review requests move through the backend before being sent to the AI service.",

      items: [
        {
          title: "Code Editor",
          subtitle: "User review request",
          icon: "code",
        },
        {
          title: "Backend API",
          subtitle: "Validation and limits",
          icon: "server",
        },
        {
          title: "AI Service",
          subtitle: "Code analysis",
          icon: "zap",
        },
        {
          title: "Review History",
          subtitle: "MongoDB storage",
          icon: "database",
        },
      ],

      note:
        "The backend verifies the user, checks the remaining review allowance, sends the code to the AI service and stores the resulting feedback for later access.",
    },

    challenges: {
      eyebrow: "Engineering challenges",

      title: "What required the most attention",

      description:
        "AI integrations require predictable prompts, reliable responses and clear fallback behavior.",

      items: [
        {
          number: "01",
          title: "Producing structured AI feedback",
          description:
            "The prompt needed to return useful review sections instead of unpredictable free-form text.",
        },
        {
          number: "02",
          title: "Tracking free usage limits",
          description:
            "The backend needed to associate AI usage with authenticated users and prevent unlimited free requests.",
        },
        {
          number: "03",
          title: "Handling AI failures",
          description:
            "The interface needed appropriate error states when the AI service was unavailable or returned an invalid response.",
        },
        {
          number: "04",
          title: "Securing review history",
          description:
            "Users must only be able to access reviews associated with their own accounts.",
        },
      ],
    },

    learnings: {
      eyebrow: "Key learnings",

      title: "What the AI Code Review App taught me",

      description:
        "The project strengthened my ability to integrate AI into a user-facing full-stack product.",

      items: [
        "Designing prompts for structured technical feedback",
        "Integrating an external AI API with Node.js",
        "Building authenticated full-stack workflows",
        "Tracking usage limits in a database",
        "Creating review history and account pages",
        "Handling AI response and network errors",
        "Separating frontend, backend and service responsibilities",
        "Deploying an AI-enabled application",
      ],
    },

    gallery: {
      eyebrow: "Project gallery",

      title: "A closer look at the review workflow",

      description:
        "Screenshots from the dashboard, code submission and AI feedback experience.",

      images: [
        {
          src: "/images/projects/ai-code-review-app/gallery/dashboard.png",
          alt: "AI Code Review dashboard",
          label: "Dashboard",
        },
        {
          src: "/images/projects/ai-code-review-app/gallery/new-review.png",
          alt: "AI Code Review submission page",
          label: "New Review",
        },
        {
          src: "/images/projects/ai-code-review-app/gallery/result.png",
          alt: "AI-generated code review result",
          label: "AI Feedback",
        },
        {
          src: "/images/projects/ai-code-review-app/gallery/history.png",
          alt: "AI Code Review history page",
          label: "Review History",
        },
      ],
    },

    cta: {
      eyebrow: "Explore the application",

      title: "See how AI can support developer workflows",

      description:
        "Try the deployed product, inspect the repository or explore my other AI projects.",
    },
  },

  {
    id: 6,
    slug: "tech-store",

    title: "Tech",
    highlightedTitle: "Store",

    subtitle:
      "A responsive e-commerce frontend with authentication, advanced product filtering, cart management and a complete simulated checkout experience.",

    categories: ["Frontend"],
    statuses: ["Live"],

    theme: "cyan",

    heroImage: "/images/projects/tech-store/hero.png",

    heroImageAlt: "Tech Store e-commerce homepage",

    links: [
      {
        label: "View Repository",
        href: "https://github.com/vahid2104/Tech_Store",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://vahid2104.github.io/Tech_Store/",
        type: "live",
      },
    ],

    metrics: [
      {
        value: "React 19",
        label: "Frontend library",
        icon: "code",
      },
      {
        value: "Firebase",
        label: "Authentication",
        icon: "lock",
      },
      {
        value: "E-commerce",
        label: "Product type",
        icon: "grid",
      },
      {
        value: "Responsive",
        label: "Interface design",
        icon: "layers",
      },
    ],

    overview: {
      eyebrow: "Project overview",

      title: "A complete frontend shopping experience",

      description:
        "Tech Store demonstrates the main user flows expected from a modern e-commerce interface.",

      paragraphs: [
        "Tech Store is a responsive electronics e-commerce application built with React, TypeScript and Vite.",

        "Users can browse products, search by name, filter by category, price and rating, sort results and inspect individual product pages.",

        "The application also includes Firebase authentication, shopping cart functionality, account pages and a simulated checkout flow.",
      ],

      contributionEyebrow: "My contribution",

      contributionTitle: "Complete frontend development",

      contributions: [
        "Building the application structure",
        "Creating reusable product components",
        "Implementing search and advanced filtering",
        "Developing shopping cart functionality",
        "Integrating Firebase authentication",
        "Creating form validation with Formik and Yup",
        "Configuring GitHub Actions deployment",
      ],
    },

    problemSolution: {
      eyebrow: "Problem and solution",

      title: "Helping users navigate a large product catalog",

      description:
        "E-commerce interfaces must make product discovery, comparison and purchasing straightforward.",

      problem: {
        title:
          "Product catalogs become difficult to explore without strong filtering tools",

        items: [
          "Users need fast product search",
          "Multiple filters must work together",
          "Cart state must remain consistent",
          "Authentication forms need clear validation",
          "Checkout flows must guide the user step by step",
        ],
      },

      solution: {
        title:
          "A structured storefront with filters, cart and account functionality",

        items: [
          "Search by product name",
          "Category, price and rating filters",
          "Multiple sorting options",
          "Persistent shopping cart interface",
          "Validated login, registration and checkout forms",
        ],
      },
    },

    features: {
      eyebrow: "Core functionality",

      title: "Features built around the shopping journey",

      description:
        "The application covers discovery, authentication, cart and checkout interactions.",

      items: [
        {
          title: "Product Search",
          description:
            "Users can quickly search the available electronics catalog.",
          icon: "compass",
        },
        {
          title: "Advanced Filtering",
          description:
            "Products can be filtered by category, price and rating.",
          icon: "grid",
        },
        {
          title: "Sorting Options",
          description:
            "Results can be reordered based on price and other properties.",
          icon: "trending",
        },
        {
          title: "Shopping Cart",
          description:
            "Users can add, remove and manage quantities before checkout.",
          icon: "bookmark",
        },
        {
          title: "Firebase Authentication",
          description:
            "The platform supports account registration and Google sign-in.",
          icon: "lock",
        },
        {
          title: "Validated Checkout",
          description:
            "Formik and Yup provide structured form handling and validation.",
          icon: "shield",
        },
      ],
    },

    techStack: {
      eyebrow: "Technology stack",

      title: "A strongly typed e-commerce frontend",

      description:
        "The project combines reusable React components with authentication and form-management services.",

      groups: [
        {
          title: "Frontend",
          icon: "code",
          technologies: [
            "React 19",
            "TypeScript",
            "Vite",
            "React Router",
          ],
        },
        {
          title: "Authentication",
          icon: "lock",
          technologies: [
            "Firebase Auth",
            "Google Sign-In",
          ],
        },
        {
          title: "Forms",
          icon: "edit",
          technologies: ["Formik", "Yup"],
        },
        {
          title: "Deployment",
          icon: "server",
          technologies: [
            "GitHub Pages",
            "GitHub Actions",
            "Git",
          ],
        },
      ],
    },

    challenges: {
      eyebrow: "Engineering challenges",

      title: "What required the most attention",

      description:
        "Complex filtering and cart interactions required predictable state and reusable components.",

      items: [
        {
          number: "01",
          title: "Combining multiple filters",
          description:
            "Category, price, rating, search and sorting needed to work together without producing inconsistent results.",
        },
        {
          number: "02",
          title: "Managing cart state",
          description:
            "Adding, removing and changing product quantities required clear and predictable state updates.",
        },
        {
          number: "03",
          title: "Validating multiple forms",
          description:
            "Login, registration and checkout forms needed reusable validation rules and readable error feedback.",
        },
        {
          number: "04",
          title: "Deploying a routed SPA",
          description:
            "GitHub Pages required deployment configuration compatible with client-side routing.",
        },
      ],
    },

    learnings: {
      eyebrow: "Key learnings",

      title: "What Tech Store taught me",

      description:
        "The project strengthened my practical frontend and e-commerce development skills.",

      items: [
        "Building reusable React and TypeScript components",
        "Combining search, filters and sorting",
        "Managing shopping cart state",
        "Integrating Firebase authentication",
        "Creating validated forms with Formik and Yup",
        "Building responsive product grids",
        "Creating simulated checkout flows",
        "Deploying through GitHub Actions",
      ],
    },

    gallery: {
      eyebrow: "Project gallery",

      title: "A closer look at the storefront",

      description:
        "Screenshots from the product catalog, detail, cart and checkout experiences.",

      images: [
        {
          src: "/images/projects/tech-store/gallery/products.png",
          alt: "Tech Store product listing",
          label: "Product Catalog",
        },
        {
          src: "/images/projects/tech-store/gallery/product-details.png",
          alt: "Tech Store product details",
          label: "Product Details",
        },
        {
          src: "/images/projects/tech-store/gallery/cart.png",
          alt: "Tech Store shopping cart",
          label: "Shopping Cart",
        },
        {
          src: "/images/projects/tech-store/gallery/checkout.png",
          alt: "Tech Store checkout page",
          label: "Checkout Flow",
        },
      ],
    },

    cta: {
      eyebrow: "Explore the storefront",

      title: "Experience the complete Tech Store journey",

      description:
        "Open the live storefront, inspect its source code or explore my other frontend projects.",
    },
  },

  {
    id: 7,
    slug: "warsaw-beauty-salon-explorer",

    title: "Warsaw Beauty Salon",
    highlightedTitle: "Explorer",

    subtitle:
      "A Next.js discovery platform featuring real Warsaw beauty salons, detailed business information, category filters and administrative editing tools.",

    categories: ["Frontend", "Next.js"],
    statuses: ["Completed"],

    theme: "violet",

    heroImage:
      "/images/projects/warsaw-beauty-salon-explorer/hero.png",

    heroImageAlt:
      "Warsaw Beauty Salon Explorer listing page",

    links: [
      {
        label: "View Repository",
        href: "https://github.com/vahid2104/warsaw_beauty_salon_explorer",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://warsaw-beauty-salon-explorer-delta.vercel.app/",
        type: "live",
      },
    ],

    metrics: [
      {
        value: "100",
        label: "Real salons",
        icon: "database",
      },
      {
        value: "Next.js",
        label: "Application framework",
        icon: "code",
      },
      {
        value: "Warsaw",
        label: "Local discovery",
        icon: "compass",
      },
      {
        value: "Admin",
        label: "Editing interface",
        icon: "edit",
      },
    ],

    overview: {
      eyebrow: "Project overview",

      title: "A local discovery platform built around real businesses",

      description:
        "The application helps users explore beauty salons across Warsaw through structured business data.",

      paragraphs: [
        "Warsaw Beauty Salon Explorer is a Next.js application created as part of an internship task.",

        "The platform includes information for 100 real salons, including addresses, Warsaw districts, service categories, ratings, contact details, websites, opening hours and images.",

        "Users can browse salon listings, apply filters and open detailed salon pages, while an administrative interface supports editing business information.",
      ],

      contributionEyebrow: "My contribution",

      contributionTitle: "Frontend and data implementation",

      contributions: [
        "Collecting and structuring salon data",
        "Building the salon listing interface",
        "Creating filter and discovery functionality",
        "Developing dynamic detail pages",
        "Creating edit and administration views",
        "Designing responsive salon cards",
        "Organizing real business information",
      ],
    },

    problemSolution: {
      eyebrow: "Problem and solution",

      title: "Making local salon discovery easier",

      description:
        "Business information is often distributed across maps, social media pages and individual websites.",

      problem: {
        title:
          "Users lack one structured place to compare Warsaw salons",

        items: [
          "Salon information exists across multiple sources",
          "Service categories are difficult to compare",
          "Opening hours and contact details may be inconsistent",
          "Users need district-based discovery",
          "Business data requires maintainable editing tools",
        ],
      },

      solution: {
        title:
          "A searchable directory with complete salon profiles",

        items: [
          "Centralized information for 100 real salons",
          "District and category filtering",
          "Detailed salon profile pages",
          "Contact, rating and opening-hours information",
          "Administrative editing interface",
        ],
      },
    },

    features: {
      eyebrow: "Core functionality",

      title: "Features designed for local discovery",

      description:
        "The platform combines directory browsing, business details and administration tools.",

      items: [
        {
          title: "Salon Directory",
          description:
            "Users can browse a structured list of Warsaw beauty salons.",
          icon: "grid",
        },
        {
          title: "District Filtering",
          description:
            "Salons can be explored based on Warsaw districts.",
          icon: "compass",
        },
        {
          title: "Service Categories",
          description:
            "Businesses are grouped by the services they provide.",
          icon: "layers",
        },
        {
          title: "Detailed Profiles",
          description:
            "Each salon includes contact, rating, website and opening-hours information.",
          icon: "database",
        },
        {
          title: "Administrative Editing",
          description:
            "Salon information can be updated through a dedicated edit interface.",
          icon: "edit",
        },
        {
          title: "Responsive Design",
          description:
            "The discovery experience adapts across desktop and mobile screens.",
          icon: "users",
        },
      ],
    },

    techStack: {
      eyebrow: "Technology stack",

      title: "A structured Next.js discovery application",

      description:
        "The project uses typed frontend components and organized local business data.",

      groups: [
        {
          title: "Frontend",
          icon: "code",
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
          ],
        },
        {
          title: "Routing",
          icon: "compass",
          technologies: [
            "App Router",
            "Dynamic Routes",
            "Detail Pages",
          ],
        },
        {
          title: "Data",
          icon: "database",
          technologies: [
            "Structured JSON",
            "100 Real Salons",
            "Business Metadata",
          ],
        },
        {
          title: "Tools",
          icon: "server",
          technologies: ["Git", "GitHub", "Vercel"],
        },
      ],
    },

    challenges: {
      eyebrow: "Engineering challenges",

      title: "What required the most attention",

      description:
        "Working with real business data introduced consistency and interface-design challenges.",

      items: [
        {
          number: "01",
          title: "Structuring real business data",
          description:
            "Salon records contained different types of contact, location and service information that needed a consistent format.",
        },
        {
          number: "02",
          title: "Creating useful filters",
          description:
            "District and service filters needed to remain simple while supporting meaningful discovery.",
        },
        {
          number: "03",
          title: "Designing reusable detail pages",
          description:
            "The same component structure needed to present complete information for many different salons.",
        },
        {
          number: "04",
          title: "Supporting editable information",
          description:
            "Administrative views needed to make complex salon data manageable.",
        },
      ],
    },

    learnings: {
      eyebrow: "Key learnings",

      title: "What the salon explorer taught me",

      description:
        "The project strengthened my experience with real datasets and directory-style interfaces.",

      items: [
        "Structuring inconsistent real-world business data",
        "Building reusable directory and detail components",
        "Creating dynamic routes in Next.js",
        "Designing category and district filters",
        "Developing responsive business cards",
        "Creating basic administrative editing flows",
        "Organizing large local datasets",
        "Building a product around a specific city and audience",
      ],
    },

    gallery: {
      eyebrow: "Project gallery",

      title: "A closer look at salon discovery",

      description:
        "Screenshots from the listing, filtering, detail and editing experiences.",

      images: [
        {
          src: "/images/projects/warsaw-beauty-salon-explorer/gallery/listing.png",
          alt: "Warsaw salon listing page",
          label: "Salon Directory",
        },
        {
          src: "/images/projects/warsaw-beauty-salon-explorer/gallery/filters.png",
          alt: "Warsaw salon filtering interface",
          label: "Discovery Filters",
        },
        {
          src: "/images/projects/warsaw-beauty-salon-explorer/gallery/details.png",
          alt: "Warsaw salon detail page",
          label: "Salon Details",
        },
        {
          src: "/images/projects/warsaw-beauty-salon-explorer/gallery/edit.png",
          alt: "Warsaw salon edit page",
          label: "Admin Editing",
        },
      ],
    },

    cta: {
      eyebrow: "Explore the directory",

      title: "Discover how real business data became a usable product",

      description:
        "Review the source code, open the application or explore my other Next.js projects.",
    },
  },

  {
    id: 8,
    slug: "routine-management-app",

    title: "Routine Management",
    highlightedTitle: "App",

    subtitle:
      "A full-stack productivity application for creating projects, organizing tasks and managing personal workflows through a structured dashboard.",

    categories: ["Full Stack"],
    statuses: ["GitHub Only", "In Development"],

    theme: "cyan",

    heroImage:
      "/images/projects/routine-management-app/hero.png",

    heroImageAlt: "Routine Management project dashboard",

    links: [
      {
        label: "View Repository",
        href: "https://github.com/vahid2104/Routine_Management_App_64284_65971_64520",
        type: "github",
      },
    ],

    metrics: [
      {
        value: "Full Stack",
        label: "Application type",
        icon: "layers",
      },
      {
        value: "MongoDB",
        label: "Database",
        icon: "database",
      },
      {
        value: "Projects",
        label: "Workflow structure",
        icon: "grid",
      },
      {
        value: "Improving",
        label: "Development status",
        icon: "trending",
      },
    ],

    overview: {
      eyebrow: "Project overview",

      title: "A dashboard for projects and daily tasks",

      description:
        "The application provides a simple structure for organizing projects, tasks and personal routines.",

      paragraphs: [
        "Routine Management App is a full-stack productivity project built with React, Node.js, Express and MongoDB.",

        "Users can create projects, add tasks and organize their work through a dashboard-based interface.",

        "The project is currently being improved. Some existing bugs and missing functionality will be addressed before a future deployment.",
      ],

      contributionEyebrow: "My contribution",

      contributionTitle: "Full-stack implementation",

      contributions: [
        "Building the React user interface",
        "Creating project and task components",
        "Developing Express API endpoints",
        "Connecting the application to MongoDB",
        "Implementing project creation and deletion",
        "Structuring frontend and backend folders",
        "Planning future workflow improvements",
      ],
    },

    problemSolution: {
      eyebrow: "Problem and solution",

      title: "Organizing tasks around meaningful projects",

      description:
        "Simple task lists can become difficult to manage when tasks belong to different areas of work.",

      problem: {
        title:
          "Unstructured task lists make larger workflows difficult to follow",

        items: [
          "Tasks may belong to different projects",
          "Users need a clear overview of active work",
          "Project information must remain organized",
          "Backend and frontend state must stay synchronized",
          "Productivity tools need simple interactions",
        ],
      },

      solution: {
        title:
          "A project-based dashboard for task organization",

        items: [
          "Project creation and deletion",
          "Task organization within projects",
          "Central productivity dashboard",
          "MongoDB data persistence",
          "Expandable structure for future features",
        ],
      },
    },

    features: {
      eyebrow: "Current functionality",

      title: "Core productivity features",

      description:
        "The current version focuses on the basic project and task management workflow.",

      items: [
        {
          title: "Project Creation",
          description:
            "Users can create separate projects for different areas of work.",
          icon: "grid",
        },
        {
          title: "Task Organization",
          description:
            "Tasks can be structured within project-based workflows.",
          icon: "layers",
        },
        {
          title: "Project Deletion",
          description:
            "Unused projects can be removed from the dashboard.",
          icon: "shield",
        },
        {
          title: "MongoDB Persistence",
          description:
            "Project and task data is stored through a backend database.",
          icon: "database",
        },
        {
          title: "REST API",
          description:
            "The React frontend communicates with an Express backend.",
          icon: "server",
        },
        {
          title: "Future Expansion",
          description:
            "The structure supports future editing, analytics and drag-and-drop features.",
          icon: "trending",
        },
      ],
    },

    techStack: {
      eyebrow: "Technology stack",

      title: "A traditional MERN-style full-stack application",

      description:
        "The project combines a React frontend with an Express API and MongoDB persistence.",

      groups: [
        {
          title: "Frontend",
          icon: "code",
          technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
          ],
        },
        {
          title: "Backend",
          icon: "server",
          technologies: [
            "Node.js",
            "Express.js",
            "REST API",
          ],
        },
        {
          title: "Database",
          icon: "database",
          technologies: ["MongoDB", "Mongoose"],
        },
        {
          title: "Planned",
          icon: "trending",
          technologies: [
            "Improved Auth",
            "Editing",
            "Drag and Drop",
            "Analytics",
          ],
        },
      ],
    },

    roadmap: {
      eyebrow: "Improvement roadmap",

      title: "Preparing the application for deployment",

      description:
        "The project will be improved before being promoted as a finished portfolio product.",

      items: [
        {
          stage: "01",
          title: "Core project workflow",
          status: "Completed",
          description:
            "Create, display and remove project records.",
        },
        {
          stage: "02",
          title: "Bug fixing",
          status: "In Development",
          description:
            "Resolve current frontend and backend issues.",
        },
        {
          stage: "03",
          title: "Feature improvements",
          status: "Planned",
          description:
            "Add editing, drag-and-drop and improved authentication.",
        },
        {
          stage: "04",
          title: "Production deployment",
          status: "Planned",
          description:
            "Deploy the frontend, backend and database configuration.",
        },
      ],
    },

    challenges: {
      eyebrow: "Engineering challenges",

      title: "What still needs improvement",

      description:
        "The project is presented transparently as an application that is still being refined.",

      items: [
        {
          number: "01",
          title: "Synchronizing project state",
          description:
            "Frontend state needs to remain consistent with project and task records stored in MongoDB.",
        },
        {
          number: "02",
          title: "Improving error handling",
          description:
            "API and interface errors need clearer user-facing feedback.",
        },
        {
          number: "03",
          title: "Completing edit functionality",
          description:
            "Project and task editing will improve the usability of the workflow.",
        },
        {
          number: "04",
          title: "Preparing for deployment",
          description:
            "The remaining bugs and environment configuration must be resolved before publishing a live demo.",
        },
      ],
    },

    learnings: {
      eyebrow: "Key learnings",

      title: "What the routine app taught me",

      description:
        "The project provided practical experience connecting a React frontend to a persistent backend.",

      items: [
        "Creating project-based productivity interfaces",
        "Building REST API endpoints with Express",
        "Connecting React to MongoDB-backed services",
        "Structuring frontend and backend applications",
        "Managing create and delete operations",
        "Identifying unfinished areas honestly",
        "Planning feature improvements incrementally",
        "Understanding the importance of deployment readiness",
      ],
    },

    gallery: {
      eyebrow: "Project gallery",

      title: "A closer look at the current version",

      description:
        "Screenshots from the project dashboard and task-management experience.",

      images: [
        {
          src: "/images/projects/routine-management-app/gallery/login.png",
          alt: "Routine Management login page",
          label: "Login Page",
        },
        {
          src: "/images/projects/routine-management-app/gallery/sidebar.png",
          alt: "Routine Management sidebar",
          label: "Sidebar Navigation",
        },
        {
          src: "/images/projects/routine-management-app/gallery/tasks.png",
          alt: "Routine Management tasks",
          label: "Task Organization",
        },
      ],
    },

    cta: {
      eyebrow: "Project in improvement",

      title: "Follow the development of the Routine Management App",

      description:
        "Review the current source code and explore my completed full-stack projects.",
    },
  },

  {
    id: 9,
    slug: "nbc-news-portal",

    title: "NBC News",
    highlightedTitle: "Portal",

    subtitle:
      "A responsive news application with live articles, category navigation, infinite scrolling, favorites and detailed article experiences.",

    categories: ["Frontend", "Next.js"],
    statuses: ["Completed"],

    theme: "violet",

    heroImage: "/images/projects/nbc-news-portal/hero.png",

    heroImageAlt: "NBC News Portal homepage",

    links: [
      {
        label: "View Repository",
        href: "https://github.com/vahid2104/nbc-news-portal",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://nbc-news-portal.vercel.app/",
        type: "live",
      },
    ],

    metrics: [
      {
        value: "Next.js",
        label: "Application framework",
        icon: "code",
      },
      {
        value: "NewsAPI",
        label: "Article source",
        icon: "database",
      },
      {
        value: "Infinite",
        label: "Content scrolling",
        icon: "trending",
      },
      {
        value: "Responsive",
        label: "News experience",
        icon: "layers",
      },
    ],

    overview: {
      eyebrow: "Project overview",

      title: "A modern portal for live news discovery",

      description:
        "The platform organizes external news content into a responsive and readable interface.",

      paragraphs: [
        "NBC News Portal is a Next.js news application powered by NewsAPI.",

        "Users can browse the latest articles, move between news categories, load additional content through infinite scrolling and save favorite stories.",

        "Each article opens in a detailed experience with related content and supporting recommendations.",
      ],

      contributionEyebrow: "My contribution",

      contributionTitle: "Complete frontend implementation",

      contributions: [
        "Building the Next.js application structure",
        "Integrating NewsAPI",
        "Creating category navigation",
        "Implementing infinite scrolling",
        "Building article detail pages",
        "Creating favorites functionality",
        "Designing responsive news layouts",
      ],
    },

    problemSolution: {
      eyebrow: "Problem and solution",

      title: "Presenting fast-changing news without overwhelming readers",

      description:
        "News applications must organize large volumes of external content into a readable experience.",

      problem: {
        title:
          "Large streams of articles can become difficult to navigate",

        items: [
          "New content changes continuously",
          "Readers need clear category navigation",
          "Long feeds require efficient loading",
          "Important stories need stronger visual emphasis",
          "Users may want to save articles for later",
        ],
      },

      solution: {
        title:
          "A structured news portal with categories and infinite loading",

        items: [
          "Latest-news content sections",
          "Category-based navigation",
          "Infinite scrolling for additional articles",
          "Editors' Picks and featured content",
          "Favorites and related-article experiences",
        ],
      },
    },

    features: {
      eyebrow: "Core functionality",

      title: "Features built for news consumption",

      description:
        "The application combines content discovery, reading and personalization features.",

      items: [
        {
          title: "Latest News Feed",
          description:
            "Users can browse continuously updated external articles.",
          icon: "trending",
        },
        {
          title: "Category Navigation",
          description:
            "News content is organized into accessible topic categories.",
          icon: "compass",
        },
        {
          title: "Infinite Scrolling",
          description:
            "Additional articles load as the user continues through the feed.",
          icon: "layers",
        },
        {
          title: "Editors' Picks",
          description:
            "Important stories receive stronger visual presentation.",
          icon: "bookmark",
        },
        {
          title: "Article Details",
          description:
            "Each story opens in a dedicated detail experience.",
          icon: "edit",
        },
        {
          title: "Favorites",
          description:
            "Readers can save selected articles for later access.",
          icon: "lock",
        },
      ],
    },

    techStack: {
      eyebrow: "Technology stack",

      title: "A dynamic Next.js news interface",

      description:
        "The project combines dynamic routing, external article data and responsive frontend components.",

      groups: [
        {
          title: "Frontend",
          icon: "code",
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
          ],
        },
        {
          title: "News Data",
          icon: "database",
          technologies: [
            "NewsAPI",
            "Article Queries",
            "Category Data",
          ],
        },
        {
          title: "User Experience",
          icon: "layers",
          technologies: [
            "Infinite Scroll",
            "Favorites",
            "Related Articles",
          ],
        },
        {
          title: "Tools",
          icon: "server",
          technologies: ["Git", "GitHub", "Vercel"],
        },
      ],
    },

    challenges: {
      eyebrow: "Engineering challenges",

      title: "What required the most thought",

      description:
        "External news APIs introduce loading, duplication and content-availability challenges.",

      items: [
        {
          number: "01",
          title: "Implementing infinite scrolling",
          description:
            "The application needed to load new pages without duplicating articles or interrupting the reading experience.",
        },
        {
          number: "02",
          title: "Handling incomplete article data",
          description:
            "Some external articles lacked images, descriptions or complete metadata.",
        },
        {
          number: "03",
          title: "Building dynamic article pages",
          description:
            "Selected article data needed to remain available when navigating to the detail experience.",
        },
        {
          number: "04",
          title: "Maintaining visual hierarchy",
          description:
            "Featured articles, editors' picks and standard cards needed clearly different levels of emphasis.",
        },
      ],
    },

    learnings: {
      eyebrow: "Key learnings",

      title: "What the news portal taught me",

      description:
        "The project strengthened my experience with external content APIs and feed-based interfaces.",

      items: [
        "Integrating NewsAPI with Next.js",
        "Creating category-based data queries",
        "Implementing infinite scrolling",
        "Handling missing external article data",
        "Building responsive news layouts",
        "Creating favorites functionality",
        "Designing detailed article experiences",
        "Organizing large content feeds",
      ],
    },

    gallery: {
      eyebrow: "Project gallery",

      title: "A closer look at the news experience",

      description:
        "Screenshots from the homepage, feed, article detail and mobile layouts.",

      images: [
        {
          src: "/images/projects/nbc-news-portal/gallery/homepage.png",
          alt: "NBC News Portal homepage",
          label: "News Homepage",
        },
        {
          src: "/images/projects/nbc-news-portal/gallery/feed.png",
          alt: "NBC News Portal article feed",
          label: "Latest News Feed",
        },
        {
          src: "/images/projects/nbc-news-portal/gallery/article.png",
          alt: "NBC News Portal article detail",
          label: "Article Details",
        },
        {
          src: "/images/projects/nbc-news-portal/gallery/mobile.png",
          alt: "NBC News Portal mobile design",
          label: "Mobile Experience",
        },
      ],
    },

    cta: {
      eyebrow: "Explore the portal",

      title: "See how live news became a structured reading experience",

      description:
        "Open the application, inspect the source code or explore my other Next.js projects.",
    },
  },

  {
    id: 10,
    slug: "weather-dashboard",

    title: "Weather",
    highlightedTitle: "Dashboard",

    subtitle:
      "A clean and responsive weather application providing current conditions, forecasts and city-based weather search through the OpenWeather API.",

    categories: ["Frontend", "Next.js", "Dashboard"],
    statuses: ["Completed"],

    theme: "cyan",

    heroImage: "/images/projects/weather-dashboard/hero.png",

    heroImageAlt: "Weather Dashboard forecast interface",

    links: [
      {
        label: "View Repository",
        href: "https://github.com/vahid2104/weather-dashboard",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://vahid2104.github.io/weather-dashboard/",
        type: "live",
      },
    ],

    metrics: [
      {
        value: "Next.js",
        label: "Application framework",
        icon: "code",
      },
      {
        value: "OpenWeather",
        label: "Weather data",
        icon: "database",
      },
      {
        value: "Forecast",
        label: "Weather information",
        icon: "trending",
      },
      {
        value: "Responsive",
        label: "Dashboard design",
        icon: "layers",
      },
    ],

    overview: {
      eyebrow: "Project overview",

      title: "Current weather and forecasts in one clean interface",

      description:
        "The dashboard converts external weather data into an accessible location-based experience.",

      paragraphs: [
        "Weather Dashboard is a responsive Next.js application connected to the OpenWeather API.",

        "Users can search for cities, view current weather conditions and explore forecast information through a dashboard-style interface.",

        "The project focuses on API integration, weather-data presentation, loading states and responsive design.",
      ],

      contributionEyebrow: "My contribution",

      contributionTitle: "Complete frontend development",

      contributions: [
        "Building the Next.js application",
        "Integrating the OpenWeather API",
        "Creating city search functionality",
        "Displaying current weather information",
        "Creating forecast components",
        "Handling loading and error states",
        "Designing a responsive dashboard",
      ],
    },

    problemSolution: {
      eyebrow: "Problem and solution",

      title: "Turning raw weather data into useful information",

      description:
        "Weather APIs return large data objects that need to be organized around what users actually need.",

      problem: {
        title:
          "Raw API responses are not immediately useful to everyday users",

        items: [
          "Users need a simple city search",
          "Weather values require clear labels and units",
          "Forecast information must be visually organized",
          "Invalid locations need readable error messages",
          "Loading states must avoid empty interfaces",
        ],
      },

      solution: {
        title:
          "A readable dashboard for current conditions and forecasts",

        items: [
          "Location-based city search",
          "Current temperature and condition display",
          "Structured forecast information",
          "Loading and error feedback",
          "Responsive dashboard components",
        ],
      },
    },

    features: {
      eyebrow: "Core functionality",

      title: "Features built around weather discovery",

      description:
        "The dashboard focuses on quick search, readable conditions and forecast information.",

      items: [
        {
          title: "City Search",
          description:
            "Users can request weather information for selected cities.",
          icon: "compass",
        },
        {
          title: "Current Conditions",
          description:
            "The dashboard displays temperature, condition and location data.",
          icon: "grid",
        },
        {
          title: "Weather Forecast",
          description:
            "Users can review upcoming weather information.",
          icon: "trending",
        },
        {
          title: "API Integration",
          description:
            "Weather data is retrieved from the OpenWeather service.",
          icon: "database",
        },
        {
          title: "Error Handling",
          description:
            "Invalid searches and request failures produce clear feedback.",
          icon: "shield",
        },
        {
          title: "Responsive Dashboard",
          description:
            "The weather interface adapts to different screen sizes.",
          icon: "layers",
        },
      ],
    },

    techStack: {
      eyebrow: "Technology stack",

      title: "A lightweight external-API dashboard",

      description:
        "The project uses Next.js components to transform weather-service responses into a usable interface.",

      groups: [
        {
          title: "Frontend",
          icon: "code",
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
          ],
        },
        {
          title: "Weather Data",
          icon: "database",
          technologies: [
            "OpenWeather API",
            "Current Weather",
            "Forecast Data",
          ],
        },
        {
          title: "Interface",
          icon: "layers",
          technologies: [
            "Responsive Layout",
            "Loading States",
            "Error States",
          ],
        },
        {
          title: "Tools",
          icon: "server",
          technologies: ["Git", "GitHub", "Vercel"],
        },
      ],
    },

    challenges: {
      eyebrow: "Engineering challenges",

      title: "What required the most attention",

      description:
        "Weather APIs require careful handling of location input, response fields and unavailable data.",

      items: [
        {
          number: "01",
          title: "Transforming API responses",
          description:
            "The OpenWeather response needed to be reduced to the values most useful for the interface.",
        },
        {
          number: "02",
          title: "Handling invalid cities",
          description:
            "Incorrect or unavailable locations needed clear error messages instead of a broken dashboard.",
        },
        {
          number: "03",
          title: "Managing loading states",
          description:
            "Search requests required visible feedback while new weather data was being retrieved.",
        },
        {
          number: "04",
          title: "Designing responsive forecast cards",
          description:
            "Forecast information needed to remain readable on both wide and narrow screens.",
        },
      ],
    },

    learnings: {
      eyebrow: "Key learnings",

      title: "What the weather dashboard taught me",

      description:
        "The project strengthened my skills in API integration and external-data presentation.",

      items: [
        "Integrating the OpenWeather API",
        "Transforming raw API responses",
        "Building location-based search",
        "Handling loading and error states",
        "Creating reusable weather components",
        "Designing responsive dashboard layouts",
        "Managing environment variables",
        "Presenting forecast data clearly",
      ],
    },

    gallery: {
      eyebrow: "Project gallery",

      title: "A closer look at the weather experience",

      description:
        "Screenshot from current conditions and main layout.",

      images: [
        {
          src: "/images/projects/weather-dashboard/hero.png",
          alt: "Weather Dashboard current conditions",
          label: "Current Conditions",
        },
      ],
    },

    cta: {
      eyebrow: "Explore the dashboard",

      title: "See how weather data becomes a useful interface",

      description:
        "Open the deployed dashboard, inspect its source code or explore my other frontend projects.",
    },
  },
];

export function getProjectBySlug(
  slug: string,
): ProjectCaseStudy | undefined {
  return projects.find((project) => project.slug === slug);
}