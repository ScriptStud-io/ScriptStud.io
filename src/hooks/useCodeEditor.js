import { useState } from 'react'

export const useCodeEditor = (initialSamples) => {
    const [samples, setSamples] = useState(initialSamples)

    return [
        samples, 
        (name, e) => {
            setSamples({
                ...samples,
                [name]: e
            })
        }
    ]
}