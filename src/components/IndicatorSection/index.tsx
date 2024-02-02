import React from 'react'
import IndicatorCard from './IndicatorCard'

const IndicatorSection = () => {
  return (
    <div className='flex flex-row gap-x-4'>
      <IndicatorCard title='Total Tasks' content='005' />
      <IndicatorCard title='Total Days' content='005' />
      <IndicatorCard title='Total Hours' content='005' />
    </div>
  )
}

export default IndicatorSection