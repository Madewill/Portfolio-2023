import React from 'react';
import { BallCanvas } from './canvas';
import SectionWrapper from '../hoc/SectionWrapper'; // Correct import path
import { technologies } from '../constants.js';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-20'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, ""); // Corrected the usage of SectionWrapper
