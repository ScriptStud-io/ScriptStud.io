import './CodeSnippetPage.css';
import Snippet from '../../components/Snippet/Snippet';
import * as snippetAPI from '../../services/snippets-api';

import React, { useState, useEffect } from 'react';

const CodeSnippetPage = props => {
    console.log(`props.match: ${JSON.stringify(props.match)}`)
    console.log('props.match.params.snipid: ', props.match.params.snipid)

    const [CurrentSnippet, setSnippet] = useState({});

    useEffect(() => {
        (async function() {
            const snippet = await snippetAPI.getOne(props.match.params.snipid);
            console.log('snippet returned is: ', snippet)
            setSnippet(snippet);
        })();
    }, [props.match.params.snipid])

    return (
        <main>
            <Snippet snippet={CurrentSnippet} />
        </main>
    );
}

export default CodeSnippetPage;