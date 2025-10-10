import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold mb-2">AI Finance Pipeline</h3>
                    <p className="text-gray-400 mb-4">
                        Built an end-to-end AI-powered personal finance automation system that allows users to simply upload receipts via email or Google Drive. 
                        The system uses OCR to extract transaction data, and OpenAI’s API to clean and structure it into JSON.
                        The data is then stored in Azure IoT Hub, automatically processed into email reports containing spending summaries and visualizations generated with Matplotlib, and sent back to the user. 
                        The entire pipeline is fully automated, providing a seamless, intelligent financial management experience.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "Azure", "OpenAI", "OCR", "Matplotlib"].map((tech, key) => (
                            <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-lg transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                    <a
                        href="#"
                        className="text-blue-500 hover:text-blue-300 transition-colors my-4">
                        View Project →
                    </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold mb-2">Cloud-Native Student Registration System</h3>
                    <p className="text-gray-400 mb-4">
                        Developed a scalable cloud-native student registration system using monolithic architecture. 
                        The system supports real-time course enrollment, student profile management, and automated notifications. 
                        Leveraged REST API and implemented CI/CD pipelines for streamlined deployment.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "Node.js", "HTML", "CSS", "Django", "Azure", "MySQL", "REST API"].map((tech, key) => (
                            <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-lg transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                    <a
                        href="#"
                        className="text-blue-500 hover:text-blue-300 transition-colors my-4">
                        View Project →
                    </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold mb-2">Population Prediction & Sentiment Analysis</h3>
                    <p className="text-gray-400 mb-4">
                        Built a machine learning system using a population dataset from Kaggle with over 1,000 data points. 
                        Cleaned and prepared the dataset using Pandas before applying multiple ML models, including linear regression and a genetic mutation algorithm, to predict future population growth across locations. 
                        A sentiment analysis model was also implemented to classify regions as experiencing positive (growth) or negative (decline) trends based on prediction results. 
                        The processed data was visualized using Matplotlib and Tableau to provide clear insights into population dynamics.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "Pandas", "Machine Learning", "Linear Regression", "Genetic Algorithm", "Sentiment Analysis", "Matplotlib", "Tableau"].map((tech, key) => (
                            <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-lg transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                    <a
                        href="#"
                        className="text-blue-500 hover:text-blue-300 transition-colors my-4">
                        View Project →
                    </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold mb-2">Sales Data Mart & ETL Pipeline</h3>
                    <p className="text-gray-400 mb-4">
                        Created a robust sales data mart integrated with an automated ETL pipeline to aggregate data from multiple sources. 
                        Utilized Apache Airflow for workflow orchestration and implemented data quality checks to ensure accuracy. 
                        The solution enables comprehensive sales analytics and reporting for business stakeholders.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "SQL", "Tableau", "Pandas", "Matplotlib"].map((tech, key) => (
                            <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-lg transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                    <a
                        href="#"
                        className="text-blue-500 hover:text-blue-300 transition-colors my-4">
                        View Project →
                    </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold mb-2">Smart Parking System with IoT</h3>
                    <p className="text-gray-400 mb-4">
                        Designed and developed a smart parking system using a Raspberry Pi and ultrasonic distance sensors to monitor parking spot occupancy in real time. 
                        Each sensor detects whether a car is present and sends the data to Azure IoT Central, where a live dashboard visualizes available and occupied spaces. 
                        This project demonstrates the integration of IoT hardware, cloud-based data processing, and interactive dashboards for smart city applications.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Raspberry Pi", "Python", "Azure IoT Central", "Sensors", "Dashboard"].map((tech, key) => (
                            <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-lg transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                    <a
                        href="#"
                        className="text-blue-500 hover:text-blue-300 transition-colors my-4">
                        View Project →
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}