import React from 'react';
import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc'
import {technologies} from "../constants";
import {styles} from "../styles.js";
import {softSkills} from "../constants/index.js";



const Tech = () => {
  return (
      <>
      <p className={styles.sectionHeadText}> Hard Skills</p>
      <div className='flex flex-row mt-5 flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
        ))}
      </div>
          <div  className='mt-20'>
              <p className={styles.sectionHeadText}> Soft Skills</p>
              {softSkills.map((skill) => <li className='mt-3 text-secondary text-[20px] max-w-5xl leading-[30px]'>{skill.skill}</li>)

              }
          </div>
      </>
  )
}

export default SectionWrapper(Tech, '')