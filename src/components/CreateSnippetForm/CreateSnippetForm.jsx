import './CreateSnippetForm.css';
import React, { Component, useState, useEffect, useRef  } from 'react';

// * 1st Iteration of Create Snippet Form, 4/13/21, Christian Mosley
// ! form is not tied to any routes, so testing is not possible 
// TODO: add ability to save new snippet to Snippet Schema DB
// TODO: update generic and sample inputs to look like code syntax (codemirror, react syntax highlighter? )
// TODO: update tag input(s) with parsing functionality
// TODO: add styling (Jessica)


export default class CreateSnippetForm extends Component {
    state = { 
        newSnippet: {
            title: "",
            purpose: "",  
            generic: "", 
            notes: "",
            sample: "", 
            tags: [],
        },
        formInvalid: true
    };

    formRef = React.createRef();

    // passes component state data to app to be stored in db
    handleSubmit = e => {
		e.preventDefault();
		this.props.handleAddSnippet(this.state.newSnippet);
		};

    // this function will check validity of inputs and set those inputs to corresponding state props
    handleChange = e => {
        const newSnippet = {...this.state.newSnippet};
        newSnippet[e.target.name] = e.target.value;
        this.setState({
        newSnippet,
        // update with formRef
        formInvalid: !this.formRef.current.checkValidity()
        });
    };

    render() { 
        return ( 
            <div className="tbd">
                <div className="pt-10 space-y-6 sm:pt-5 sm:space-y-5 max-w-4xl">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Create Snippet</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Fill in the fields below to create your snippet</p>
                    </div>
                    {/* start of input form */}
                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Title
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            autoComplete="given-name"
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
                            name="last_name"
                            id="last_name"
                            autoComplete="family-name"
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
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
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
                            name="street_address"
                            id="street_address"
                            autoComplete="street-address"
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
                            name="city"
                            id="city"
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
                            name="state"
                            id="state"
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        </div>         
                    </div>
                    {/* end of input form */}
                </div>
            </div>
        );
    }
}


        // {/*  old code */}
//                 <h2>Create Snippet</h2>
//                 <form ref={this.formRef} onSubmit={this.handleSubmit}>
//                 <label>
//                     <span>Title:</span>
//                     <input name="title" 
//                     value={this.state.title} 
//                     onChange={this.handleChange}
//                     required
//                     pattern=".{4,}"
//                     />
//                 </label>

//                 <label>
//                     <span>Purpose:</span>
//                     <input name="purpose" 
//                     value={this.state.purpose}
//                     onChange={this.handleChange} 
//                     required
//                     pattern=".{4,}"
//                     />
//                 </label>
//         {/* TODO: This input will need to be code syntax */}
//                 <label>
//                     <span>Generic:</span>
//                     <input name="generic" 
//                     value={this.state.generic}
//                     onChange={this.handleChange} 
//                     required
//                     pattern=".{4,}"
//                     />
//                 </label>

//                 <label>
//                     <span>Notes:</span>
//                     <input name="notes" 
//                     value={this.state.notes}
//                     onChange={this.handleChange} 
//                     required
//                     pattern=".{4,}"
//                     />
//                 </label>
//         {/* TODO: This input will need to be code syntax */}       
//                 <label>
//                     <span>Sample:</span>
//                     <input name="sample" 
//                     value={this.state.sample}
//                     onChange={this.handleChange} 
//                     required
//                     pattern=".{4,}"
//                     />
//                 </label>
//         {/* TODO: This input will need refactoring for tag autocomplete with possibly semantic UI multiple selection functionality. MVP level functionality could use parsing by '\s' (spaces) to bring in each seperate tag if multiple present */}
//                 <label>
//                     <span>Tags:</span>
//                     <input name="tags" 
//                     value={this.state.tags}
//                     onChange={this.handleChange} 
//                     required
//                     pattern=".{4,}"
//                     />
//                 </label>

//                 <button 
//                 type='submit'
//                 disabled={this.state.formInvalid}
//                 >ADD Snippet</button>
//                 </form>
//             </div>
 
 
