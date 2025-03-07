import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Data Structures",
    "Algorithms",
    "DBMS",
    "Object Oriented Programming",
    "Operating Systems",
    "TCP/IP",
    "SDLC",
    "React",
    "Spring",
    "Express"
];

const labelsSecond = [
    "Microservices",
    "API Design",
    "Load Balancing",
    "Database Design",
    "CDNs",
    "Caching",
    "Spark",
    "Kafka",
    "Redis",
    "AWS",
    "Git",
    "Docker",
];

const labelsThird = [
    "Data Analytics",
    "Regression",
    "Classification",
    "Maximum Likelihood",
    "Random Forest",
    "Clustering",
    "ANN",
    "Gradient Descent",
    "NLP",
    "Big Data"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Technical Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Computer Science</h3>
                    <p>Deep understanding of optimization algorithms in the realm of problem-solving. Tremendous implementation skills in C++, Java, Python, JavaScript, and SQL programming languages.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Areas:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>System Design</h3>
                    <p>I can efficiently design large software systems from scratch meeting tight quality benchmarks. I make sure the features are highly available and horizontally scalable for smooth experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Areas:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning</h3>
                    <p>Comprehensive knowledge of mathematical models and machine learning algorithms. Hands-on experience on deep neural networks combined with natural language processing activities.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Areas:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;