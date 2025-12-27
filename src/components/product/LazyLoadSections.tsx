"use client"

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const CommentsBox = dynamic(() => import('./comments/CommentsBox'), {
    loading: () => <p>Loading...</p>,
})
const QuetionsBox = dynamic(() => import('./questions/QuetionsBox'), {
    loading: () => <p>Loading...</p>,
})

function LazyLoadSections() {

    const [show, setShow] = useState(false)
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShow(true)
            }
        })
        observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref}>
            {show && (
                <>
                    <CommentsBox />
                    <QuetionsBox />
                </>
            )}
        </div>
    )
}

export default LazyLoadSections