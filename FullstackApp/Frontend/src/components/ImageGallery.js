import React, { useState } from 'react';
import './clinic.css';
import one from './images/n1.jpeg';
import two from './images/n2.jpeg';
import three from './images/n3.jpeg';
import four from './images/n4.jpeg';
import five from './images/n5.jpeg';
import six from './images/n6.jpeg';

const ImageGallery = () => {
  const [showGallery, setShowGallery] = useState(false);
  const images = [
    { src: one, description: 'Manual therapy' },
    { src: two, description: 'Bench press' },
    { src: three, description: 'Dry needling' },
    { src: four, description: 'Manual' },
    { src: five, description: 'Psycho' },
    { src: six, description: 'Back' }
  ];

  const handleClick = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div>
      <div>
        <h5 className="buttooooo" onClick={handleClick}>
          Open Gallery
        </h5>
      </div>
      {showGallery && (
        <div className="image-gallery">
          {images.map((image, index) => (
            <div key={index}>
              <img className="gallery-image" src={image.src} alt={`Imag ${index + 1}`} />
              <h6>{image.description}</h6>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
