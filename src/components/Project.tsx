import React from "react";
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://geez-editor.vercel.app/" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://geez-editor.vercel.app/" target="_blank" rel="noreferrer"><h2>Geez Collaborative Editor</h2></a>
                <p>Engineered a slate-based rich text editor for real-time collaboration in team environment using Operational CRDT.</p>
            </div>
            <div className="project">
                <a href="https://github.com/souviks22/sentiment-analysis" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/souviks22/sentiment-analysis" target="_blank" rel="noreferrer"><h2>Sentiment Analysis Model</h2></a>
                <p>Developed a deep learning model to recognize positive and negative sentiments through text using LSTM and CNN.</p>
            </div>
            <div className="project">
                <a href="https://sorting-visualization-rosy.vercel.app/" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sorting-visualization-rosy.vercel.app/" target="_blank" rel="noreferrer"><h2>Sorting Visualizer</h2></a>
                <p>Visualized fundamental sorting algorithms with a granular step-by-step approach using Next.js</p>
            </div>
            <div className="project">
                <a href="https://github.com/souviks22/bottleneck-native" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/souviks22/bottleneck-backend" target="_blank" rel="noreferrer"><h2>Bottleneck: Integrated Learning Platform</h2></a>
                <p>Created a mobile application providing high-quality, data stucture and algorithms focused learning resources using React Native.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;