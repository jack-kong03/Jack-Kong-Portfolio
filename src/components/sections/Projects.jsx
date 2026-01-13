import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const ProjectCard = ({
  title,
  tagline,
  description,
  techPrimary,
  techExtraCount,
  github,
  status,
}) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "complete":
        return "text-green-600";
      case "in progress":
        return "text-blue-600";
      case "prototype":
        return "text-orange-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      className="group rounded-3xl bg-gray-50 border border-gray-200 p-6 md:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <header className="mb-5 space-y-2 relative z-10">
        <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
          {tagline}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h3>
        {status && (
          <p className={`text-sm font-medium ${getStatusColor(status)}`}>
            {status}
          </p>
        )}
      </header>

      <p className="text-sm md:text-base font-normal leading-relaxed text-gray-600 mb-6 relative z-10">
        {description}
      </p>

      <footer className="flex items-center justify-between gap-4 pt-6 border-t border-gray-200 relative z-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {techPrimary.map((t) => (
            <span key={t} className="font-medium">{t}</span>
          ))}
          {techExtraCount > 0 && (
            <span className="text-gray-400">+ {techExtraCount} more</span>
          )}
        </div>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link text-gray-900 hover:text-gray-600 font-medium transition-all duration-300 text-sm inline-flex items-center gap-1 hover:gap-2"
          >
            GitHub
            <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
          </a>
        )}
      </footer>
    </motion.article>
  );
};

const projectsData = [
  {
    title: "SnapSpend",
    tagline: "Full-Stack Personal Finance Application",
    description:
      "A full-stack web application built with Python that captures receipts, applies OCR (Optical Character Recognition) with AI-powered data cleanup using OpenAI APIs, and integrates with Azure cloud services for automated data processing. Features database management, REST API integration, and interactive data visualization dashboards for personal finance tracking.",
    techPrimary: ["Python", "Azure", "OpenAI"],
    techExtraCount: 2, // OCR, Matplotlib
    github: "https://github.com/jack-kong03/SnapSpend",
    status: "Complete",
  },
  {
    title: "CourseConnect",
    tagline: "Full-Stack Web Application",
    description:
    "A cloud-native full-stack web application built with Python and Django framework, featuring RESTful API development, CI/CD pipeline implementation on Azure, and MySQL database integration. Enables real-time enrollment processing, automated email notifications, and comprehensive student profile management with responsive frontend design.",
  techPrimary: ["Python", "Django", "Azure"],
    techExtraCount: 4, // Node.js, HTML, CSS, MySQL, Git
  github: "https://github.com/jack-kong03",
  status: "Complete",
  },
  {
    title: "Population Insights",
    tagline: "Machine Learning & Data Science",
    description:
      "A data science and machine learning project using Python, Pandas, and Scikit-learn for population forecasting through regression analysis and custom genetic algorithm implementation. Features natural language processing (NLP) for sentiment analysis, regional growth classification models, and data visualization using Matplotlib and Tableau for business intelligence insights.",
    techPrimary: ["Python", "Pandas", "ML"],
    techExtraCount: 4, // GA, Sentiment, Matplotlib, Tableau
    github: "https://github.com/jack-kong03",
    status: "Complete",
  },
  {
    title: "GAIA · Discord Bot",
    tagline: "Backend Development & API Integration",
    description:
      "A personal Discord bot application built with Python and Discord.py framework that manages tasks, reminders, REST API integrations, and interactive mini-games. Demonstrates backend development skills, API integration, event-driven programming, and software automation for seamless user experience.",
    techPrimary: ["Python", "Discord.py"],
    techExtraCount: 2, // APIs, infrastructure
    github: "https://github.com/jack-kong03/GIA.git",
    status: "Complete",
  },
  {
    title: "Smart Parking IoT",
    tagline: "IoT Development & Embedded Systems",
    description:
      "An Internet of Things (IoT) system using Raspberry Pi microcontrollers and ultrasonic sensors, streaming live sensor data to Azure IoT Central cloud platform. Features real-time data processing, cloud integration, and a web dashboard for monitoring parking space availability and utilization analytics over time.",
    techPrimary: ["Raspberry Pi", "Python", "Azure IoT"],
    techExtraCount: 2, // Sensors, dashboard
    github: "https://github.com/jack-kong03",
    status: "Prototype",
  },
  {
    title: "StockMark",
    tagline: "Machine Learning & Data Analytics",
    description:
      "A data science platform for analyzing and tracking stock performance using Python, Pandas for data manipulation, and Scikit-learn machine learning models. Features historical market data processing, API integration for real-time data ingestion, trend detection algorithms, predictive modeling for price forecasting, and data visualization dashboards to support data-driven investment decisions.",
    techPrimary: ["Python", "Pandas", "Scikit-learn"],
    techExtraCount: 3, // Matplotlib, APIs, Data ingestion
    github: "https://github.com/jack-kong03",
    status: "Prototype",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-32 bg-white relative">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="mb-12 md:mb-16 space-y-4 text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight text-shadow-subtle">
              Selected Projects
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of full-stack applications, software projects, and web development experiments I've built using modern programming languages, frameworks, and cloud technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <a
              href="https://github.com/jack-kong03"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 font-medium transition-all duration-300 text-lg transform hover:scale-105"
            >
              View more projects on my GitHub
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
