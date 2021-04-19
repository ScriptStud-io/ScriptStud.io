import './EditSnippetForm.css';
import React, { useState, useEffect, useRef  } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import * as snippetAPI from '../../services/snippets-api'


export default function EditSnippetForm(props){
    const location = useLocation()
    //  allow us history access for routing 
    const history = useHistory();
    // initialize form as invalid
    const [formInvalid, setValidForm] = useState(true)
    // initialize object for form validation
    const formRef = useRef()
    const [state, handleChange] = useForm(location.state.snippet)

    // hook to check form validity 
    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
        }, [state]);

    // pass form data via submit to handleAddSnippet func 
    async function handleSubmit(e) {
        e.preventDefault()
        await snippetAPI.update(state)
        history.push('/snippets')
    }

    return ( 
            <div className="tbd">
                <div className="pt-10 space-y-6 sm:pt-5 sm:space-y-5 max-w-4xl">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Snippet</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Adjust the fields below to edit your snippet</p>
                    </div>
                    {/* start of input form */}
                    <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Title 
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                            type="text"
                            name="title"
                            id="title"
                            autoComplete="enter-title"
                            value={state.title}
                            onChange={handleChange}
                            required
                            pattern=".{2,}"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Purpose
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                            type="text"
                            name="purpose"
                            id="purpose"
                            autoComplete="purpose"
                            value={state.purpose}
                            onChange={handleChange}
                            required
                            pattern=".{2,}"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Generic Form
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                            id="generic"
                            name="generic"
                            type="text"
                            autoComplete="code"
                            value={state.generic}
                            onChange={handleChange}
                            required
                            pattern=".{2,}"
                            className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        </div>
                        
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="street_address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Usage Notes
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                            type="text"
                            name="notes"
                            id="notes"
                            autoComplete="notes"
                            value={state.notes}
                            onChange={handleChange}
                            required
                            pattern=".{2,}"
                            className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Sample
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                            type="text"
                            name="sample"
                            id="sample"
                            autoComplete='sample'
                            value={state.sample}
                            onChange={handleChange}
                            required
                            pattern=".{2,}"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Tags
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                            type="text"
                            name="tags"
                            id="tags"
                            autoComplete='tags'
                            value={state.tags}
                            onChange={handleChange}
                            required
                            pattern=".{2,}"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        </div> 
                        <button 
                        type="submit"
                        disabled={formInvalid}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >EDIT</button> 
                        <Link to="/snippets">
                        <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-6">Cancel</button>
                        </Link>       
                    </div>
                    </form>
                    {/* end of input form */}
                </div>
            </div>
        );
    }
 
