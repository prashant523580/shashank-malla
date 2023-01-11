import React from 'react'
import Layout from './Layout'

export default function VideoComponent() {
  return (
    <Layout

    >
 <div className="relative">

        <video loop={true} autoPlay={true} muted playsInline={true} style={{
          width:"100%",
          backgroundAttachment:"fixed",
          // position:'absolute',
          top:0,
          left:0
        }}
      
        >
           <source src='/videos/sample.mp4' type='video/mp4'/>
        </video>
        {/* <VideoPlayer url={"https://www.youtube.com/watch?v=zLPYY8z8QEE&list=RDzLPYY8z8QEE&start_radio=1"}/> */}
        
          </div>
    </Layout>
  )
}
