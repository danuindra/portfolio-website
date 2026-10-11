// English translations
// All user-facing strings in the portfolio website

const en = {
  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home: 'Home',
    about: 'About',
    journey: 'Journey',
    projects: 'Projects',
    skills: 'Skills',
    resume: 'Resume',
    contact: 'Contact',
    skipToMain: 'Skip to main content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    builtWith: 'Built with Next.js & Tailwind CSS',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
    navHome: 'Home',
    navAbout: 'About',
    navJourney: 'Journey',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navResume: 'Resume',
    navContact: 'Contact',
  },

  // ── Theme toggle ─────────────────────────────────────────────────────────────
  theme: {
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
  },

  // ── Locale toggle ────────────────────────────────────────────────────────────
  locale: {
    switchTo: 'Bahasa Indonesia',
    current: 'EN',
  },

  // ── Hero section ─────────────────────────────────────────────────────────────
  hero: {
    greeting: "Hi, I'm",
    description:
      "I approach marketing work analytically — building systems to measure what's working, document what isn't, and improve over time. Currently developing real-world projects in analytics, data visualization, and digital marketing strategy.",
    ctaWork: 'View My Work',
    ctaContact: 'Get in Touch',
    availability: 'Open to full-time opportunities',
  },

  // ── About summary (home section) ─────────────────────────────────────────────
  aboutSummary: {
    eyebrow: 'About',
    heading: 'I treat every project like a product.',
    body1:
      "I'm a digital marketer who works at the intersection of strategy, data, and execution. My background is in building things that actually work — from analytics dashboards to landing pages — and documenting the process so others can learn from it.",
    body2: 'This portfolio is a living document of that work.',
    readMore: 'Read my full story →',
  },

  // ── About page ───────────────────────────────────────────────────────────────
  about: {
    pageTitle: 'About',
    metaDescription: "background, skills, and approach to digital marketing and data analytics",
    heading: 'About Me',
    bio1: 'a digital marketer based in',
    bio2: 'My work sits at the intersection of marketing strategy, data analytics, and digital execution. I\'m drawn to work that is measurable — where you can look at the numbers and know whether something worked.',
    bio3: "Right now, I'm building the foundation of that career deliberately. Through structured learning, real-world projects, and a portfolio I treat as a living product — not a static resume — I'm documenting every step of the process.",
    bio4: "I believe the best way to demonstrate capability is to build something and show your work. That's what this website is for.",
    howIWorkHeading: 'How I Work',
    skillsHeading: 'Skills & Tools',
    journeyHeading: 'My Journey',
    ctaText: 'Interested in working together?',
    ctaContact: 'Get in Touch',
    ctaProjects: 'View Projects',
    values: [
      {
        title: 'Analytical first',
        description:
          "I start with data, not assumptions. Before any campaign or project, I want to understand what's measurable and what success looks like.",
      },
      {
        title: 'Systems over tactics',
        description:
          "I'm more interested in building repeatable systems than one-time wins. Good marketing compounds over time.",
      },
      {
        title: 'Document everything',
        description:
          "I write down what I learn, what I build, and what I'd do differently. It makes me a better collaborator and keeps the work honest.",
      },
    ],
  },

  // ── Skills section ───────────────────────────────────────────────────────────
  skills: {
    eyebrow: 'Skills & Tools',
    heading: 'What I Work With',
    categories: {
      marketing: 'Marketing & Strategy',
      data: 'Data & Visualization',
      technical: 'Technical Skills',
    },
  },

  // ── Skills page ──────────────────────────────────────────────────────────────
  skillsPage: {
    pageTitle: 'Skills',
    metaDescription: 'Skills and tools used in digital marketing, analytics, and web projects.',
    eyebrow: 'Skills & Tools',
    heading: 'What I Work With',
    subheading: 'Skills built through real projects — not just courses.',
    note: 'Development skills (React, Next.js, TypeScript) are used in building this website but are intentionally excluded here — this portfolio focuses on digital marketing capabilities.',
  },

  // ── Resume page ──────────────────────────────────────────────────────────────
  resumePage: {
    pageTitle: 'Resume',
    metaDescription: 'Resume and CV — Digital Marketer & Analyst.',
    heading: 'Resume',
    downloadCv: 'Download CV',
    downloadNote: 'PDF, last updated 2026',
    downloadCta: 'Want the full version? Download the PDF.',
    sections: {
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Selected Projects',
    },
  },

  // ── Journey page ─────────────────────────────────────────────────────────────
  journeyPage: {
    pageTitle: 'My RevoU Journey',
    metaDescription: '14 weeks of real-world digital marketing projects at RevoU.',
    badge: 'RevoU Program',
    heading: 'My RevoU Journey',
    subheading: '14 weeks. 14 projects. A structured path through the full digital marketing stack — from fundamentals to strategy, analytics, and execution.',
    description: 'Each card is a real project completed during the program. Click any week to see the full case study.',
    allWeeks: 'All 14 Weeks',
    inProgress: 'Content in progress.',
    inProgressNote: 'Project details for each week will be added as the program progresses. Cards marked "Coming soon" will be updated with full case studies.',
    phases: {
      learning: 'Learning',
      building: 'Building',
      applying: 'Applying',
      results: 'Results',
    },
    weekDetail: {
      backToJourney: '← My RevoU Journey',
      backToAll: '← Back to all 14 weeks',
      program: 'RevoU Digital Marketing',
      inProgress: 'Content in progress',
      inProgressBody: 'This project is still being documented. The full case study will be added soon.',
      prevWeek: '← Previous Week',
      nextWeek: 'Next Week →',
      comingSoon: 'Coming soon',
      sections: {
        overview: 'Overview',
        objective: 'Objective',
        myRole: 'My Role',
        process: 'Process',
        tools: 'Tools',
        result: 'Result',
        gallery: 'Project Output / Gallery',
        learned: 'What I Learned',
      },
      placeholder: 'content coming soon.',
      galleryPlaceholder: 'Screenshots / outputs — coming soon.',
    },
  },

  // ── Journey section ──────────────────────────────────────────────────────────
  journey: {
    heading: 'My Journey',
    current: '· Current',
    ongoing: 'This timeline always grows.',
    entries: [
      {
        title: 'RevoU Digital Marketing Program',
        organization: 'RevoU',
        description:
          'Structured learning in digital marketing fundamentals, analytics, and campaign strategy. One milestone in an ongoing learning path.',
      },
      {
        title: 'Personal Portfolio Website',
        organization: undefined,
        description:
          'Built this website as a real product — from strategy and UX to development and deployment.',
      },
      {
        title: 'Google Analytics 4 Dashboard',
        organization: undefined,
        description:
          'Built a working GA4 + Looker Studio reporting system for tracking and analyzing marketing performance.',
      },
      {
        title: 'AI Product Visualization',
        organization: undefined,
        description:
          'Explored AI-assisted workflows for content creation and product visualization.',
      },
    ],
  },

  // ── Projects highlight (home section) ───────────────────────────────────────
  projectsHighlight: {
    eyebrow: 'Work',
    heading: 'Selected Projects',
    empty: 'Projects coming soon.',
    viewAll: 'View all projects →',
  },

  // ── Projects page ────────────────────────────────────────────────────────────
  projects: {
    pageTitle: 'Projects',
    metaDescription:
      'Case studies and real-world projects in digital marketing, analytics, and web development.',
    heading: 'Projects',
    subheading:
      'Real-world work in marketing, analytics, and web development. Each project includes the problem, process, and results.',
    empty: 'No projects in this category yet.',
    emptyHint: 'More work is in progress — check back soon.',
    filterLabel: 'Filter projects by category',
    categories: {
      all: 'All',
      analytics: 'Analytics',
      marketing: 'Marketing',
      web: 'Web',
      ai: 'AI',
    },
  },

  // ── Project card ─────────────────────────────────────────────────────────────
  projectCard: {
    viewCaseStudy: 'View case study →',
    ariaLabel: 'View {title} case study',
  },

  // ── Project detail page ──────────────────────────────────────────────────────
  projectDetail: {
    notFound: 'Project Not Found',
    inProgress: 'In Progress',
    backToProjects: '← All Projects',
    ctaText: 'Have a similar project in mind?',
    ctaButton: 'Get in Touch',
  },

  // ── Project header ───────────────────────────────────────────────────────────
  projectHeader: {
    backLink: '← Projects',
    inProgress: 'In Progress',
    dateLocale: 'en-US',
  },

  // ── Contact CTA (home section) ───────────────────────────────────────────────
  contactCta: {
    heading: "Let's Connect",
    body: "I'm open to full-time roles, freelance collaborations, and conversations with people doing interesting work in marketing and tech.",
    button: 'Get in Touch',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },

  // ── Contact page ─────────────────────────────────────────────────────────────
  contact: {
    pageTitle: 'Contact',
    metaDescription: 'for full-time opportunities, freelance work, or collaboration',
    heading: "Let's Connect",
    body1:
      "I'm open to full-time roles, freelance collaborations, and conversations with people doing interesting work in marketing and tech.",
    body2: 'The best way to reach me is via email — I respond within 24 hours.',
    availability: 'Currently open to full-time opportunities in Digital Marketing',
    directHeading: 'Or reach me directly',
    labelEmail: 'Email',
    labelLinkedIn: 'LinkedIn',
    labelGitHub: 'GitHub',
    ariaLinkedIn: 'Visit LinkedIn profile',
    ariaGitHub: 'Visit GitHub profile',
    ariaEmail: 'Send email',
  },

  // ── Contact form ─────────────────────────────────────────────────────────────
  contactForm: {
    nameLbl: 'Your Name',
    namePlaceholder: 'What should I call you?',
    emailLbl: 'Your Email',
    emailPlaceholder: 'Where can I reach you?',
    messageLbl: 'Your Message',
    messagePlaceholder: "What's on your mind?",
    submit: 'Send Message',
    sending: 'Sending…',
    successTitle: 'Message sent.',
    successBody: "Thanks for reaching out — I'll get back to you within 24 hours.",
  },

  // ── Server action validation errors ─────────────────────────────────────────
  validation: {
    nameRequired: 'Please enter your name.',
    emailInvalid: 'Please enter a valid email address.',
    messageTooShort: 'Message must be at least 10 characters.',
    serverError: 'Something went wrong. Please try emailing directly.',
    sendError: 'Failed to send message. Please try again or email directly.',
  },
} as const

export default en
export type Translations = {
  nav: {
    home: string
    about: string
    journey: string
    projects: string
    skills: string
    resume: string
    contact: string
    skipToMain: string
    openMenu: string
    closeMenu: string
  }
  footer: {
    builtWith: string
    linkedin: string
    github: string
    email: string
    navHome: string
    navAbout: string
    navJourney: string
    navProjects: string
    navSkills: string
    navResume: string
    navContact: string
  }
  theme: {
    switchToDark: string
    switchToLight: string
  }
  locale: {
    switchTo: string
    current: string
  }
  hero: {
    greeting: string
    description: string
    ctaWork: string
    ctaContact: string
    availability: string
  }
  aboutSummary: {
    eyebrow: string
    heading: string
    body1: string
    body2: string
    readMore: string
  }
  about: {
    pageTitle: string
    metaDescription: string
    heading: string
    bio1: string
    bio2: string
    bio3: string
    bio4: string
    howIWorkHeading: string
    skillsHeading: string
    journeyHeading: string
    ctaText: string
    ctaContact: string
    ctaProjects: string
    values: ReadonlyArray<{ readonly title: string; readonly description: string }>
  }
  skills: {
    eyebrow: string
    heading: string
    categories: {
      marketing: string
      data: string
      technical: string
    }
  }
  skillsPage: {
    pageTitle: string
    metaDescription: string
    eyebrow: string
    heading: string
    subheading: string
    note: string
  }
  resumePage: {
    pageTitle: string
    metaDescription: string
    heading: string
    downloadCv: string
    downloadNote: string
    downloadCta: string
    sections: {
      education: string
      experience: string
      skills: string
      projects: string
    }
  }
  journeyPage: {
    pageTitle: string
    metaDescription: string
    badge: string
    heading: string
    subheading: string
    description: string
    allWeeks: string
    inProgress: string
    inProgressNote: string
    phases: {
      learning: string
      building: string
      applying: string
      results: string
    }
    weekDetail: {
      backToJourney: string
      backToAll: string
      program: string
      inProgress: string
      inProgressBody: string
      prevWeek: string
      nextWeek: string
      comingSoon: string
      sections: {
        overview: string
        objective: string
        myRole: string
        process: string
        tools: string
        result: string
        gallery: string
        learned: string
      }
      placeholder: string
      galleryPlaceholder: string
    }
  }
  journey: {
    heading: string
    current: string
    ongoing: string
    entries: ReadonlyArray<{
      readonly title: string
      readonly organization: string | undefined
      readonly description: string
    }>
  }
  projectsHighlight: {
    eyebrow: string
    heading: string
    empty: string
    viewAll: string
  }
  projects: {
    pageTitle: string
    metaDescription: string
    heading: string
    subheading: string
    empty: string
    emptyHint: string
    filterLabel: string
    categories: {
      all: string
      analytics: string
      marketing: string
      web: string
      ai: string
    }
  }
  projectCard: {
    viewCaseStudy: string
    ariaLabel: string
  }
  projectDetail: {
    notFound: string
    inProgress: string
    backToProjects: string
    ctaText: string
    ctaButton: string
  }
  projectHeader: {
    backLink: string
    inProgress: string
    dateLocale: string
  }
  contactCta: {
    heading: string
    body: string
    button: string
    linkedin: string
    github: string
    email: string
  }
  contact: {
    pageTitle: string
    metaDescription: string
    heading: string
    body1: string
    body2: string
    availability: string
    directHeading: string
    labelEmail: string
    labelLinkedIn: string
    labelGitHub: string
    ariaLinkedIn: string
    ariaGitHub: string
    ariaEmail: string
  }
  contactForm: {
    nameLbl: string
    namePlaceholder: string
    emailLbl: string
    emailPlaceholder: string
    messageLbl: string
    messagePlaceholder: string
    submit: string
    sending: string
    successTitle: string
    successBody: string
  }
  validation: {
    nameRequired: string
    emailInvalid: string
    messageTooShort: string
    serverError: string
    sendError: string
  }
}
