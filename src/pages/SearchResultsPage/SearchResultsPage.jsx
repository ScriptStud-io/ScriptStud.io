import './SearchResultsPage.css';
import React, { useState, useEffect } from 'react';
import * as snippetAPI from '../../services/snippets-api';
import SnippetPreview from '../../components/SnippetPreview/SnippetPreview';
import SearchBar from '../../components/SearchBar/SearchBar'
import { useForm } from '../../hooks/useForm'


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
        <section className="w-3/4 mt-6 mx-auto">
            <div id="search" className="w-2/5 flex items-center mb-4">
               <p>Search: &nbsp;</p> 
               <SearchBar />
            </div>
            <ul className="space-y-3">
            {allSnippets.map((snip, idx) => (
                <li key={idx} className="bg-white shadow overflow-auto rounded-md px-6 py-4">
                    <SnippetPreview key={idx} data={snip} />
                </li>
            ))}
            </ul>
        </section>
        </>
    )
}

export default SearchResultsPage;


