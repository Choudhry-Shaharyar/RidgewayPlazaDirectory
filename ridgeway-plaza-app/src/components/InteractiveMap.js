import React, { useEffect } from 'react';
import './Map.css';

const InteractiveMap = () => {
  useEffect(() => {
    const iframe = document.querySelector('.mapIframe');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          iframe.src = iframe.dataset.src;
          observer.unobserve(iframe);
        }
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    if (iframe) {
      observer.observe(iframe);
    }

    return () => {
      if (iframe) {
        observer.unobserve(iframe);
      }
    };
  }, []);

  return (
    <div className="map-container">
      <h2>Ridgeway Plaza</h2>
      <iframe
        className='mapIframe'
        data-src="https://maker.mappedin.com/map/6570dfeafd001d626819c691"
        style={{ border: '2px #8080801a solid' }}
        name="myiFrame"
        loading="lazy"  // Native lazy loading
        scrolling="no"
        frameBorder="1"
        marginHeight="0"
        marginWidth="0"
        title="Interactive map of Ridgeway Plaza"
        height="400px"
        width="600px"
        allowFullScreen
        metaname="description" content="Explore Ridgeway Plaza with our interactive map! Navigate through our diverse range of shops, restaurants, and services. Find your way around easily and discover everything Ridgeway Plaza has to offer."
      ></iframe>
    </div>
  );
}

export default InteractiveMap;
