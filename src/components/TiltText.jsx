import React from 'react'

const TiltText = ({tiltRef}) => {
  return (
    <div ref={tiltRef} className='px-10 flex flex-col max-w-fit p-2'>
        <div className='text-[8vh] font-[anzo1]'>From</div>
        <div className='text-[17vh] font-[anzo] text-black'>CONCEPT<span className='text-white'>™ </span>to EXECUTION</div>
        <div className='text-[4vh] font-[anzo1]'>—building things that matter.</div>
    </div>
  )
}

export default TiltText