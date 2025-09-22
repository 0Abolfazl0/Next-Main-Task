import { IEvents } from '@/core/types/IEvent'
import Image from 'next/image'
import React, { FC } from 'react'
interface IProps {
    value: IEvents
}
const EventsPage: FC<IProps> = async ({value}) => {
  return (
    <div className='flex flex-col justify-center bg-gray-200 p-10 rounded-3xl'>
        <div className='border p-3 rounded-2xl border-amber-300 bg-amber-500'>
        <Image className='rounded-3xl' src={value.imageAddress} width={150} alt='Picture' height={150}/>
        <div className='text-blue-500 flex justify-around'>
            <h1>
                {value.title}
            </h1>
            <span className='mr-4'>{value.price}</span>
        </div>
        <div className='ml-4'>
            <p>{value.description}</p>
        </div>
        </div>
    </div>
  )
}

export default EventsPage