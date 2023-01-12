import React from 'react'
import { Parallax, Background } from 'react-parallax';
import Image from "next/image"
export default function Layout(props : any) {
  return (

    
    <section style={{
      background:`url(${props.bgImg}) fixed no-repeat `,
      backgroundSize:"cover"
    }}>
     {
  //     props.bgImg &&
  // <Image style={{
  //   // background:`url(${props.bgImg}) fixed cover`,
  //   backgroundSize:"cover",
  //   backgroundAttachment:"fixed",
  //   zIndex:'-1',
  //   // position:"fixed",
  //   // width:'100vw',
  //   // height:"100vh"
  // }} src={props.bgImg} alt={"bgimg"} layout="fill"  objectFit='cover'/>
     }
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
  <div className="mx-auto max-w-9xl relative  md:px-15 lg:px-25  overflow-hidden   " style={{
    background:"rgba(0,0,0,0.8)"
  }} >
        {props.children}   
        </div> 
    
     </section>
  )
}
