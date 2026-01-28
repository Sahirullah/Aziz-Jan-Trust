import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Gallery.css';

// Import all gallery images
import Gallery0 from '../assets/Gallery0.jpg';
import Gallery1 from '../assets/Gallery1.jpg';
import Gallery2 from '../assets/Gallery2.jpg';
import Gallery3 from '../assets/Gallery3.jpg';
import Gallery4 from '../assets/Gallery4.jpg';
import Gallery5 from '../assets/Gallery5.jpg';
import Gallery6 from '../assets/Gallery6.jpg';
import Gallery7 from '../assets/Gallery7.jpg';
import Gallery8 from '../assets/Gallery8.jpg';
import Gallery9 from '../assets/Gallery9.jpg';
import Gallery10 from '../assets/Gallery10.jpg';
import Gallery11 from '../assets/Gallery11.jpg';
import gallerypic2 from '../assets/gallerypic2.jpg';
import gallerypic3 from '../assets/gallerypic3.jpg';
import gallerypic4 from '../assets/gallerypic4.webp';
import gallerypic5 from '../assets/gallerypic5.jpg';
import gellarypic from '../assets/gellary pic.jpg';
import GellarypicOne from '../assets/Gellary pic1.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { id: 1, src: Gallery0, alt: 'Gallery Image 0' },
    { id: 2, src: Gallery1, alt: 'Gallery Image 1' },
    { id: 3, src: Gallery2, alt: 'Gallery Image 2' },
    { id: 4, src: Gallery3, alt: 'Gallery Image 3' },
    { id: 5, src: Gallery4, alt: 'Gallery Image 4' },
    { id: 6, src: Gallery5, alt: 'Gallery Image 5' },
    { id: 7, src: Gallery6, alt: 'Gallery Image 6' },
    { id: 8, src: Gallery7, alt: 'Gallery Image 7' },
    { id: 9, src: Gallery8, alt: 'Gallery Image 8' },
    { id: 10, src: Gallery9, alt: 'Gallery Image 9' },
    { id: 11, src: Gallery10, alt: 'Gallery Image 10' },
    { id: 12, src: Gallery11, alt: 'Gallery Image 11' },
    { id: 13, src: gallerypic2, alt: 'Gallery Picture 2' },
    { id: 14, src: gallerypic3, alt: 'Gallery Picture 3' },
    { id: 15, src: gallerypic4, alt: 'Gallery Picture 4' },
    { id: 16, src: gallerypic5, alt: 'Gallery Picture 5' },
    { id: 17, src: gellarypic, alt: 'Gallery Picture' },
    { id: 18, src: GellarypicOne, alt: 'Gallery Picture 1' },
  ];

  const openLightbox = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-page">
      <Header />
      
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h1 className="gallery-title">Our Gallery</h1>
            <p className="gallery-subtitle">
              Explore moments from Aziz Jan Welfare Trust
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <button className="view-btn">
                    <span>👁️ View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>

            <button className="lightbox-prev" onClick={goToPrevious}>
              ❮
            </button>

            <div className="lightbox-image-wrapper">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="lightbox-image"
              />
            </div>

            <button className="lightbox-next" onClick={goToNext}>
              ❯
            </button>

            <div className="lightbox-counter">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
