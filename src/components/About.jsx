import React from 'react'
import banner from '../assets/banner.png'
function About() {
    return (
        <>
            <section className='min-h-screen flex justify-center items-center'>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center max-w-7xl w-auto gap-12 lg:gap-32'>
                    <div className='flex-1 justify-center items-center'>
                        <img src={banner} alt='banner' className=' w-full mx-auto lg:scale-120 shadow-1' />
                    </div>

                    <div className='flex-1 text-center lg:text-left py-12'>
                        <div className='flex flex-col gap-7 justify-center w-full mx-auto  max-w-[500px]  '>
                            <p className='font-semibold text-3xl lg:text-5xl text-dark py-2'>ABOUT</p>
                            <h1 className='font-allura font-bold text-6xl text-primary'>Freach Bowl</h1>
                            <p className="text-lg text-gray-600 font-sans ">
                                At <span className="text-primary font-bold">Fresh Bowl</span>, our journey began with a simple mission: 
                                to make healthy eating an exciting adventure. We believe that food should nourish your body while delighting your senses.
                                <br /><br />
                                Every ingredient is hand-picked from local farmers, ensuring that we only serve the freshest produce.
                                From our signature sauces to our perfectly balanced spices, we pour heart and soul into every bowl we create. Join us in 
                                celebrating fresh food, community, and the art of eating well.
                            </p>
                        </div>

                        <div className="pt-8  ">
                            <button className="primary-btn text-[23px] ">
                                View Our Menu
                            </button>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default About
