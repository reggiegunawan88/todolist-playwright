import React from 'react'
import IndicatorCard from './IndicatorCard'
import { useAppSelector } from '@/hooks/useRTK'

const IndicatorSection = () => {
  const {totalTasks, totalHours, totalDays} = useAppSelector(state => state.taskIndicator)

  return (
    <div className='flex flex-row gap-x-4'>
      <IndicatorCard title='Total Tasks' content={totalTasks} />
      <IndicatorCard title='Total Days' content={totalHours} />
      <IndicatorCard title='Total Hours' content={totalDays} />
    </div>
  )
}

export default IndicatorSection