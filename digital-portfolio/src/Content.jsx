import React from 'react';
import './index.css';
import mySvg from './assets/react.svg';
import portfolio from './assets/portfolio-1.jpg';
import meteor from "./assets/branding-3.jpg";
import app from './assets/branding-2.jpg'


export default function Content() {
  return (
    <>
    <div className='content-top'>
        <img src={mySvg} className="react" />
        <h1>Hi, I'm Zion Alasa</h1>
        <p>I'm a passionate Web Designer focused on crafting <br /> remarkable digital
            experiences. My aim is to blend functionality <br /> and aesthetics to create impactful solutions.
        </p>
    </div>

    <div className='newwork'>
        <h3 className='my--work'>My Work</h3>
        <p>Here's a glimpse of some of my recent and exciting projects. 
            Each of them reflects my <br /> focus on user-centered design and my commitment to excellence in user experience.</p>

        
            <section className='sect--one'>
            <div className='first'>
                <h4 className='ecommerce'>Ecommerce</h4>
                <h5 className='product'>2023 - Product design</h5>
                <p className='p-product'>Transformed an e-commerce website with a <br />
                                    modern redesign, optimizing the shopping <br /> 
                                    journey and elevating brand identity. <br />
                                    Resulted in improved user engagement,<br /> 
                                    increased sales, and a seamless shopping <br />
                                    experience.
                </p>

                <p href='#' className='read'>Read case study</p>
            </div>
            <img src={portfolio} className="portfolio" />
            </section>


            <section className='sect--two'>
            <div className='second'>
                <h4 className='tour--book'>Tour Book App</h4>
                <h5 className='product'>2023 - Product design</h5>
                <p className='p-product'>Designed a user-friendly travel booking app <br /> 
                                    that enables users to effortlessly plan and <br />
                                    book their dream vacations. The app offers a <br />
                                    seamless experience for browsing <br />
                                    destinations, selecting packages, and <br />
                                    managing reservations, making travel <br />
                                    planning a breeze
                 </p>

                <p href='#' className='read'>Read case study</p>
            </div>
            <img src={app} className="portfolio" />
            </section>


            <section className='sect--three'>
            <div className='Third'>
                <h4 className='streamingapp'>Online Streaming App</h4>
                <h5 className='product'>2023 - Product design</h5>
                <p className='p-product'>Developed an intuitive online streaming app <br /> 
                                    that brings entertainment to users' <br /> 
                                    fingertips. The app offers a vast library of <br /> 
                                    content, smooth playback, and personalized <br /> 
                                    recommendations, enhancing the user's <br /> 
                                    streaming experience
                </p>

                <p href='#' className='read'>Read case study</p>
            </div>
            <img src={meteor} className="portfolio" />
            </section>

            <br />
            <br />
                    
    </div>
            <section>
                <a href="http://#" className='proj'>See all projects</a>
            </section>

            <div className='about--me'>
                <h2 className='about'>About Me</h2>
                <p>With over 4 years of experience in digital product <br /> 
                    design, I'm passionate about creating engaging and <br /> 
                    functional solutions that meet users' needs. My focus <br /> 
                    on user research and usability ensures that each <br /> 
                    design not only looks great but also delivers an <br /> 
                    exceptional experience
                </p>
            </div>
    </>
  )
}
