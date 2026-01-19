import React from 'react'
import Hero from "../components/Hero";

import About from "../components/About";
import Review from "../components/Review";
import Contact from "../components/Contact";

import Gallery from "../components/Photo"
import VehicleLookup from "../components/VehicleLookup"
import WhyChooseSection from '../components/WhyChooseUs';
const Home = () => {
    return (
        <div>
            <Hero />
            {/* <Service /> */}
             
            <About />
            <WhyChooseSection />
            <Review />
            < Gallery />
          
            <VehicleLookup />
            <Contact />
        </div>
    )
}

export default Home
