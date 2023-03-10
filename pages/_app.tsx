import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from '../components/Footer';
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  },[ ])
  return<ParallaxProvider>
          <Component {...pageProps} />
          <Footer/>
        </ParallaxProvider> 
}
