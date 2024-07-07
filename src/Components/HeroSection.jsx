import { View } from 'lucide-react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center lg:mt-20 mt-6">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl tracking-wide">
            Virtual build tools for 
            <span className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
                <br/>
            {" "}developers
            </span>
        </h1>

        <p className="mt-10 text-lg text-neutral-700 text-center max-w-4xl">Empower your creativity and bring your VR app ideas to life with out intutive development tools. Get started today and turn your imagination into immersive reality</p>
        
        <div className="my-10 flex justify-center">
            <a href="#" className="bg-gradient-to-t from-orange-500 to-orange-900 py-3 px-4 rounded-md" >Start for free</a>
            <a href="#" className="border border-neutral py-3 px-4 mx-3 rounded-md">Documentation</a>
        </div>

        <div className='flex justify-center mt-10'>
            <video autoPlay loop muted className='rounded-md mx-2 my-4 w-1/2 border border-orange-500' >
                <source src={video1} type='video/mp4' />
            </video>
            <video autoPlay loop muted className='rounded-md mx-2 my-4 w-1/2 border border-orange-500'>
                 <source src={video2} type='video/mp4' />
            </video>
        </div>
    </div>
  )
}

export default HeroSection