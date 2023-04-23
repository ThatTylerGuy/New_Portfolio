import React from 'react';
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full bg-gradient-to-r from-indigo-500 to-purple-500 p-[1px] rounded-[20px] shadow-card'>
        <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
     </motion.div>
     
     <motion.p variants={fadeIn("","", 0.1, 1)} className='mt-4 text-secondary tex-[17px] max-w-3xl leading-[30px]'>
      I am a computer science student with Colorado State University Global, as well as an experienced software developer and aspiring Youtube entertainer with a passion for creating enticing coding projects. Not only do I have valuable experience with web and coding technologies,
      but I am also a fast and efficient learner, which allows me to keep up with the ever evolving world of web development. I am extremely eager to work with clients like you to bring your ideas to life! Allow me to
      learn from and grow your buisness to levels that you never thought possible!
     </motion.p>

     <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={ index } {...service} />
      ))}
     </div>


    </>
  )
}

export default SectionWrapper(About, "about")