import React from 'react'
import { Parallax, Background } from 'react-parallax';
import Image from "next/image"
export default function Layout(props : any) {
  return (

    
    <section style={{
      // background:`url(${props.bgImg}) fixed no-repeat`,
      // backgroundSize:"cover"
    }}  className="relative">
      {props.video ? props.video : 
  <>
  <Image style={{
    background:`url(${props.bgImg}) fixed cover`,
    backgroundSize:"cover",
    zIndex:'-1',
    // position:"fixed",
    // width:'100vw',
    // height:"100vh"
  }} src={props.bgImg} alt={"bgimg"} layout="fill"  objectFit='cover'/>
    {/* <div style={{
      background:`url(${props.bgImg}) fixed`,
      position:"fixed"
    }} >
          <Image
              src={props.bgImg}
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="bgimg"
          />
    </div> */}
  <div className="mx-auto max-w-9xl px-10 md:px-15 lg:px-25 py-10 overflow-hidden  sm:py-10 lg:py-20 " style={{
    background:"rgba(0,0,0,0.8)"
  }} >
        {props.children}   
        </div> 
      </>
      }
     </section>
  )
}
