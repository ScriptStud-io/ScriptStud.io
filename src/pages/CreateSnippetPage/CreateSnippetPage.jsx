import React from 'react';
import './CreateSnippetPage.css';
import CreateSnippetForm from '../../components/CreateSnippetForm/CreateSnippetForm'

const CreateSnippetPage = props => {
    
    return ( 
        <section>
            <div className='w-3/4 mt-6 mx-auto'>
                <CreateSnippetForm handleAddSnippet={props.handleAddSnippet} user={props.user} />
            </div>
        </section>
    );
}

export default CreateSnippetPage;