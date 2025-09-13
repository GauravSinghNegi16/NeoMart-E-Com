import React from 'react'
import Products from './Products'
import Nav from './Nav'
import Hero from './Hero'
import Showcase from './Showcase'
import Footer from './Footer'

function Home() {
    return (
        <div className='w-full h-screen'>
             <Nav />
             <Hero />
             <Products />
             <Footer />
        </div>
    )
}

export default Home