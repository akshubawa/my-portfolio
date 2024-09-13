import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt={`${service.title} icon`}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white px-4 sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Professional Profile</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              Greetings, I'm <a href="https://www.linkedin.com/in/akshay-negi-86b617252/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300'>Akshay Negi</a>, a results-driven <a href="https://github.com/akshubawa" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300'>Native Application developer</a> with a strong foundation in Data Structures, OOPs, and a keen interest in machine learning. Currently excelling as a Senior Mobile Application Developer at <a href="https://www.rakshakcode.com/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300'>Digital Work India</a>, Noida, where I lead the development of innovative mobile applications.

              <ul className="list-disc list-inside mt-2">
                <li><strong>Mobile Development:</strong> Proficient in <Link to="https://flutter.dev/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300'>Flutter</Link> and Android Studio (Java) for cross-platform and native Android applications</li>
                <li><strong>Frontend Expertise:</strong> Skilled in developing scalable and responsive frontend components, optimizing performance, and implementing intuitive UI/UX designs</li>
                <li><strong>API Integration:</strong> Experience in integrating RESTful APIs to enhance app functionality</li>
                <li><strong>Machine Learning:</strong> Keen interest and experience in developing ML models, as demonstrated in the<a href="https://github.com/akshubawa/NotSoPhishy" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300'>"Not So Phishy"</a> project</li>
              </ul>

              I am committed to delivering high-performance, user-centric mobile applications that align with company branding and user needs. My goal is to contribute to innovative projects that push the boundaries of mobile technology and user experience.
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1MlyzKpJuFAb5dRcPekvnLlphwyKcirnl/view?usp=sharing'
              text='View Comprehensive Resume →'
              padding={`p-3`}
            />
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;