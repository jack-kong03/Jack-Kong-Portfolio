import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, github, demo }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(59,130,246,0.30)" }}
    className="p-6 rounded-xl border border-white/10 bg-slate-900/40 transition-transform duration-300"
  >
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>

    <div className="flex gap-3 mb-4">
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white py-2 px-4 rounded font-medium text-sm hover:bg-blue-600 transition-colors"
      >
        Live Demo
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-800 text-white py-2 px-4 rounded font-medium text-sm hover:bg-slate-900 transition-colors"
      >
        GitHub
      </a>
    </div>

    <div className="flex flex-wrap gap-2">
      {tech.map((techItem, key) => (
        <span
          key={key}
          className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all"
        >
          {techItem}
        </span>
      ))}
    </div>
  </motion.div>
);

const projectsData = [
  {
    title: "AI Finance Pipeline",
    description:
      "End-to-end AI-powered personal finance automation pipeline that ingests receipts via email or Google Drive. Uses OCR to extract data and OpenAI APIs to clean and structure it into JSON, stored and processed through Azure. Generates automated spending summaries and visualisations with Matplotlib and emails them back to the user. Reduced manual data entry by around 90% using an automated OCR + Azure pipeline.",
    tech: ["Python", "Azure", "OpenAI", "OCR", "Matplotlib"],
    github: "https://github.com/jack-kong03",
    demo: "https://jack-kong03.github.io",
  },
  {
    title: "Cloud-Native Student Registration System",
    description:
      "Cloud-native student registration system supporting real-time course enrolment, student profiles, and automated notifications. Built using a monolithic architecture with REST APIs and CI/CD pipelines for streamlined deployment on Azure. Improved processing speed by around 40% and enhanced reliability through automated CI/CD and testing.",
    tech: ["Python", "Node.js", "HTML", "CSS", "Django", "Azure", "MySQL", "REST API"],
    github: "https://github.com/jack-kong03",
    demo: "https://jack-kong03.github.io",
  },
  {
    title: "Population Prediction & Sentiment Analysis",
    description:
      "Machine learning system built on a population dataset from Kaggle with over 1,000 data points. Used Pandas for data cleaning and applied models including linear regression and a custom genetic algorithm to predict future population growth. Implemented a sentiment model to classify regions as positive (growth) or negative (decline) and visualised results with Matplotlib and Tableau. Achieved around 95% accuracy on the sentiment classification task.",
    tech: [
      "Python",
      "Pandas",
      "Machine Learning",
      "Linear Regression",
      "Genetic Algorithm",
      "Sentiment Analysis",
      "Matplotlib",
      "Tableau",
    ],
    github: "https://github.com/jack-kong03",
    demo: "https://jack-kong03.github.io",
  },
  {
    title: "Sales Data Mart & ETL Pipeline",
    description:
      "Sales data mart with an automated ETL pipeline aggregating data from multiple sources. Used Apache Airflow for workflow orchestration and built data quality checks to ensure reliable downstream analytics. Enabled fast, consistent sales reporting for stakeholders, improving data accuracy by around 95% and reducing reporting time by roughly 50%.",
    tech: ["Python", "SQL", "Tableau", "Pandas", "Matplotlib"],
    github: "https://github.com/jack-kong03",
    demo: "https://jack-kong03.github.io",
  },
  {
    title: "Smart Parking System with IoT",
    description:
      "Smart parking system using Raspberry Pi and ultrasonic sensors to monitor parking occupancy in real time. Sends sensor data to Azure IoT Central, where a live dashboard visualises available and occupied spaces. Demonstrates end-to-end IoT integration from hardware to cloud dashboards for smart city use cases, improving parking utilisation and reducing search time for spaces.",
    tech: ["Raspberry Pi", "Python", "Azure IoT Central", "Sensors", "Dashboard"],
    github: "https://github.com/jack-kong03",
    demo: "https://jack-kong03.github.io",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-slate-950"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                demo={project.demo}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
