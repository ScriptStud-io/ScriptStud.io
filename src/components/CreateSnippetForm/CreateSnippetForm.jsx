import './CreateSnippetForm.css';
import React, { Component } from 'react';

// * 1st Iteration of Create Snippet Form, 4/13/21, Christian Mosley
// ! form is not tied to any routes, so testing is not possible 
// TODO: add ability to save new snippet to Snippet Schema DB
// TODO: update generic and sample inputs to look like code syntax (codemirror, react syntax highlighter? )
// TODO: update tag input(s) with parsing functionality
// TODO: add styling (Jessica)


class CreateSnippetForm extends Component {
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
            <div className="CreateSnippetForm">
                <h2>Create Snippet</h2>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                <label>
                    <span>Title:</span>
                    <input name="title" 
                    value={this.state.title} 
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
                    value={this.state.generic}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>

                <label>
                    <span>Notes:</span>
                    <input name="notes" 
                    value={this.state.notes}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>
        {/* TODO: This input will need to be code syntax */}       
                <label>
                    <span>Sample:</span>
                    <input name="sample" 
                    value={this.state.sample}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>
        {/* TODO: This input will need refactoring for tag autocomplete with possibly semantic UI multiple selection functionality. MVP level functionality could use parsing by '\s' (spaces) to bring in each seperate tag if multiple present */}
                <label>
                    <span>Tags:</span>
                    <input name="tags" 
                    value={this.state.tags}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>

                <button 
                type='submit'
                disabled={this.state.formInvalid}
                >ADD Snippet</button>
                </form>
            </div>
        );
    }
}
 
export default CreateSnippetForm;