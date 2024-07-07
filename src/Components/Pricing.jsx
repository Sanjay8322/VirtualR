import {pricingOptions} from '../constants'
import { CheckCircle2 } from 'lucide-react'
const Pricing = () => {
  return (
    <div className="mt-20">
        <h2 className="tracking-wide text-3xl lg:text-6xl sm:text-5xl text-center my-8">Pricing</h2>

        <div className="flex flex-wrap">
            {pricingOptions.map((option,index)=>(
                <div key={index} className='w-full lg:w-1/3 sm:w-1/2 p-2' >
                    <div className='p-10 border border-neutral-700 rounded-xl'>
                        <p className='text-4xl mb-10'>
                            {option.title}
                            {option.title === 'Pro' && <span className='bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text text-xl ml-2 mb-4'>(Most Popular)</span>}
                        </p>
                        <p className='mb-8'>
                            <span className='text-5xl mr-2 mt-6'>{option.price}</span>
                            <span className='text-neutral-500 tracking-tight'>/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature,index)=>(
                                <li key={index} className='mt-8 flex items-center'>
                                    <CheckCircle2/>
                                    <span className='ml-2'>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="
                        " className='inline-flex w-full h-12 mt-20 items-center justify-center border border-orange-500 hover:bg-orange-900 rounded-xl'>
                            Subscribe
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing