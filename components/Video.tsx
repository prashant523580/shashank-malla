import React from 'react'
import Layout from './Layout'

export default function VideoComponent() {
  return (
    <Layout
    video={
        <video loop={true} autoPlay={true} muted playsInline={true} style={{
          width:"100%"
        }}>
           <source src='/videos/sample.mp4' type='video/mp4'/>
        </video>
    }
    >
        {/* <VideoPlayer url={"https://www.youtube.com/watch?v=zLPYY8z8QEE&list=RDzLPYY8z8QEE&start_radio=1"}/> */}
        
    </Layout>
  )
}
