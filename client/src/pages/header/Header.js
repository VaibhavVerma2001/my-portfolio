import React from 'react'
import './header.scss';
import { motion } from 'framer-motion';
import profImg from '../../assets/profile.png';
import circleImg from '../../assets/circle.svg';
import nodeImg from '../../assets/node.png';
import sassImg from '../../assets/sass.png';
import reactImg from '../../assets/react.png';
import AppWrap from '../../wrapper/AppWrapp';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

function Header() {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: "20px" }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Vaibhav</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      {/* profile img and its circular background */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={profImg} alt="profile-img" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={circleImg}
          alt='profile-circle'
          className='overlay_circle'
        />
      </motion.div>


      {/* small small circles of technologies */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[nodeImg, reactImg, sassImg].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>

    </div>
  )
}


// to wrap  component
// 1st param. is component and second is 'id' as needed by AppWrap
export default AppWrap(Header,'home');
