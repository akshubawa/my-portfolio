import React, { useState } from "react";
import Footer from './Footer';
// Import images centrally
import notSoPhishyImage from '../assets/projects-images/not-so-phishy.png';
import metromateImage from '../assets/projects-images/metromate.png';
import rakshakImage from '../assets/projects-images/rakshak-code.png';
import shortestRouteFinderImage from '../assets/projects-images/shortest-route-finder.png';
import donativeImage from '../assets/projects-images/donative.png';
import checkpointImage from '../assets/projects-images/checkpoint.png';
import shareWheelImage from '../assets/projects-images/share-wheel.png';
import pdfGeneratorImage from '../assets/projects-images/pdf-generator.png';
import aquaCheckImage from '../assets/projects-images/aqua-check.png';
import asclepiusImage from '../assets/projects-images/asclepius.png';

// You can define the image paths for each project here
const projectImages = {
    'Not So Phishy': notSoPhishyImage,
    'Metromate': metromateImage,
    'Rakshak Code': rakshakImage,
    'Shortest Route Finder': shortestRouteFinderImage,
    'Donative': donativeImage,
    'Checkpoint': checkpointImage,
    'Share Wheel': shareWheelImage,
    'PDF Generator': pdfGeneratorImage,
    'Aqua Check': aquaCheckImage,
    'Asclepius': asclepiusImage,
};

const ProjectCard = ({ title, description, git, technologies }) => {
    const [imageError, setImageError] = useState(false);
    const image = projectImages[title]; // Get the correct image from the object

    const handleImageError = () => {
        console.error(`Failed to load image for project: ${title}`);
        setImageError(true);
    };

    return (
        <div className="w-full bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between overflow-hidden">
            <div className="relative h-48 sm:h-56 md:h-64 bg-gray-700">
                {!imageError ? (
                    <img 
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                        {title[0].toUpperCase()}
                    </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a href={git} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded">
                        View on GitHub
                    </a>
                </div>
            </div>
            <div className="p-4 sm:p-6 flex-grow">
                <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500 mb-4">{title}</h5>
                <p className="font-normal text-sm sm:text-base text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 flex flex-wrap gap-2 justify-start items-center'>
                {technologies.map((tag, index) => (
                    <span
                        key={`${index}-${tag}`}
                        className='text-xs sm:text-sm text-blue-500 bg-blue-500 bg-opacity-10 px-2 py-1 rounded-full'
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'Not So Phishy',
            description: 'Developed an advanced Machine Learning model utilizing Random Forest Classifier to detect phishing websites. The model is trained on a comprehensive dataset of 11,000+ entries with 32 parameters, providing robust protection against online threats.',
            git: 'https://github.com/akshubawa//notSoPhishy',
            technologies: ['Machine Learning', 'Flask', 'Random Forest'],
        },
        {
            title: 'Metromate',
            description: 'Engineered an Android application for efficient Delhi Metro route planning. Implemented sophisticated graph algorithms to calculate optimal paths, enhancing user navigation and reducing travel time.',
            git: 'https://github.com/akshubawa/metromate',
            technologies: ['Java', 'Android Studio', 'Graph Algorithms'],
        },
        {
            title: 'Rakshak Code',
            description: 'Designed a cross-platform application focused on automobile and road safety. Integrated QR Code and NFC technologies to establish seamless, contactless connections between users and vehicle owners during emergencies.',
            git: 'https://github.com/akshubawa/rakshak-code',
            technologies: ['Flutter', 'QR Code', 'NFC'],
        },
        {
            title: 'Shortest Route Finder',
            description: 'Developed a backend for finding shortest route of Delhi Metro using graphs and also developed FastAPI of it.',
            git: 'https://github.com/akshubawa/MetroMateAPI',
            technologies: ['Python', 'FastAPI', 'Graphs'],
        },
        {
            title: 'Donative',
            description: 'Developed a cross-platform Flutter application for medical crowdfunding. Implemented a zero-commission model to maximize financial support for patients with severe diseases, facilitating accessible healthcare funding.',
            git: 'https://github.com/akshubawa/donative',
            technologies: ['Flutter', 'Crowdfunding'],
        },
        {
            title: 'Checkpoint',
            description: 'Engineered a native mobile application for geolocation-based attendance tracking. Leveraged GPS technology to provide accurate, real-time employee location data, enhancing workforce management and operational efficiency.',
            git: 'https://github.com/akshubawa/checkpoint',
            technologies: ['Flutter', 'Geolocation', 'Firebase'],
        },
        {
            title: 'Share Wheel',
            description: 'Developed an android mobile application for Car pooling for universities, societies, and schools.',
            git: 'https://github.com/akshubawa/checkpoint',
            technologies: ['Android Studio', 'Java', 'Firebase'],
        },
        {
            title: 'PDF Generator',
            description: 'Created a functioning native mobile application for generating PDF of bills and quotations just by filling the required values in your own template.',
            git: 'https://github.com/akshubawa/checkpoint',
            technologies: ['Flutter', 'Firebase'],
        },
        {
            title: 'Aqua Check',
            description: 'Developed a Machine Learning Model for predicting whether the water is potable or not. The dataset contains 3276 records and 9 columns, including pH, Hardness, Solids, Chloramines, Sulfate, Conductivity, Organic_carbon, Trihalomethanes, and Potability.',
            git: 'https://github.com/akshubawa/checkpoint',
            technologies: ['Machine Learning', 'Python'],
        },
        {
            title: 'Asclepius',
            description: "Asclepius is a medical record management system for the students of Bennett University. It is a desktop application built using Python and Custom Tkinter.",
            git: 'https://github.com/akshubawa/asclepius',
            technologies: ['Python', 'Custom Tkinter'],
        }
    ];

    return (
        <div className="bg-black min-h-screen pt-20"> {/* Added pt-20 for top padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-12">
                    {projects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            git={item.git}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;
