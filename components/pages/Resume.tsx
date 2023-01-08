import React from 'react'
import Layout from '../Layout'

export default function ResumeComponent() {
  return (
    <Layout
      bgImg={"/images/sony.jfif"}
    >
      <div className="sm:text-center text-center py-6">
        <h2 data-aos="zoom-out" data-aos-duration="1500" className=" mt-2 text-3xl font-bold tracking-tight  uppercase text-white sm:text-4xl ">Resume</h2>
        <p data-aos="zoom-in" data-aos-duration="1500" className="text-lg font-semibold leading-8 text-orange-600"> MY <span className='text-4xl' style={{
          fontFamily: "'Moon Dance', cursive"
        }}>Story</span></p>
        {/* <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p> */}
      </div>
      <div className="flex flex-wrap justify-center text-white ">
        <div data-aos="fade-up" data-aos-duration="1500" className="p-12 transition-all hover:shadow-lg md:w-1/2 hover:z-10 bg-orange-100  my-2  flex flex-col items-start">
          <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xm font-medium tracking-widest">Experiences</span>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore </h2>
          <p className="leading-relaxed mb-8 text-gray-500 border-b-2 border-orange-500">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. </p>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore </h2>
          <p className="leading-relaxed mb-8 text-gray-500 border-b-2 border-orange-500">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. </p>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore </h2>
          <p className="leading-relaxed mb-8 text-gray-500 border-b-2 border-orange-500">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. .</p>

        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="p-12 transition-all  hover:shadow-lg hover:z-10 md:w-1/2 my-2 bg-orange-100 flex flex-col items-start">
          <span className="inline-block py-1 px-2 rounded bg-orange-500 text-white-500 text-xm font-medium tracking-widest">Education</span>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Pinterest DIY dreamcatcher </h2>
          <p className="leading-relaxed mb-8 text-gray-500 border-b-2 border-orange-500">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. </p>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Pinterest DIY dreamcatcher </h2>
          <p className="leading-relaxed mb-8 text-gray-500 border-b-2 border-orange-500">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. .</p>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Pinterest DIY dreamcatcher  e</h2>
          <p className="leading-relaxed mb-8 text-gray-500 border-b-2 border-orange-500">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. </p>

        </div>
      </div>
    </Layout>
  )
}
