import { useState } from 'react'

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)

    return [
        values, 
        (e, name) => {
            if(e.target) {
                setValues({
                    ...values, 
                    [e.target.name]: e.target.value
                })
            }
            // If statement expands hook to handle CodeEditor and SyntaxHighlighter dynamic state transfer
            else
                setValues({
                    ...values, 
                    [name]: e
                })

        }
    ]
}