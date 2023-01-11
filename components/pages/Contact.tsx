import React from 'react'
import Layout from '../Layout'

export default function ContactComponent() {
  return (
    <Layout
    bgImg={'/images/shashank.jfif'}
    >

  <div className="container px-5 text-gray-400  mx-auto sm:py-10 lg:py-20 py-10">
    <div className="flex flex-col text-center w-full mb-12">
    <h2 data-aos="fade-up" data-aos-duration="1000" className=" text-3xl font-bold tracking-tight  uppercase text-gray-300 sm:text-4xl ">Contact</h2>
      <p data-aos="zoom-in" data-aos-duration="1000" className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div  data-aos="zoom-in" data-aos-duration="1000" className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-200">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className="p-2 w-1/2">
          <div  className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-200">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div  data-aos="zoom-in" data-aos-duration="1000" className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-200">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div  data-aos="zoom-in" data-aos-duration="1000" className="p-2 w-full">
          <button className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Button</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a href="mailto:shashank@gmail.com" data-aos="zoom-in" data-aos-duration="1000" className="text-orange-500">example@email.com</a>
          <p data-aos="zoom-in" data-aos-duration="1500" className="leading-normal my-5">49 Smith St.
            <br data-aos="zoom-in" data-aos-duration="2000"/>Saint Cloud, MN 56301
          </p>
          <span className="inline-flex">
            <div  data-aos="zoom-in" data-aos-duration="1000" className="text-gray-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </div>
            <div  data-aos="zoom-in" data-aos-duration="1500" className="ml-4 text-gray-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </div>
            <div  data-aos="zoom-in" data-aos-duration="2000" className="ml-4 text-gray-300">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </div>
            <div  data-aos="zoom-in" data-aos-duration="1000" className="ml-4 text-gray-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
    </Layout>
  )
}
