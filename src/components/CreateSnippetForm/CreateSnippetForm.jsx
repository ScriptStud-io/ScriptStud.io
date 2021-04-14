import './CreateSnippetForm.css';
import React, { Component } from 'react';

// * 1st Iteration of Create Snippet Form, 4/13/21, Christian Mosley
// ! form is not tied to any routes, so testing is not possible 
// TODO: add ability to save new snippet to Snippet Schema DB
// TODO: update generic and sample inputs to look like code syntax (codemirror, react syntax highlighter? )
// TODO: update tag input(s) with parsing functionality
// TODO: add styling (Jessica)


class CreateSnippet extends Component {
    state = { 
        newSnippet: {
            title: "",
            purpose: "",  
            generic: "", 
            notes: "",
            sample: "", 
            tags: "",
        },
        formInvalid: true
    };

    formRef = React.createRef();

    // this function will check the validity of the entire form and update state with new entry if form is valid 
    addSnippet = e => {
        e.preventDefault();
        if (!this.formRef.current.checkValidity()) return;
        // Using the "function" approach because relying on existing state
        this.setState(state => ({
        // Always replace, don't mutate top-level state properties
        Snippets: [...state.Snippets, state.newSnippet],
        // Reset the inputs for better UX
        newSnippet: {Snippet: '', level: 3}
        }));
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
            <section>
                <h2>Create Snippet</h2>
                <form ref={this.formRef} onSubmit={this.addSnippet}>
                <label>
                    <span>Title:</span>
                    <input name="title" 
                    value={this.state.Snippet} 
                    onChange={this.handleChange}
                    required
                    pattern=".{4,}"
                    />
                </label>

                <label>
                    <span>Purpose:</span>
                    <input name="purpose" 
                    value={this.state.purpose}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>
        {/* TODO: This input will need to be code syntax */}
                <label>
                    <span>Generic:</span>
                    <input name="generic" 
                    value={this.state.purpose}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>

                <label>
                    <span>Notes:</span>
                    <input name="purpose" 
                    value={this.state.purpose}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>
        {/* TODO: This input will need to be code syntax */}       
                <label>
                    <span>Sample:</span>
                    <input name="purpose" 
                    value={this.state.purpose}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>
        {/* TODO: This input will need refactoring for tag autocomplete with possibly semantic UI multiple selection functionality. MVP level functionality could use parsing by '\s' (spaces) to bring in each seperate tag if multiple present */}
                <label>
                    <span>Tags:</span>
                    <input name="purpose" 
                    value={this.state.purpose}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>

                <button 
                onClick={this.addSnippet}
                disabled={this.state.formInvalid}
                >ADD Snippet</button>
                </form>
            </section>
        );
    }
}
 
export default CreateSnippet;