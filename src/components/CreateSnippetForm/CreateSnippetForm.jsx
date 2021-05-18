import './CreateSnippetForm.css';
import React, { useState, useEffect, useRef  } from 'react';
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import * as snippetAPI from '../../services/snippets-api'
import CodeEditor from '../CodeEditor/CodeEditor'
import SyntaxHighlighter from '../SyntaxHighlighter/SyntaxHighlighter'

// TODO: update tag input(s) with parsing functionality
// TODO: fix create button disable state on form invalidity


export default function CreateSnippetForm(props){
    //  allow us history access for routing 
    const history = useHistory();
    // initialize form as invalid
    const [formInvalid, setValidForm] = useState(true)
    // initialize object for form validation
    const formRef = useRef()
    //  custom hook to initialize state
    const [state, handleChange] = useForm({
        title: "",
        purpose: "",  
        generic: "Template",
        notes: "",
        sample: "Insert Code", 
        tags: [],
    })

    // function to handle snippet create via api
    async function handleAddSnippet(newSnippetData){
        await snippetAPI.create(newSnippetData)
        history.push('/search/all')
    }

    // hook to check form validity 
    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
        }, [state]);

    // pass form data via submit to handleAddSnippet func 
    async function handleSubmit(e) {
        e.preventDefault()
        handleAddSnippet(state)
    }

    return ( 
      <section>
          <div className="pt-10 space-y-6 sm:pt-5 sm:space-y-5 max-w-4xl">
              <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Create Snippet</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Fill in the fields below to create your snippet</p>
              </div>
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
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md px-2"
                        />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Purpose
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                        rows="4" 
                        cols="50"
                        type="text" 
                        name="purpose"
                        id="purpose"
                        autoComplete="purpose"
                        value={state.purpose}
                        onChange={handleChange}
                        required
                        pattern=".{2,}"
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md px-2 py-1"
                        />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Generic Form
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <CodeEditor name="generic" handleChange={handleChange} state={state} />
                        <br></br> 
                        <SyntaxHighlighter name="generic" state={state}  />
                    </div> 
                  </div>
                  
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="street_address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Usage Notes
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                        rows="4" 
                        cols="50"
                        type="text"
                        name="notes"
                        id="notes"
                        autoComplete="notes"
                        value={state.notes}
                        onChange={handleChange}
                        required
                        pattern=".{2,}"
                        className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md px-2 py-1"
                        />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Sample
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <CodeEditor name="sample" handleChange={handleChange} state={state} /> 
                    <br></br>
                    <SyntaxHighlighter name="sample" state={state} />
                    </div>
                  </div>
                  
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Tags: (seperate with commas)
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
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md px-2"
                        />
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-6">
                      <button 
                      type="submit"
                      disabled={formInvalid}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >CREATE SNIPPET</button>
                  </div>        
                </div>
              </form>
          </div>
      </section>
    );
}
 
