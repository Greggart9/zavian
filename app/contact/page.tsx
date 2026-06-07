import React from 'react'
import ContactFormBox from '../components/sections/Contact';

const page = () => {

  const b = "absolute w-3 h-3 border-custom1";

  return (
    <>
      <section className='w-full h-fit flex flex-col items-center justify-center grid-overlay'>

        
        {/* HEADING */}
        <div className='w-full h-fit flex flex-col items-center text-center justify-center gap-5 px-10 pt-35 pb-20'>

            <div className="px-10">
              <div className="relative inline-flex items-center px-3 mb-4 w-fit">
                          <span className={`${b} top-0 right-0 border-t-2 border-r-2`} />
                          <span className={`${b} bottom-0 left-0 border-b-2 border-l-2`} />
                          <span className="text-[17px] leading-[23.8px] font-thin text-gray-500">CONTACT</span>
              </div>
            <h1 className='text-[78px] font-thin leading-[92.4px] text-center'>Let’s Create<br/> <span className='text-custom1'>Something Bold</span></h1>
            <p className='text-[25px] leading-7.5 font-thin max-w-lg text-center text-gray-500'>Have a vision, project, or idea you’re
              ready to bring to life? Fill out the form below and I’ll get back to you within 24 hours.</p>
          </div>
        </div>

        {/* MAIN BODY */}
        <div className='w-full h-full items-center flex justify-center '>
           <ContactFormBox />
        </div>
      </section>
    </>
  )
}

export default page