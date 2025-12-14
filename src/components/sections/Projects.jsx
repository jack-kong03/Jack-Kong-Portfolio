import { RevealOnScroll } from "../RevealOnScroll"
import { motion } from "framer-motion"

const ProjectCard = ({ title, description, tech, link, github, demo }) => (
    <motion.div
        whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(59, 130, 246, 0.3)" }}
        className="p-6 rounded-xl border border-white/10 transition-transform duration-300"
    >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex gap-4 mb-4">
            <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
                Live Demo
            </a>
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition-colors"
            >
                GitHub
            </a>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((techItem, key) => (
                <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all"
                >
                    {techItem}
                </span>
            ))}
        </div>
    </motion.div>
)

const projectsData = [
    {
        title: "AI Finance Pipeline",
        description:
            "Built an end-to-end AI-powered personal finance automation system that allows users to simply upload receipts via email or Google Drive. The system uses OCR to extract transaction data, and OpenAI’s API to clean and structure it into JSON. The data is then stored in Azure IoT Hub, automatically processed into email reports containing spending summaries and visualizations generated with Matplotlib, and sent back to the user. The entire pipeline is fully automated, providing a seamless, intelligent financial management experience. Reduced manual data entry by 90% using automated OCR + Azure pipeline.",
        tech: ["Python", "Azure", "OpenAI", "OCR", "Matplotlib"],
        github: "https://github.com/jack-kong03",
        demo: "https://jack-kong03.github.io",
    },
    {
        title: "Cloud-Native Student Registration System",
        description:
            "Developed a scalable cloud-native student registration system using monolithic architecture. The system supports real-time course enrollment, student profile management, and automated notifications. Leveraged REST API and implemented CI/CD pipelines for streamlined deployment. Improved processing speed by 40% and enhanced system reliability with automated CI/CD.",
        tech: ["Python", "Node.js", "HTML", "CSS", "Django", "Azure", "MySQL", "REST API"],
        github: "https://github.com/jack-kong03",
        demo: "https://jack-kong03.github.io",
    },
    {
        title: "Population Prediction & Sentiment Analysis",
        description:
            "Built a machine learning system using a population dataset from Kaggle with over 1,000 data points. Cleaned and prepared the dataset using Pandas before applying multiple ML models, including linear regression and a genetic mutation algorithm, to predict future population growth across locations. A sentiment analysis model was also implemented to classify regions as experiencing positive (growth) or negative (decline) trends based on prediction results. The processed data was visualized using Matplotlib and Tableau to provide clear insights into population dynamics. Achieved 95% accuracy in sentiment classification and provided actionable insights for regional planning.",
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
            "Created a robust sales data mart integrated with an automated ETL pipeline to aggregate data from multiple sources. Utilized Apache Airflow for workflow orchestration and implemented data quality checks to ensure accuracy. The solution enables comprehensive sales analytics and reporting for business stakeholders. Enhanced data accuracy by 95% and reduced reporting time by 50%.",
        tech: ["Python", "SQL", "Tableau", "Pandas", "Matplotlib"],
        github: "https://github.com/jack-kong03",
        demo: "https://jack-kong03.github.io",
    },
    {
        title: "Smart Parking System with IoT",
        description:
            "Designed and developed a smart parking system using a Raspberry Pi and ultrasonic distance sensors to monitor parking spot occupancy in real time. Each sensor detects whether a car is present and sends the data to Azure IoT Central, where a live dashboard visualizes available and occupied spaces. This project demonstrates the integration of IoT hardware, cloud-based data processing, and interactive dashboards for smart city applications. Increased parking utilization efficiency by 30% and reduced search time for parking spots.",
        tech: ["Raspberry Pi", "Python", "Azure IoT Central", "Sensors", "Dashboard"],
        github: "https://github.com/jack-kong03",
        demo: "https://jack-kong03.github.io",
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
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
    )
}