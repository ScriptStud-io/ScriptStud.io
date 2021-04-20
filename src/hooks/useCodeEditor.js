import { useState } from 'react'

export const useCodeEditor = (initialSamples) => {
    const [sample, setSamples] = useState(initialSamples)

    return [
        sample, 
        e => {
            console.log('e:', e)
            setSamples({
                sample: e
            })
        }
    ]
}