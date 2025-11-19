"use client"

import { useEffect, useRef, useState } from "react"

export default function RangeSlider({ initialMin, initialMax, min, max, step }: { initialMin: number, initialMax: number, min: number, max: number, step: number }) {

    const [minValue, setMinValue] = useState(initialMin)
    const [maxValue, setMaxValue] = useState(initialMax)
    const progressRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (progressRef.current) {
            progressRef.current.style.right = (minValue / max) * 100 + "%"
            progressRef.current.style.left = step - (maxValue / max) * step + "%"
        }
    }, [minValue, maxValue])

    return (
        <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">از</span>
                    <input type="text" value={minValue.toLocaleString("fa-IR")} onChange={e => setMinValue(Number(e.target.value))} className="bg-transparent w-full text-left text-xl font-medium border-b border-b-sky-500 p-2 rounded outline-none" />
                    <span className="text-sm">تومان</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">تا</span>
                    <input type="text" value={maxValue.toLocaleString("fa-IR")} onChange={e => setMaxValue(Number(e.target.value))} className="bg-transparent w-full text-left text-xl font-medium border-b border-b-sky-500 p-2 rounded outline-none" />
                    <span className="text-sm">تومان</span>
                </div>
            </div>

            <div className="mt-4">
                <div className="slider relative h-1 rounded-md bg-gray-300">
                    <div className="progress absolute h-1 bg-sky-400 rounded" ref={progressRef}></div>
                </div>

                <div className="range-input relative">
                    <input
                        type="range"
                        onChange={e => setMinValue(Number(e.target.value))}
                        min={min}
                        step={step}
                        max={max}
                        value={minValue}
                        className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
                    />
                    <input
                        type="range"
                        onChange={e => setMaxValue(Number(e.target.value))}
                        min={min}
                        step={step}
                        max={max}
                        value={maxValue}
                        className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
                    />
                    <div className="flex items-center justify-between pt-2.5 text-xs text-gray-500">
                        <span>ارزان‌ترین</span>
                        <span>گران‌ترین</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
