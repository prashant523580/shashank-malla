import React from 'react'
import Layout from '../Layout';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
export default function HomeComponent() {
    return (
        // <Layout
        // // bgImg={"/images/shashank.jfif"}
        // >
        <>
            <div
             style={{background:"rgba(0,0,0,0.2)"}}
             className="container mx-auto flex h-auto lg:h-[100vh] md:h-[39vh] sm:h-[40vh] py-2 lg:py-10   md:flex-row flex-col items-center">
                <div className="mr-auto  px-5  md:py-5 sm:py-5 place-self-center lg:col-span-8">
                    <Parallax translateY={[-30,50]}>
                    <h1  style={{
                        // fontFamily:"'Lobster',cursive",
                        fontFamily:"'Tangerine', serif",
                    }} data-aos="zoom-in" data-aos-duration="1000" className="py-2 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-15xl text-gray-300">Shashank Malla</h1>
                        </Parallax>
                        <Parallax translateY={[-30,40]}>
                    <p style={{
                        fontFamily:"'Moon Dance', serif",
                        // fontFamily:"'Tangerine', serif"
                    }} data-aos="zoom-in" className=" px-3 py-2 font-light  text-gray-100 lg:mb-8 md:text-lg lg:text-4xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                    </Parallax>
                    <a data-aos="zoom-in" data-aos-duration="1000" href="/images/sony.jfif" download={"/images/sony.jfif"} className="inline-flex items-center my-5 justify-center px-5 py-2 text-base font-medium text-center text-gray-200 hover:text-white  rounded-lg hover:bg-orange-700 bg-orange-600 ">
                        Download CV
                    </a>
                </div>
                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-6/6"> */}
                    {/* <Image src="/images/karnali.png" width={300} loading="lazy" height={200} className='object-cover object-center rounded' alt="mockup" /> */}
                {/* </div> */}
            </div>
            <video loop={true} autoPlay={true} muted playsInline={true} style={{
          width:"100%",
          backgroundAttachment:"fixed",
          position:'fixed',
          top:0,
          left:0,
          zIndex:"-1",
        }}
      
        >
           <source src='/videos/sample.mp4' type='video/mp4'/>
        </video>
            </>
        //   </Layout>
    )
}
