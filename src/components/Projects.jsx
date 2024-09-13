import React from "react";
import Footer from './Footer'

const ProjectCard = ({ title, description, git, technologies }) => {
    return (
        <div className="w-full sm:w-80 md:w-96 bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <div className="p-4 sm:p-6">
                <a href={git} target="_blank" rel="noopener noreferrer">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500 mb-4">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between items-end'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} target="_blank" rel="noopener noreferrer" className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center m-12 p-12">
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
            <Footer/>
        </div>
    );
}

export const projects = [
    {
        title: 'Not So Phishy',
        description: 'Developed an advanced Machine Learning model utilizing Random Forest Classifier to detect phishing websites. The model is trained on a comprehensive dataset of 11,000+ entries with 32 parameters, providing robust protection against online threats.',
        git: 'https://github.com/akshayknz/not-so-phishy',
        technologies: ['Machine Learning', 'Flask', 'Random Forest']
    },
    {
        title: 'Metromate',
        description: 'Engineered an Android application for efficient Delhi Metro route planning. Implemented sophisticated graph algorithms to calculate optimal paths, enhancing user navigation and reducing travel time.',
        git: 'https://github.com/akshayknz/metromate',
        technologies: ['Java', 'Android Studio', 'Graph Algorithms']
    },
    {
        title: 'Rakshak Code',
        description: 'Designed a cross-platform application focused on automobile and road safety. Integrated QR Code and NFC technologies to establish seamless, contactless connections between users and vehicle owners during emergencies.',
        git: 'https://github.com/akshayknz/rakshak-code',
        technologies: ['Flutter', 'QR Code', 'NFC']
    },
    {
        title: 'Donative',
        description: 'Developed a cross-platform Flutter application for medical crowdfunding. Implemented a zero-commission model to maximize financial support for patients with severe diseases, facilitating accessible healthcare funding.',
        git: 'https://github.com/akshayknz/donative',
        technologies: ['Flutter', 'Crowdfunding']
    },
    {
        title: 'Checkpoint',
        description: 'Engineered a native mobile application for geolocation-based attendance tracking. Leveraged GPS technology to provide accurate, real-time employee location data, enhancing workforce management and operational efficiency.',
        git: 'https://github.com/akshayknz/checkpoint',
        technologies: ['React Native', 'Geolocation', 'Firebase']
    }
];

export default Projects;