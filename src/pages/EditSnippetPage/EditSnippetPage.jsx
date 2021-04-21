import React from 'react';
import './EditSnippetPage.css';
import EditSnippetForm from '../../components/EditSnippetForm/EditSnippetForm'

const EditSnippetPage = (props) => {
    
    return ( 
        <>
            <div className='EditSnippetPage'>
                <EditSnippetForm
                handleAddSnippet={props.handleUpdateSnippet}
                user={props.user} />
            </div>
        </>
    );
}

export default EditSnippetPage;