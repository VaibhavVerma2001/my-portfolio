import React, { useState, useEffect } from 'react';
import './certficate.scss';
import { client, urlFor } from '../../client';
import AppWrap from '../../wrapper/AppWrapp';
import {motion} from 'framer-motion';

function Certificate() {

  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certificates"]';

    client.fetch(query).then((data) => {
      setCertificates(data);
    });
  }, []);

  return (
    <>
      <motion.div 
        className="certificate container-fluid"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className='head-text' style={{ marginBottom: "2.5rem" }}>My Certificates</h2>
        <div className="row mt-5">
          {certificates.map((certi,index) => {
            return (
              <motion.div 
                className="item col-lg-4 col-md-6 mb-4" key={certi.title+index}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
              >
                <a href={urlFor(certi.imgUrl)} className="fancybox" data-fancybox="gallery1">
                  <img src={urlFor(certi.imgUrl)} width="100%" height="100%" alt="certi-img" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}

export default AppWrap(Certificate, 'certificate');
