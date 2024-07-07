import codeImg from '../assets/code.jpg'
import {checklistItems} from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Workflow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl lg:text-6xl sm:text-5xl tracking-wide text-center mt-6">
             Accerelate your 
             <span className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">{" "}coding workflow</span>
        </h2>

        <div className="flex flex-wrap justify-center">
            <div className='p-2 w-full lg:w-1/2'>
                <img src={codeImg} alt="" />
            </div>

            <div className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((item,index)=>(
                    <div key={index} className='flex mb-10'>
                        <div className='text-green-500 mx-6 rounded-full h-10 w-10 p-2 justify-center items-center'>
                            <CheckCircle2 />
                        </div>

                        <div>
                            <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                            <p className='text-md text-neutral-500'>{item.description}</p>
                        </div>
                    </div>   
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow