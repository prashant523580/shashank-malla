import React from 'react'
import { Parallax, Background } from 'react-parallax';
export default function Layout(props : any) {
  return (

    
    <section  className="bg-fixed">
      {props.video ? props.video : 
      <Parallax 
       blur={{ min: -15, max: 15 }}
      bgImage={props.bgImg}
      bgImageAlt="the dog"
      strength={-80}>
      <div className="mx-auto max-w-9xl px-6 lg:px-5 py-10  sm:py-10 lg:py-20 " style={{
        background:"rgba(0,0,0,0.7)"
      }} >
        {props.children}   
        </div> 
    </Parallax>
      }
     </section>
  )
}
