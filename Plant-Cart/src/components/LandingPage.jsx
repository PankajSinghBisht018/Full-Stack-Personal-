import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import backgroundImage from '../images/bg.jpg'; 

function LandingPage() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <div className="text-black max-w-md md:w-1/2 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">Plant Cart</h1>
        <p className="text-lg mb-6">
          Welcome to our plant store where you can find a variety of beautiful houseplants. Explore our wide selection and add your favorite plants to your cart with just a click. Whether you're looking for indoor or outdoor plants, we have something for everyone. Start your green journey with us today!
        </p>
        <Link to="/products">
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForward />}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Get Started
          </Button>
        </Link>
      </div>
      <div className="md:w-1/2 text-black p-8">
        <p className="text-lg">
          At Plant Cart, we believe in the beauty and benefits of plants. Our collection includes a variety of houseplants that will brighten up your space and enhance your living environment. From low-maintenance succulents to lush, vibrant greenery, find the perfect plant that suits your style and needs. Dive into our collection and bring a touch of nature into your home with ease.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
