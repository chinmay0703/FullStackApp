
import './clinic.css';
import React, { useRef, useEffect, useState } from 'react';
const Advanced = () => {
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
    <div className='box'>
    <div className={`scrolling-component ${isVisible ? 'visible' : ''}`} ref={componentRef}>
          <div className='adva'>
            <div className='maintain'>    <h2 className='art' >&nbsp; Services</h2></div>
    <div className='maintain'>
    <h5>1) Knee Exercises</h5>
    <h5>2) Orthopeadic Rehab</h5>
    <h5>3) Neuro Rehab</h5>
    <h5>4) Sports Rehab</h5>
    <h5>5) Posture and ergonomics</h5>
    <h5>6) Womens Health</h5>
    <h5>7) Childhood disabilities</h5>
    </div>
    <h3>  </h3>
    <h3>  </h3>
    <h3>  </h3>
    

</div> </div>
</div>
  );
};

export default  Advanced;

