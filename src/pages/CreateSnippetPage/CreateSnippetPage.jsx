import React from 'react';
import './CreateSnippetPage.css';
import CreateSnippetForm from '../../components/CreateSnippetForm/CreateSnippetForm'

const CreateSnippetPage = (props) => {
    
    return ( 
        <>
            <div className='CreateSnippetPage'>
                <CreateSnippetForm
                handleAddSnippet={props.handleAddSnippet}
                user={props.user} />
            </div>
        </>
    );
}

export default CreateSnippetPage;