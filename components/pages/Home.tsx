import React from 'react'
import dynamic from "next/dynamic";
import Layout from '../Layout';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
export default function HomeComponent() {
    return (
        <Layout
        bgImg={"/images/shashank.jfif"}
        >
            <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
                <div className="mr-auto h-[100%]  px-5  md:py-5 sm:py-5 place-self-center lg:col-span-8">
                    <Parallax translateY={[-100,100]}>
                    <h1 data-aos="zoom-in" data-aos-duration="1000" className="max-w-2xl my-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Shashank Malla 😀</h1>
                    <p data-aos="zoom-in" className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                    <a  href="/images/sony.jfif" download={"/images/sony.jfif"} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-200 border hover:text-black border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Download CV
                    </a>
                    </Parallax>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image src="/images/karnali.png" width={300} height={300} className='object-cover object-center rounded' alt="mockup" />
                </div>
            </div>
            </Layout>
    )
}
