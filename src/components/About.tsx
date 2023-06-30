import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../higher-order-components';

interface ServiceCardProps {
  idx: number;
  icon: string;
  title: string;
}


const ServiceCard: React.FC<ServiceCardProps> = ({
  idx,
  icon,
  title,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='xs:w-[250px] w-full'
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * idx, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] text-center font-bold'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn()}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm Omar, a Software Engineer with a passion for dynamic and
        creative web development with a previous background in
        technical recruiting. I am someone that loves working on
        challenging problems and really seeking to understand how
        things work under the hood. Web development stands out to me
        because it allows me to design and develop my own applications
        from nothing and seeing it become something that can be used
        by anyone on the internet. I'm really passionate about coding,
        especially the backend side of web development! When I'm not
        working on my personal projects, you can find me out on the
        soccer field or restaurant-hopping to find my next favorite
        sushi and ramen spot.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Map through the services and create a new card for each one */}
        {services.map((service, idx) => (
          <ServiceCard key={service.title} idx={idx} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
