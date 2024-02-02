import React from 'react'
import TaskIndicatorCard from '@/components/TaskIndicatorCard'
import useTaskDashboard from './hooks/useTaskDashboard'
import { StringHelpers } from '@/helpers/StringHelpers'

const TaskDashboard = () => {
  const {totalTasks, totalHours, totalDays} = useTaskDashboard()

  return (
    <div className='flex flex-row gap-x-4'>
      <TaskIndicatorCard title='Total Tasks' content={StringHelpers.convertTo3Digits(totalTasks)} />
      <TaskIndicatorCard title='Total Days' content={totalDays.toFixed(2)} />
      <TaskIndicatorCard title='Total Hours' content={StringHelpers.convertTo3Digits(totalHours)} />
    </div>
  )
}

export default TaskDashboard