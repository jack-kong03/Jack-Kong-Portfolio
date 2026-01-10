import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

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
      whileHover={{ y: -8 }}
      className="group rounded-3xl bg-gray-50 border border-gray-200 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
    >
      <header className="mb-5 space-y-2">
        <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
          {tagline}
        </p>
        <h3 className="text-2xl font-semibold text-gray-900">
          {title}
        </h3>
        {status && (
          <p className={`text-sm font-medium ${getStatusColor(status)}`}>
            {status}
          </p>
        )}
      </header>

      <p className="text-base leading-relaxed text-gray-600 mb-6">
        {description}
      </p>

      <footer className="flex items-center justify-between gap-4 pt-6 border-t border-gray-200">
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
            className="text-gray-900 hover:text-gray-600 font-medium transition-colors text-sm"
          >
            GitHub →
          </a>
        )}
      </footer>
    </motion.article>
  );
};

const projectsData = [
  {
    title: "SnapSpend",
    tagline: "Automated Personal Finance Tracker Application",
    description:
      "A full-stack solution that captures receipts, applies OCR with AI-powered cleanup, and pushes structured spend data into Azure for automated summaries and visual dashboards.",
    techPrimary: ["Python", "Azure", "OpenAI"],
    techExtraCount: 2, // OCR, Matplotlib
    github: "https://github.com/jack-kong03/SnapSpend",
    status: "Complete",
  },
  {
    title: "CourseConnect",
    tagline: "Course Registration Web App",
    description:
    "A cloud-native student registration platform with REST APIs and CI/CD on Azure, enabling real-time enrollment, automated notifications, and comprehensive student profile management.",
  techPrimary: ["Python", "Django", "Azure"],
  techExtraCount: 4, // Node.js, HTML, CSS, MySQL
  github: "https://github.com/jack-kong03",
  status: "Complete",
  },
  {
    title: "Population Insights",
    tagline: "ML · Sentiment",
    description:
      "Population forecasting and sentiment lab using regression and a custom genetic algorithm, with regional growth sentiment classification and visual outputs.",
    techPrimary: ["Python", "Pandas", "ML"],
    techExtraCount: 4, // GA, Sentiment, Matplotlib, Tableau
    github: "https://github.com/jack-kong03",
    status: "Complete",
  },
  {
    title: "GAIA · Discord Bot",
    tagline: "Automated Personal Assistant",
    description:
      "A personal Discord assistant that manages tasks, reminders, API lookups, and mini-games, built with a Python command framework and external data integrations for seamless automation.",
    techPrimary: ["Python", "Discord.py"],
    techExtraCount: 2, // APIs, infrastructure
    github: "https://github.com/jack-kong03/GIA.git",
    status: "Complete",
  },
  {
    title: "Smart Parking IoT",
    tagline: "IoT · Smart cities",
    description:
      "Raspberry Pi and ultrasonic sensors streaming live occupancy into Azure IoT Central, with a dashboard for available spaces and utilisation over time.",
    techPrimary: ["Raspberry Pi", "Python", "Azure IoT"],
    techExtraCount: 2, // Sensors, dashboard
    github: "https://github.com/jack-kong03",
    status: "Prototype",
  },
  {
    title: "StockMark",
    tagline: "ML-powered stock analysis & tracking",
    description:
      "A platform for analysing and tracking stock performance using historical market data and machine learning models. Focused on trend detection, basic price prediction, and visual insights to support data-driven investment decisions.",
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
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight">
              Selected Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A few systems and experiments i have built over the last couple of years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://github.com/jack-kong03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 font-medium transition-colors text-lg"
            >
              View more projects on my GitHub →
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
