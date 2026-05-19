import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="w-full h-screen bg-white p-8">
        {/* BACKGROUND GRID */}
        <div
          className="bg-neutral-100 w-full h-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent, transparent calc(12.5% - 0.5px), rgba(0,0,0,0.15) calc(12.5% - 0.5px), rgba(0,0,0,0.15) 12.5%)',
          }}
        >

        </div>

      </section>
    </>
  )
}

export default Hero