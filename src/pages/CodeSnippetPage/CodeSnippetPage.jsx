import './CodeSnippetPage.css';
import Snippet from '../../components/Snippet/Snippet';
import * as snippetAPI from '../../services/snippets-api';

import React, { useState, useEffect } from 'react';

const CodeSnippetPage = props => {
    const [CurrentSnippet, setSnippet] = useState({
        title: "",
        purpose: "",  
        generic: "",
        notes: "",
        sample: "", 
        tags: [],
        isPrivate: false,
    });

    const snipId = props.match.params.snipid;

    useEffect(() => {
        (async function() {
            const snippet = await snippetAPI.getOne(snipId);
            setSnippet(snippet);
        })();
    }, [snipId]);


    return (
        <main>
            <Snippet snippet={CurrentSnippet} currentUser={props.currentUser} handleDeleteSnippet={props.handleDeleteSnippet} />
        </main>
    );
}

export default CodeSnippetPage;