import Nav from 'react-bootstrap/Nav';
import './clinic.css';
import React, { useRef, useEffect, useState } from 'react';
const Contact = () => {
  const handleCall = () => {
    window.location.href = 'tel:+917721099005'; // Replace with your phone number

  };
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
    <div className={`scrolling-component ${isVisible ? 'visible' : ''}`} ref={componentRef}>
          <div className='about'>
    <h3 className='contact'>Contact</h3>
    <button className='buton'  onClick={handleCall}>CALL NOW</button>
    <h3>  </h3>
    <h3>  </h3>
    <h6 className='abba'>7721099005</h6>
  <br></br>
  <h3> </h3>
    </div>
    <div className='about'>
        <h3 className='contact'>Address</h3>
    <button className='buton' src=""> <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8">LOCATION</Nav.Link></button>
    <h3>  </h3>
    <h3>  </h3>
    <h6 className='abba'>Physical Therapy Clinic in Bangaluru,<br></br>Karnataka 560037<br></br>
  610 second floor,AECS Layout-C Block,</h6>
  <br></br>  
  </div>
  <div className='about'>
         <h4 className='contact'> Timmings</h4>
       <h6 className='abba'>Monday to Saturday <br></br> Mornning - 9:30 to 12:30 <br></br> Evening - 5:30 to 8:30</h6>
       </div>
      
       <br></br>

    </div>
  );
};

export default Contact;
