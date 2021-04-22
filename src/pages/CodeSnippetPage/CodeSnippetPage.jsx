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

    });

    useEffect(() => {
        (async function() {
            const snippet = await snippetAPI.getOne(props.match.params.snipid);
            setSnippet(snippet);
        })();
    }, []);
    console.log('CurrentSnippet:', CurrentSnippet)

    console.log('prosp: ', props)

    return (
        <main>
            <Snippet snipdata={CurrentSnippet} currentUser={props.currentUser} handleDeleteSnippet={props.handleDeleteSnippet} />
        </main>
    );
}

export default CodeSnippetPage;