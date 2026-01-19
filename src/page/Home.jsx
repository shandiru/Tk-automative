import React from 'react'
import Hero from "../components/Hero";

import About from "../components/About";
import Review from "../components/Review";
import Contact from "../components/Contact";

import Gallery from "../components/Photo"
import FAQSection from '../components/FAQSection';
import WhyChooseSection from '../components/WhyChooseUs';
const Home = () => {
    return (
        <div>
            <Hero />
            {/* <Service /> */}
             
            <About />
            <WhyChooseSection />
            <FAQSection />
            <Review />
            < Gallery />
          
           
            <Contact />
        </div>
    )
}

export default Home
