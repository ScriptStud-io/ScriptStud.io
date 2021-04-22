import React, { useState, useEffect } from 'react';
import './EditSnippetPage.css';
import EditSnippetForm from '../../components/EditSnippetForm/EditSnippetForm';
import * as snippetAPI from '../../services/snippets-api';


const EditSnippetPage = props => {
    
    const [CurrentSnippet, setSnippet] = useState({});

    useEffect(() => {
        (async function() {
            const snippet = await snippetAPI.getOne(props.match.params.id);
            setSnippet(snippet);
        })();
    }, [props.match.params.id]);

return ( 
    <>
        <div className='CreateSnippetPage'>
            <EditSnippetForm
            handleAddSnippet={props.handleAddSnippet}
            user={props.user}
            currentSnippet={CurrentSnippet} />
        </div>
    </>
);
}

export default EditSnippetPage;