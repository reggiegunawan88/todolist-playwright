import React from 'react'

const CTASection = () => {
  return (
    <div className='flex flex-row gap-x-8 items-center'>
      <div className='flex flex-col gap-y-1'>
        <span className='text-xs font-bold'>Task title</span>
        <input type='text' className='input-style' placeholder='Fill task title' />
      </div>

      <div className='flex flex-col gap-y-1'>
        <span className='text-xs font-bold'>Time required (in Hrs)</span>
        <input type='number' max={24} className='input-style' placeholder='Fill time required' />
      </div>
      
      <button className='bg-blue-400 rounded-md py-1 px-4 self-end hover:bg-blue-500 text-white'>Add</button>
    </div>
  )
}

export default CTASection