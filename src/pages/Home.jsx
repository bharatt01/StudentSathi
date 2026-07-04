import React from 'react'
import HeroSection from '../components/Hero'
import Navbar from '../components/Navbar'
import HowItWorks from '../components/HowItWorks'
import Categories from '../components/Categories'
import PopularListings from '../components/PopularListings'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
   
    <HeroSection />
    <HowItWorks />
    <Categories />
    <PopularListings />
    <WhyChooseUs />
    <Testimonials />

    </>
  )
}

export default Home
