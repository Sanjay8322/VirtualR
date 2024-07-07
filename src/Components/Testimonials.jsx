import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className="mt-10 tracking-wide">
        <h2 className="text-center text-3xl lg:text-6xl sm:text-5xl my-10 lg:my-20">What people are saying</h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index)=>(
                <div key={index} className="w-full lg:w-1/3 md:w-1/2 px-4 py-2" >
                    <div className="bg-neutral rounded-md border border-neutral-700 font-thin p-6">
                        <p>{testimonial.text}</p>
                        <div className="flex items-start mt-8">
                            <img className="h-12 w-12 rounded-full mr-6" src={testimonial.image} alt="" />
                            <div>
                                <h6>{testimonial.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials