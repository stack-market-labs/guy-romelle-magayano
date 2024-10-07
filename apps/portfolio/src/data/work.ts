import type { TCommonPhotosData } from '@portfolio/types'

export type TWorkData = {
  workExperiences: TWorkExperiencesData[]
  cvFile: string
}
export type TWorkExperiencesData = TCommonPhotosData & {
  company: string
  title: string
  start: string
  end: string
  country: string
  contributions: string[]
  skills: string[]
}

// Work data
export const workData: TWorkData = {
  workExperiences: [
    {
      id: 'f789b3a1-957e-41e5-92c7-3b7c87a98472',
      company: 'X-Team',
      title: 'Senior Full Stack + WordPress Developer',
      src: '/images/logos/x-team.png',
      alt: 'X-Team Company Logo',
      start: 'April 2023',
      end: 'July 2023',
      country: 'Melbourne, Victoria, Australia - Remote',
      contributions: [
        'Optimized API integrations, enhancing content updates and user engagement for major publications like GQ and Vogue Australia.',
        'Spearheaded vertical video development, improving performance and user experience across platforms.',
        'Established front-end testing protocols using Jest, React Testing Library, and Cypress, significantly reducing bugs.',
        'Automated WordPress VIP local development setups with custom BASH scripts, boosting team productivity.',
        'Developed innovative user features like a mobile swiping feature for News Australia, enhancing interactivity.',
        'Expanded developer documentation on Confluence, reducing support queries and easing onboarding.'
      ],
      skills: [
        'TypeScript',
        'Nginx',
        'Jest',
        'Cypress',
        'Next.js',
        'SASS',
        'Docker',
        'Amazon Web Services (AWS)',
        'React.js',
        'Node.js',
        'CSS',
        'Web Development',
        'HTML',
        'Web Design',
        'Web Applications',
        'PHP',
        'WordPress',
        'JavaScript',
        'Git',
        'Github'
      ]
    },
    {
      id: '8b3c7a5d-36d4-4ab2-bde8-3d15bff29a31',
      company: 'Epic Design Labs',
      title: 'Senior Full Stack Developer',
      src: '/images/logos/epic-design-labs.png',
      alt: 'Epic Design Labs Company Logo',
      start: 'April 2020',
      end: 'February 2023',
      country: 'Portland, Oregon, US - Remote',
      contributions: [
        'Contributed to the development of a custom web crawler for SEO reporting, integrating Python, Django, PostgreSQL, and Go.',
        'Managed server configuration and infrastructure using AWS services (EC2, S3, SES), and Docker for consistent deployments.',
        'Implemented a comprehensive signup and user onboarding workflow, improving user experience.',
        'Designed and implemented a robust team management module with Django, handling roles, permissions, and resources.',
        'Developed an uptime monitoring system with real-time notifications and custom API endpoints.',
        'Architected and integrated Stripe payment solutions, managing subscriptions and customer data securely.',
        'Led frontend development with React.js, Next.js, and TypeScript, enhancing performance and scalability.',
        'Automated CI/CD pipelines using GitHub Actions, ensuring smooth and efficient releases.',
        'Improved caching and performance optimization for backend services, reducing response times.'
      ],
      skills: [
        'TypeScript',
        'MongoDB',
        'Go (Programming Language)',
        'Heroku',
        'Apollo',
        'GraphQL',
        'PostgreSQL',
        'Django',
        'Express.js',
        'React Native',
        'Jest',
        'Cypress',
        'GatsbyJS',
        'Next.js',
        'SASS',
        'Tailwind CSS',
        'Docker',
        'Amazon Web Services (AWS)',
        'Python (Programming Language)',
        'Redux.js',
        'React.js',
        'Node.js',
        'CSS',
        'Web Development',
        'HTML',
        'Web Design',
        'Web Applications',
        'Software Development',
        'JavaScript',
        'Git',
        'Github',
        'Mobile Applications'
      ]
    },
    {
      id: '9fc3e5a1-4ed4-4e78-a0f9-f2b618d74e92',
      company: 'MultiplyMii',
      title: 'Senior Full Stack Developer',
      src: '/images/logos/multiplymii.jpeg',
      alt: 'MultiplyMii Company Logo',
      start: 'April 2020',
      end: 'September 2021',
      country: 'Philippines - Remote',
      contributions: [
        'Led full-stack development of the company website using Nuxt.js (Vue.js), focusing on server-side rendering and SEO.',
        'Implemented a pricing calculator to streamline client interactions and enhance user decision-making.',
        'Integrated GSAP (GreenSock Animation Platform) for engaging, visually appealing animations.',
        'Deployed the website on Google Cloud Platform, ensuring reliability and scalability for varied traffic levels.'
      ],
      skills: [
        'Express.js',
        'SASS',
        'Google Cloud Platform (GCP)',
        'Vue.js',
        'React.js',
        'Node.js',
        'CSS',
        'Web Development',
        'HTML',
        'Web Design',
        'JavaScript',
        'Git',
        'Github'
      ]
    },
    {
      id: 'a7b2e3f6-d1a8-4d75-bd79-681ae9580e9a',
      company: 'MAKE Interactive BV',
      title: 'Full Stack Developer',
      src: '/images/logos/make-development.jpeg',
      alt: 'MAKE Interactive BV Company Logo',
      start: 'April 2019',
      end: 'February 2020',
      country: 'Netherlands - Remote',
      contributions: [
        'Conducted performance audits and implemented advanced caching strategies for WordPress sites.',
        'Optimized image and content delivery using CDNs, improving site speed and user experience.',
        'Developed critical features for a SaaS application using Create React App, focusing on UI/UX and responsive design.',
        'Integrated Redux for state management and Axios for secure API interactions.'
      ],
      skills: [
        'Linux',
        'SASS',
        'Redux.js',
        'React.js',
        'MySQL',
        'CSS',
        'Web Development',
        'HTML',
        'Web Design',
        'Web Applications',
        'PHP',
        'Software Development',
        'WordPress',
        'jQuery',
        'JavaScript',
        'Git',
        'Github'
      ]
    },
    {
      id: 'c4b2a7f8-e1b9-4908-b91f-4f46f1a2c6d3',
      company: 'Orth Enterprises, LLC',
      title: 'Full Stack Developer',
      start: 'April 2019',
      end: 'August 2019',
      country: 'Houston, Texas, USA',
      contributions: [
        'Led redesign and optimization of the Julva website using Hugo, improving engagement and sales.',
        'Utilized SASS and BEM conventions for efficient CSS management, automating tasks with Gulp.',
        'Implemented cross-platform compatibility testing, ensuring consistent user experiences across devices.'
      ],
      skills: [
        'Hugo',
        'Go (Programming Language)',
        'Apache',
        'SASS',
        'CSS',
        'Web Development',
        'HTML',
        'Web Design',
        'JavaScript',
        'Git',
        'Github'
      ]
    },
    {
      id: 'd1f2c3a4-78b5-4f87-92e8-70d5a1f9e2d5',
      company: 'Outsourcing Wizards',
      title: 'Full Stack Developer',
      start: 'Jan 2019',
      end: 'Mar 2019',
      country: 'Victoria, Texas, USA',
      contributions: [
        'Spearheaded the development of a WordPress plugin tailored for real estate websites, optimizing site speed and UX.',
        'Developed custom Gutenberg blocks for flexible property listings and integrated interactive maps.',
        'Ensured full responsiveness and theme integration across various devices and screen sizes.'
      ],
      skills: [
        'Apache',
        'Linux',
        'SASS',
        'MySQL',
        'CSS',
        'Web Development',
        'HTML',
        'Web Design',
        'PHP',
        'WordPress',
        'jQuery',
        'JavaScript',
        'Git',
        'Github'
      ]
    },
    {
      id: 'e3a2b1c4-5f7e-48b1-a3d5-9f1e3a2b4c7d',
      company: 'Infosoft Studio',
      title: 'Full Stack Developer',
      src: '/images/logos/infosoft-studio.png',
      alt: 'Infosoft Studio Company Logo',
      start: 'November 2014',
      end: 'September 2018',
      country: 'Davao City, Philippines',
      contributions: [
        'Led the development of WordPress websites for Philippine government agencies, focusing on user-friendly design and scalable platforms.',
        'Implemented advanced SEO strategies, boosting online visibility and user engagement.',
        'Provided training on website management and ensured compliance with security protocols and data privacy laws.'
      ],
      skills: [
        'Gulp.js',
        'Apache',
        'Linux',
        'Nginx',
        'SASS',
        'Bootstrap',
        'MySQL',
        'CSS',
        'Web Development',
        'HTML',
        'Web Design',
        'PHP',
        'WordPress',
        'jQuery',
        'JavaScript',
        'Git',
        'Github',
        'User Interface Design'
      ]
    }
  ],
  cvFile: '/docs/cv.pdf'
}
