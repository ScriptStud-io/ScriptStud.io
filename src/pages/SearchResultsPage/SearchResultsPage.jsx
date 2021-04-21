import './SearchResultsPage.css';
import React, { useState, useEffect } from 'react';
import * as snippetAPI from '../../services/snippets-api';
import SnippetPreview from '../../components/SnippetPreview/SnippetPreview';

const SearchResultsPage = props => {

    const [allSnippets, setAllSnippets] = useState([]);

    useEffect(() => {
        (async function() {
            const snippets = await snippetAPI.getAll();
            setAllSnippets(snippets);
        })();
    }, [])

    console.log('allSnippets: ', allSnippets)

    return (
        <>
        <main className="w-3/4 mt-6 mx-auto">
            <ul className="space-y-3">
            {allSnippets.map((snip, idx) => (
                <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
                    <SnippetPreview key={idx} data={snip} />
                </li>
            ))}
            </ul>
        </main>
        </>
    )
}

export default SearchResultsPage;


