import './clinic.css';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useRef, useEffect, useState } from 'react';

const BasicExample = () => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
  
<div className={`scrolling-componentty ${isVisible ? 'visible' : ''}`} ref={componentRef}>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Why is Physiotheropy important?
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <h7> Post-surgery rehabilitation, Reduce or eliminate pain, Recover and prevent sports injuries, Pregnancy and post-partum care and Neuro cases rehabilitation.</h7>
      </Dropdown.Menu>
      <h3> </h3>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       How long does a physiotheropay session last?
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <h7> The initial session that includes history taking, examination and diagnosis usually takes around 45 minutes. Following that the physiotherapy sessions can be around 35-45 minutes.</h7>
      </Dropdown.Menu>
      <h3> </h3>
      </Dropdown>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       How do I schedule an Appointment?
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <h7> You can Book An Appointment with us by contacting on +917721099005</h7>
      </Dropdown.Menu>
      {/* <h3>__________________________________________________________________________________________________________________________________________________________________________________</h3> */}
      </Dropdown>
      
      </Dropdown> 
     </div>
  );
};

export default BasicExample;

