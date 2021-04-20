import './SearchResultsPage.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import * as snippetAPI from '../../services/snippets-api';
import SnippetPreview from '../../components/SnippetPreview/SnippetPreview';

const SearchResultsPage = props => {

    const [allSnippets, getAllSnippets] = useState([]);

    useEffect(() => {
        (async function() {
            const snippets = await snippetAPI.getAll();
            getAllSnippets(snippets);
        })();
    }, [])

    console.log('allSnippets: ', allSnippets)

    return (
        <>
            {allSnippets.map((snip, idx) => <SnippetPreview key={idx} data={snip} />)}
        </>
    );
}

export default SearchResultsPage;