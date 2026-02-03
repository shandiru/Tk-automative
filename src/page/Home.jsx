import React from 'react'
import Hero from "../components/Hero";

import About from "../components/About";
import Review from "../components/Review";
import Contact from "../components/Contact";

import Gallery from "../components/Photo"
import FAQSection from '../components/FAQSection';
import WhyChooseSection from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import MapSection from '../components/Map';
import Teamcard from "../components/Teamcard"
const Home = () => {
    return (
        <div>
            <Hero />
            {/* <Service /> */}

            <About />
            <Teamcard />
            <WhyChooseSection />
            <ServicesSection />
            <Review />
            < Gallery />
            <Contact />
            <FAQSection />
            <MapSection />



        </div>
    )
}

export default Home
