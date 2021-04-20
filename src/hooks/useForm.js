import { useState } from 'react'

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)

    return [
        values, 
        (e, name) => {
            console.log('e, name:', e, name)
            if(e.target) {
                setValues({
                    ...values, 
                    [e.target.name]: e.target.value
                })
            }
            else
                setValues({
                    ...values, 
                    [name]: e
                })

        }
    ]
}