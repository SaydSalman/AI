import React from 'react'
import robot from "../assets/images/robot.jpg"
import swiper1 from "../assets/images/swiper1.jpg"
import swiper2 from "../assets/images/swiper2.jpg"
import swiper3 from "../assets/images/swiper3.jpg"
import Services from '../components/Services';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonials from './Testimonials'

const Dashboard = () => {
    
    
  return (
    <>
    <section  className="min-h-screen text-white py-20" style={{backgroundImage: `url(${robot})`,backgroundPosition:'center',backgroundSize:'cover',height:'100vh'}}>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Revolutionizing Grocery Shopping with AI</h1>
        <p className="text-lg md:text-xl text-center mb-8">Explore our mesmerizing products and services</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">Get Started</button>
      </div>
    </section>
    <Services/>
    <div className='container-fluid mx-10 '>
    <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
      <div className="relative">
        <img src={swiper1} alt="First slide" className="w-full h-screen " />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-2xl font-bold ">
        <button className='bg-gray-400 px-4 py-4 rounded shadow'>Delivery Optimization</button>
        </div>
      </div>
      <div className="relative">
        <img src={swiper2} alt="Second slide" className="w-full h-screen" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-2xl font-bold animate-fadeIn">
        <button className='bg-gray-400 px-4 py-4 rounded shadow'>Customer Insights</button>
        </div>
      </div>
      <div className="relative">
        <img src={swiper3} alt="Third slide" className="w-full h-screen" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-2xl font-bold animate-fadeIn">
        <button className='bg-gray-400 px-4 py-4 rounded shadow'>Dynamic Pricing</button>
        </div>
      </div>
    </Carousel>
    </div>
    <Testimonials/>
    
    </>
  )
}

export default Dashboard
