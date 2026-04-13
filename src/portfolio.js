import React from "react";

/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true,
};

// SEO Related settings
const seo = {
  title: "Vishal Junghare's Portfolio",
  description:
    "AWS-certified Java developer with 4 years of experience building scalable microservices, secure enterprise solutions, and cloud automation.",
  og: {
    title: "Vishal Junghare Portfolio",
    type: "website",
    url: "https://portfolio-vishal-junghare.vercel.app/",
  },
};

// Home Page
const greeting = {
  title: "Vishal Junghare",
  logo_name: "VishalJunghare",
  nickname: "backend_engineer",
  subTitle:
    "AWS-Certified Java Developer with 4 years of experience building scalable microservices, secure enterprise solutions for telecom clients, and cloud automation. Skilled in Spring Boot, RESTful APIs, AWS, and policy-as-code automation with a strong focus on maintainability, security, and business impact.",
  resumeLink:
    "https://drive.google.com/file/d/1RsoWIo2fpRE1joYaiEC6AuJeWnMZi8gj/view?usp=sharing",
  githubProfile: "https://github.com/Vishalvj13",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Vishalvj13",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vishal-junghare-vj",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Medium",
    link: "https://medium.com/@vishal_13_",
    fontAwesomeIcon: "fa-medium",
    backgroundColor: "#12100E",
  },
  {
    name: "Gmail",
    link: "mailto:vjunghare812@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vishal_13_?igsh=MWc5eWdpdGFhanBpNw==",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building scalable microservices and enterprise applications using Java, Spring Boot, Spring MVC, Hibernate/JPA, and REST APIs",
        "⚡ Designing customer, order, and billing workflows for telecom and enterprise systems with a strong focus on performance and maintainability",
        "⚡ Writing secure and testable backend code with JUnit, Postman-based integration testing, and production issue debugging",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: { color: "#59666C" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
      ],
    },
    {
      title: "Cloud & Security Automation",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Managing AWS cloud security and governance with policy-as-code, remediation workflows, and audit-ready automation",
        "⚡ Working with IAM, S3, CloudTrail, VPCs, Security Groups, and AWS Config findings to reduce risk and improve least-privilege access",
        "⚡ Integrating security and compliance workflows into CI/CD pipelines for automated reporting, error handling, and enforcement",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: { color: "#D24939" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
      ],
    },
    {
      title: "Databases, Tools & Delivery",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Working with MySQL and MongoDB for application persistence, troubleshooting, and performance improvements in production systems",
        "⚡ Using Maven, Jira, Perforce, Octane, and Agile/Scrum practices across delivery, testing, and release workflows",
        "⚡ Improving deployment reliability and engineering efficiency through CI/CD, automation, and debugging across environments",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: { color: "#C71A36" },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: { color: "#0052CC" },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "simple-icons:bitbucket",
          style: { color: "#0052CC" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#FCC624" },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "DesignImg",
      skills: [
        "⚡ Building end-to-end applications by connecting React frontends with Java and Spring Boot backend services",
        "⚡ Developing responsive UI flows, form handling, API integration, and role-based user interactions for practical business use cases",
        "⚡ Working comfortably across frontend and backend layers for bug fixing, feature delivery, and production issue troubleshooting",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "REST API",
          fontAwesomeClassname: "mdi:api",
          style: { color: "#0F172A" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: { color: "#181717" },
      profileLink: "https://github.com/Vishalvj13",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: { color: "#0A66C2" },
      profileLink: "https://www.linkedin.com/in/vishal-junghare-vj",
    },
    {
      siteName: "Medium",
      iconifyClassname: "simple-icons:medium",
      style: { color: "#121212" },
      profileLink: "https://medium.com/@vishal_13_",
    },
    {
      siteName: "Credly",
      iconifyClassname: "simple-icons:credly",
      style: { color: "#FF6B00" },
      profileLink: "https://www.credly.com/users/vishal-junghare",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SunBeam Institute of Information Technology, Pune",
      subtitle: "PG-Diploma in Advanced Computing",
      logo_path: "sunbeam_logo.png",
      alt_name: "SunBeam Institute of Information Technology",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Completed PG-DAC with a strong focus on advanced computing, application development, and industry-ready software engineering practices.",
        "⚡ Built hands-on projects across Java, Spring Boot, APIs, databases, and full-stack development during the program.",
        "⚡ Graduated with 74.00%.",
      ],
      website_link: "https://www.sunbeaminfo.com/",
    },
    {
      title: "St. Vincent Pallotti College of Engineering and Technology, Nagpur",
      subtitle: "Bachelor of Engineering",
      logo_path: "svpcet_logo.png",
      alt_name: "SVPCET Nagpur",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Built a strong foundation in software engineering, data structures, databases, operating systems, and programming fundamentals.",
        "⚡ Developed the problem-solving and technical base that later shaped my work in backend engineering and cloud systems.",
        "⚡ Graduated with CGPA 8.52.",
      ],
      website_link: "https://www.stvincentngp.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Developer - Associate",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_dva.png",
      certificate_link:
        "https://www.credly.com/badges/3d8c0290-02a1-4998-b922-5c0b74e1b819/public_url",
      alt_name: "AWS",
      color_code: "#FF990099",
    },
    {
      title: "AWS Solutions Architect - Associate",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_saa.png",
      certificate_link:
        "https://www.credly.com/badges/a3f78562-dc4d-4cfd-8ad6-353e1c2c7e18/public_url",
      alt_name: "AWS",
      color_code: "#232F3E99",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_practitioner.png",
      certificate_link:
        "https://www.credly.com/badges/0b298bc1-6a33-45f2-9882-18abf4f931fc/public_url",
      alt_name: "AWS",
      color_code: "#FF990099",
    },
    {
      title: "ISC2 Certified in Cybersecurity",
      subtitle: "- ISC2",
      logo_path: "isc2_cc.png",
      certificate_link: "https://www.credly.com/users/vishal-junghare",
      alt_name: "ISC2",
      color_code: "#005A9C99",
    },
    {
      title: "GitHub Foundations",
      subtitle: "- GitHub / Microsoft Learn",
      logo_path: "github_foundation.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/vishaljunghare-5555/credentials/e69e282efd095b2a",
      alt_name: "GitHub Foundations",
      color_code: "#17151599",
    },
    {
      title: "Master Microservices with Spring Boot and Spring Cloud",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link: "https://www.udemy.com/",
      alt_name: "Udemy",
      color_code: "#A435F099",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "I work across backend engineering, cloud governance, and security automation. My recent work spans enterprise AWS compliance, remediation tooling, telecom CRM systems, secure APIs, and scalable microservices delivered in Agile environments.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer - 2",
          company: "GlobalLogic",
          company_url: "https://www.globallogic.com/",
          logo_path: "globallogic_logo.png",
          duration: "Jun 2025 - Present",
          location: "Pune, India",
          description: (
            <ul className="experience-bullets">
              <li>
                Managed security and governance of enterprise AWS cloud infrastructure, helping maintain compliance with organizational policies and security standards.
              </li>
              <li>
                Analyzed threat reports and security findings to identify misconfigurations and policy violations across AWS services, reducing systemic risk exposure.
              </li>
              <li>
                Implemented policy-as-code solutions to automate compliance checks and enforce cloud security standards at scale.
              </li>
              <li>
                Architected automated remediation tools for the enterprise CSPM toolkit, including a high-performance validation engine that reduced API calls by 95% through resource grouping optimization.
              </li>
              <li>
                Integrated remediation and reporting workflows into CI/CD pipelines with JIRA reporting and robust error handling for auditable enterprise automation.
              </li>
            </ul>
          ),
          color: "#1D4ED8",
        },
        {
          title: "Software Developer",
          company: "Amdocs Pvt Ltd",
          company_url: "https://www.amdocs.com/",
          logo_path: "amdocs_logo.png",
          duration: "May 2022 - Apr 2025",
          location: "Pune, India",
          description: (
            <ul className="experience-bullets">
              <li>Promoted from Associate Software Engineer to Software Developer within 1.5 years.</li>
              <li>
                Designed and developed scalable microservices using Java and Spring Boot, improving system performance by up to 20%.
              </li>
              <li>
                Built secure RESTful APIs for Customer, Order, and Billing Management with reliable integration across payment, credit, and inventory systems.
              </li>
              <li>
                Streamlined build and deployment workflows using Maven and Jenkins, reducing manual errors and improving release speed.
              </li>
              <li>
                Improved performance of core telecom services by refactoring database queries, implementing caching mechanisms, and reducing latency by 15%.
              </li>
              <li>
                Collaborated with QA, DevOps, and Infra teams in an Agile Scrum environment and strengthened pre-production bug detection through JUnit and Postman-based testing.
              </li>
            </ul>
          ),
          color: "#7C3AED",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects focus on backend engineering, cloud deployment, and practical full-stack implementations using Java, Spring Boot, React, MySQL, AWS, and microservices architecture.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "A mix of technical writing, backend interview notes, and architecture-focused articles.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "backend-part-1-alepo",
      name: "Backend Interview Experience - Alepo Technologies",
      createdAt: "2025-07-30T00:00:00Z",
      description:
        "A real interview-experience article covering Java, Spring Boot, and backend fundamentals from an actual hiring process.",
      url: "https://medium.com/@vishal_13_/what-they-asked-me-real-interview-questions-as-a-backend-developer-part-1-alepo-technologies-9b4fab43c70b",
    },
    {
      id: "bigdecimal-financial",
      name: "Why BigDecimal is Preferred Over double in Financial Calculations",
      createdAt: "2025-08-09T00:00:00Z",
      description:
        "A concept-focused Java article explaining precision, rounding, and why BigDecimal is the safer choice for financial logic.",
      url: "https://medium.com/@vishal_13_/why-is-bigdecimal-preferred-over-double-in-financial-calculations-18585891c139",
    },
    {
      id: "fullstack-part-6-infosys",
      name: "Full Stack Interview Experience - Infosys",
      createdAt: "2025-08-04T00:00:00Z",
      description:
        "A full-stack focused article spanning Spring Boot backend discussions along with JavaScript and React interview topics.",
      url: "https://medium.com/%40vishal_13_/what-they-asked-me-real-interview-questions-as-a-full-stack-developer-part-6-infosys-a9e5efe12254",
    },
    {
      id: "microservices-case-study",
      name: "Spring Boot Microservices Project Case Study",
      createdAt: "2024-01-01T00:00:00Z",
      description:
        "A project-focused case study around service discovery, Feign communication, and API Gateway routing in a Spring Boot microservices setup.",
      url: "https://github.com/Vishalvj13/microservices-spring-boot",
    },
    {
      id: "aws-deployment-walkthrough",
      name: "AWS Deployment Walkthrough for React + Spring Boot",
      createdAt: "2024-05-01T00:00:00Z",
      description:
        "A cloud deployment walkthrough covering how a React frontend and Spring Boot backend can be hosted using core AWS services.",
      url: "https://github.com/Vishalvj13/reat.js-springboot-mysql-aws-deployment",
    },
    {
      id: "hospital-management-project",
      name: "Hospital Management System Project Overview",
      createdAt: "2022-03-01T00:00:00Z",
      description:
        "A product-style overview of a full-stack hospital management application built with React, Spring Boot, JPA, and MySQL.",
      url: "https://github.com/Vishalvj13/hospital-management-system",
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vishal_contact.png",
    description:
      "I am available on GitHub, LinkedIn, Medium, email, and Credly. You can reach out for backend engineering roles, Java/Spring Boot opportunities, AWS and cloud security work, collaborations, or technical discussions.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document real interview experiences, backend concepts, and practical engineering learnings through concise technical writing.",
    link: "https://medium.com/@vishal_13_",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Pune, Maharashtra 411028, India",
    locality: "Pune",
    country: "India",
    region: "Maharashtra",
    postalCode: "411028",
    streetAddress: "Pune",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Pune,Maharashtra,India",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 8975549109",
  },
};



export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
