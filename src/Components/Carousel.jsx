import React, { useState } from 'react';
import '../Styles/Carousel.css';
import art1 from '../Images/Artworks/art1.jpeg';
import art2 from '../Images/Artworks/art2.jpeg';
import art3 from '../Images/Artworks/art3.jpeg';
import art4 from '../Images/Artworks/art4.jpeg';
import art5 from '../Images/Artworks/art5.jpeg';

const images = [art1, art2, art3, art4, art5];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
        <div className="textstuff">
        <p>A look into a collection of my latest artwork, here's what I've been creating.</p>
         </div>

  
    <div className="carousel-container">
      <button className="carousel-button" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt={`Artwork ${currentIndex + 1}`} className="carousel-image" />
      <button className="carousel-button" onClick={nextSlide}>&#10095;</button>
    </div>
    </div>
  );
};

export default ImageCarousel;
