import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import GamingLap from '../Components/GamingLap';
import Brands from '../Components/Brands';
import Footer from '../Components/Footer';
import React from 'react';


function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Brands/>
            <GamingLap />
            <Footer/>



        </div>
    );
}

export default HomePage;