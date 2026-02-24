import { About, Blog, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Adilson",
  lastName: "Cuevas Espid",
  name: `Adilson Cuevas E`,
  role: "Full-Stack Engineer specialized in Enterprise Software, Analytics Dashboards & IoT Solutions",
  avatar: "/images/imagen.jpeg",
  email: "cuevasadilson@gmail.com",
  location: "America/Bogota", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"],
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adilsoncuevas",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adilsoncuevas/",
    essential: true,
  },
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.me/573125961764",
    essential: false,
  },
  {
    name: "UpWork",
    icon: "globe",
    link: "https://www.upwork.com/freelancers/~010a1f924e08b26f71",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning complex business processes into scalable digital platforms</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Stack</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Adilson Cuevas, a Full Stack Engineer specialized in Enterprise Software, Analytics Dashboards, and IoT solutions. I design and develop robust backend architectures and intuitive frontend experiences that transform complex business processes into efficient digital systems.
    <br /> <br />
    Beyond client projects, I continuously build and experiment with new technologies — refining scalable architectures, authentication systems, automation workflows, and data-driven platforms.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a passionate Full-Stack Software Engineer with hands-on experience designing, building, 
        and deploying web applications, APIs, data analysis platforms, and connected IoT solutions. 
        My strengths include delivering scalable backend services, high-impact dashboards, and optimized data 
        workflows — all aimed at empowering businesses with actionable insights and efficient software solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Skina technologies S.A.S",
        timeframe: "June 2023 - Frebruary 2025",
        role: "Full-Stack Engineer Jr",
        achievements: [
          <>
            Full Stack Developer with experience in high-demand enterprise applications. 
            Provided technical support for a document management system with over 500 users, 
            ensuring 99% availability and timely incident resolution. Developed and debugged modules in Angular, 
            enhancing user experience with dynamic interfaces. Implemented and optimized REST APIs in Yii2 (MVC), 
            maintaining a modular and scalable backend.
          </>,
          <>
            Optimized SQL queries in PostgreSQL and MySQL, reducing execution times by up to 60%. Managed version control in GitLab under the Scrum framework,
            ensuring traceability and consistent deliveries.
          </>,
          <>
            Administered Linux servers on AWS, guaranteeing stable deployments and reliable environments. Implemented automatic error capturing, 
            increasing system stability by 35% and reducing incidents by 45%. Integrated dashboards with performance reporting to facilitate monitoring of operational
             indicators.
          </>
        ],
        images: [
        ],
      },
      {
        company: "Tech Lysesis S.A.S",
        timeframe: "Frebrary 2022 - October 2022",
        role: "Full-Stack Engineer Jr",
        achievements: [
          <>
            Full Stack Developer with experience in WordPress, Laravel, and Flutter. I have improved the usability 
            of WordPress applications, increasing customer satisfaction by 20%. Designed scalable modules in Laravel, 
            integrating REST APIs and MySQL following Clean Code principles. I manage AWS EC2 servers, configuring domains, 
            SSL, and high-availability deployment environments
          </>,
          <>
          I work with GitHub and CI/CD pipelines to ensure quality and continuous delivery. 
          I also provide support for Flutter apps, improving synchronization between systems. 
          I work with Agile methodologies (Scrum), increasing team productivity by 25% and consistently meeting 
          deliverables.
          </>
        ],
        images: [],
      },
      {	
        company: "AutoSolar Energía de Colombia S.A.S",
        timeframe: "May 2021 - February 2022",
        role: "Technical sales engineer",
        achievements: [
          <>
          Technical advisor specializing in photovoltaic systems for public and private clients. 
          Assessed technical feasibility and economic viability for solar projects, and designed customized 
          photovoltaic solutions based on each project's energy needs. Produced precise electrical plans and 
          circuits in AutoCAD, ensuring compliance with technical standards.
          </>,
          <>
          Executed complex electrical wiring for solar installations, maintaining efficiency and safety. 
          Provided technical guidance on electrical installations, supporting teams and clients with best practices 
          for system assembly.
          </>
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Pamplona",
        description: <>Studied Electronic engineering.</>,
      },
      {
        name: "Iberoamerican University Corporation",
        description: <>Studied Specialization in Analytics and Big Data.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
          I have experience in frontend development with interesting technologies ux/ui.
          </>
        ),
        tags: [
          {
            name: "Angular",
            icon: "logo-angular",
          },
          {
            name: "React",
            icon: "logo-react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
          {
            name: "Bootstrap",
            icon: "bootstrap",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-02/imagen1.jpg",
            alt: "Once UI Project",
            width: 36,
            height: 12,
          },
        ],
      },
      {
        title: "Backend development",
        description: (
          <>
          Backend development focused on creating comprehensive RESTful APIs using JWT-based authentication, 
          implementing efficient SQL queries through TypeORM, and designing a modular, object-oriented architecture 
          to facilitate scalability and maintenance. I follow the MVC architecture pattern to organize code and 
          structure services clearly, integrating controllers, services, and repositories. This methodology allows 
          for the construction of robust, secure, and easily extensible solutions.
          </>
        ),
        tags: [
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Django",
            icon: "django",
          },
          {
            name: "C#",
            icon: "csharp",
          },
          {
            name: "TypeORM",
            icon: "typeorm",
          },
          {
            name: "JWT",
            icon: "jwt",
          },
          {
            name: "Linux Servers",
            icon: "linux",
          },
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "GitLab",
            icon: "gitlab",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-02/imagen2.jpg",
            alt: "Project image",
            width: 36,
            height: 12,
          },
        ],
      },
      {
        title: "Database Management",
        description: (
          <>
          I implement relational databases using foreign keys to establish integrity and relationships between 
          different tables, ensuring data consistency and an organized structure. In addition, I manage non-relational 
          databases by applying the methods and practices associated with them, allowing for flexibility and scalability 
          according to project requirements.
          </>
        ),
        tags: [
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
        ],
        images: [
          {
            src: "/images/projects/project-02/imagen4.jpg",
            alt: "Project image",
            width: 36,
            height: 12,
          },
        ],
      },
      {
        title: "Analytics Dashboard",
        description: (
          <>
          I perform descriptive analysis implementations in the context of Business Intelligence, 
          developing interactive dashboards that allow key data to be visualized and relevant patterns or 
          trends to be discovered for decision-making. These dashboards include metrics and indicators customized 
          according to business requirements, facilitating real-time monitoring and the generation of actionable 
          insights. In addition, I apply basic and advanced statistical techniques to analyze the information 
          collected in order to identify relationships, anomalies, and opportunities for improvement, ensuring 
          that proposals and conclusions are supported by solid data that is understandable to the different teams 
          within the organization.
          </>
        ),
        tags: [
          {
            name: "PowerBI",
            icon: "powerbi",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "RStudio",
            icon: "r",
          }
        ],
        images: [
          {
            src: "/images/projects/project-02/imagen3.jpg",
            alt: "Project image",
            width: 36,
            height: 12,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, blog, work };
