import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './clinic.css';

const SpecialOffer = () => {
  const [flash, setFlash] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    loop: { reverse: true },
  }));

  useEffect(() => {
    setFlash({ opacity: 1 });
  }, [ setFlash]);

  return (
    <div>    <animated.div style={flash} className="special-offer">
      {/* Special offer content */}
      <h1 style={flash}> Grand Opening Special!</h1>
      <animated.p > </animated.p>
    </animated.div>
  <h6 className='fontt'>  Book your initial consultation now and receive a discount on your first treatment session. Don't miss this opportunity to embark on your path to optimal health and wellness.
  </h6>
  <br>
  </br></div>
    
  );
};

export default SpecialOffer;
