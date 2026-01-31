"use client"

import StepContent from "@/components/shoppingCart/StepContent"
import Stepper from "@/components/shoppingCart/Stepper"
import { steps } from "@/components/shoppingCart/steps"
import { useState } from "react"

export default function ShoppingCart() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1)
    }
  }

  return (
    <div className="w-full mr-3 flex gap-4 mt-4">
      <section className="w-3/4">
        <Stepper currentStep={currentStep} />

        <div className="mt-5">
          <StepContent currentStep={currentStep} />
        </div>

      </section>
      <section className="w-1/4 h-full bg-gray-50 border border-gray-200 p-4 flex flex-col gap-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <span>قیمت کالاها:</span>
          <span>125000000 تومان</span>
        </div>
        <div className="flex items-center justify-between border-b-2 border-dashed border-b-gray-300 pb-6">
          <span>تخفیف:</span>
          <span>500000 تومان</span>
        </div>
        <div className="flex items-center justify-between">
          <span>مبلغ نهایی:</span>
          <span>119500000 تومان</span>
        </div>
        <button className="bg-blue-700 text-white text-lg cursor-pointer rounded-2xl py-2" onClick={handleNext}>ثبت و ادامه</button>
      </section>
    </div>
  )
}
