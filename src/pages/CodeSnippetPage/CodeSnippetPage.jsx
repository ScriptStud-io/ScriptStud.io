import './CodeSnippetPage.css';
import Snippet from '../../components/Snippet/Snippet';
import * as snippetAPI from '../../services/snippets-api';

import React, { useState, useEffect } from 'react';

const CodeSnippetPage = props => {
    const [CurrentSnippet, setSnippet] = useState({});

    useEffect(() => {
        (async function() {
            const snippet = await snippetAPI.getOne(props.match.params.snipid);
            setSnippet(snippet);
        })();
    }, [props.match.params.snipid]);

    return (
        <main>
            <Snippet snipdata={CurrentSnippet} />
        </main>
    );
}

export default CodeSnippetPage;