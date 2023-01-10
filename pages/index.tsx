import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
// import { useEffect, useRef } from 'react'
import HomeComponent from '../components/pages/Home'
import ServiceComponents from '../components/pages/Service'
import SkillComponent from '../components/pages/Skill'
// import ResumeComponent from '../components/pages/Resume'
// import PricingComponent from '../components/pages/Pricing'
import VideoComponent from '../components/Video'
import ContactComponent from '../components/pages/Contact'
import Testimonial from '../components/pages/Testimonial'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // let circleRef = useRef<any>();

  // useEffect(() => {
  //   if (typeof window != "undefined") {

  //     window.onmousemove = ((e) => {
  //       let left = e.offsetX;
  //       let top = e.offsetY;
  //     })
  //   }
  // }, [circleRef.current])
  return (
    <>
      {/* <div ref={circleRef} className={styles.circle}></div> */}
      <Head>
        <title>Shashank Malla</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <HomeComponent />
            <ServiceComponents />
            <VideoComponent/>
            <SkillComponent />
            {/* <ResumeComponent /> */}
            <VideoComponent/>
            <Testimonial/>
            <ContactComponent/>
          </main>
        </>
        )
}
