import React, { useState } from 'react'; // Import useState from React
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { sectionWrapper } from '../hoc';
import { certification } from '../constants.js';
import { fadeIn, textVariant } from '../utils/motion';

import 'jquery'; // Import jQuery
import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import '@fancyapps/fancybox';



const ProjectCard = ({ index, image }) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[360px]'>
                    <a
                        href={image}
                        data-fancybox='images'
                        data-caption={`Project ${index + 1}`}
                        className='w-full h-full object-cover rounded-2xl cursor-pointer'
                    >
                        <img
                            src={image}
                            alt={`Project ${index + 1}`}
                            className='w-full h-full object-cover rounded-2xl cursor-pointer'
                        />
                    </a>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Achievements</p>
                <h2 className={styles.sectionHeadText}>Certifications.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >

                    Elevate your confidence in my skills and expertise by exploring a selection of my well-earned certifications and notable achievements. These credentials represent my commitment to continuous learning, dedication to excellence, and the ability to tackle real-world challenges with precision.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {certification.map((project, index) => (
                    <ProjectCard key={`certification-${index}`} index={index} image={project.image} />
                ))}
            </div>
        </>
    );
};

export default sectionWrapper(Works, 'works');