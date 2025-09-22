import EventsPage from '@/components/events/events'
import { fetchEvent } from '@/core/api/event'
import React from 'react'

const DashboardPage = async () => {
  const events = await fetchEvent()
  return (
    <div className='flex mt-10 gap-5 rounded-4xl p-10'>
      {events.map((value) => (
       <EventsPage value={value} key={value.id}/>
      ))}
    </div>
  )
}

export default DashboardPage