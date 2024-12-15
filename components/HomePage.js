import React from 'react';
import './HomePage.css'; // Optional CSS for styling
import ImageSlider from '../components/ImageSlider';
import FeatureImage from '../assets/feature_image.jpg'

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Banner Image */}
      <div className="banner">
      <ImageSlider /> {/* Use the ImageSlider here */}
      </div>

      {/* Heading */}
      <h1 className="homepage-heading">Some Key Features of Our Healthcare Portal</h1>

      {/* Features Section: Image + Features */}
      <div className="features-section">
    
        <div className="features-image">
          <img
            src={FeatureImage}
            alt="Features"
            className="feature-side-image"
          />
        </div>

        {/* Right: Features */}
        <div className="features">
          <div className="feature">
            <h2>Advanced Healthcare Technology</h2>
            <p>Our platform integrates the latest in medical technology to ensure accurate diagnoses and effective treatments.</p>
          </div>
          <div className="feature">
            <h2>Best Clinical Outcomes</h2>
            <p>We work with top healthcare professionals to provide unmatched clinical results for every patient.</p>
          </div>
          <div className="feature">
            <h2>10,000+ Healing Hands</h2>
            <p>With a network of thousands of skilled healthcare professionals, we bring expert care to every corner.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
