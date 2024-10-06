import React from 'react'
import { Text } from './ui/text'
import { cn } from '@/lib/utils'

export const IntroBanner: React.FC = ({}) => {
  return (
    <div className="grid w-full relative h-40 grid-cols-12 grid-rows-2">
      <div className="contents">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className={cn('border-b border-r border-border', {
              'border-r-0': index === 11 || index === 5,
            })}
          />
        ))}
      </div>
      <div className="absolute pointer-events-none w-fit h-fit z-[2] -top-2.5 -left-[10px]">
        <div className="border-r border-r-gray-600 absolute w-2.5 h-5"></div>
        <div className="border-b border-b-gray-600 absolute w-5 h-2.5"></div>
      </div>
      <div className="absolute pointer-events-none w-fit h-fit bottom-2.5 right-[9px]">
        <div className="border-r border-r-gray-600 absolute w-2.5 h-5"></div>
        <div className="border-b border-b-gray-600 absolute w-5 h-2.5"></div>
      </div>
      <div className="row-[1_/_span_2] col-[4_/_span_6] border-border border-r border-b bg-background-200">
        <div className="flex justify-center flex-col items-center w-full h-full bg-blue-200 text-blue-900 rounded-full">
          <Text color="inherit" size={14}>
            All services
          </Text>
          <Text color="inherit" size="heading-64">
            Operational
          </Text>
        </div>
      </div>
    </div>
  )
}
