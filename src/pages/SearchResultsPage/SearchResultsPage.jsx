import './SearchResultsPage.css';
import SnippetPreview from '../../components/SnippetPreview/SnippetPreview';
import * as snippetAPI from '../../services/snippets-api';
import React from 'react';
import {useEffect, useState} from 'react';

const SearchResultsPage = props => {

    const [allSnippets, getAllSnippets] = useState([]);

    useEffect(() => {
        (async function() {
            const snippets = await snippetAPI.getAll();
            getAllSnippets(snippets);
        })();
    }, [])

    return (
        <main>
            {allSnippets.map((snip, idx) => <SnippetPreview key={idx} data={snip} />)}
        </main>
    );
}

export default SearchResultsPage;