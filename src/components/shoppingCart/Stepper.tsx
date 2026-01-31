'use client'

import Icon, { IconName } from '../ui/Icon'
import { steps } from './steps'

type Props = {
  currentStep: number
}

export default function ProgressStepper({ currentStep }: Props) {
  return (
    <div className="flex justify-between items-center gap-2">
      {steps.map((step, index) => {
        const isCompleted = step.id < currentStep
        const isCurrent = step.id === currentStep

        return (
          <div key={step.id} className="flex items-center gap-2 w-fit">
            {/* circle */}
            <div
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ease-in-out
                ${
                  isCompleted
                    ? 'bg-green-500 text-white scale-105'
                    : isCurrent
                    ? 'bg-blue-700 text-white scale-110'
                    : 'bg-gray-200 text-gray-500'
                }
              `}
            >
              <span className="transition-all duration-300 ease-in-out">
                {isCompleted ? '✓' : <Icon name={step.icon as IconName}/>}
              </span>
            </div>

            {/* title */}
            <span
              className={`text-sm whitespace-nowrap transition-colors duration-300 ease-in-out
                ${isCurrent ? 'text-blue-600' : 'text-gray-500'}
              `}
            >
              {step.title}
            </span>

            {/* progress line */}
            {index < steps.length - 1 && (
              <div className="w-80 h-1 bg-gray-300 rounded overflow-hidden">
                <div
                  className={`
                    h-full bg-green-500
                    transition-all duration-500 ease-in-out
                    ${isCompleted ? 'w-full' : 'w-0'}
                  `}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
