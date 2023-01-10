import React from 'react'
import { Parallax, Background } from 'react-parallax';
export default function Layout(props : any) {
  return (

    
    <section style={{
      background:`url(${props.bgImg}) fixed no-repeat`,
      backgroundSize:"cover"
    }}  className="bg-fixed">
      {props.video ? props.video : 
  
      <div className="mx-auto max-w-9xl px-10 md:px-15 lg:px-25 py-10 overflow-hidden  sm:py-10 lg:py-20 " style={{
        background:"rgba(0,0,0,0.7)"
      }} >
        {props.children}   
        </div> 
      }
     </section>
  )
}
