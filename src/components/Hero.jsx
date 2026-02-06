import React from 'react'
import hero from '../assets/hero.png'

function Hero() {
    return (
        <section className='min-h-screen flex justify-center items-center bg-light-blue px-6 py-12'>
          
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl w-auto gap-12 lg:gap-32">
                
                <div className="flex-1 text-center lg:text-left space-y-6">
                    <h1 className="text-5xl lg:text-8xl font-bold font-allura text-primary ">
                        Rice <span className="text-3xl lg:text-5xl text-dark font-sans">Bowl</span>
                    </h1>
                    
                   
                    <p className="text-lg text-dark font-sans leading-relaxed">
                        Experience the authentic taste of tradition in every bite. 
                        Our bowls are crafted with fresh, locally-sourced ingredients 
                        and a perfect blend of spices to bring you a healthy, 
                        flavorful meal that feels like home.
                    </p>

                    <div className="pt-4">
                        <button className="primary-btn text-[23px]">
                            View Our Menu
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center relative">
                    <img 
                        src={hero} 
                        alt='Delicious Rice Bowl' 
                        className="relative w-full max-w-[ 550px] mx-auto lg:scale-125 shadow-1" 
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero