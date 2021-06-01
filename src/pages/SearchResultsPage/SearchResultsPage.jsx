import './SearchResultsPage.css';
import SnippetPreview from '../../components/SnippetPreview/SnippetPreview';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as snippetAPI from '../../services/snippets-api';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'

const SearchResultsPage = props => {

    const [allSnippets, setAllSnippets] = useState([]);
    const [search, setSearch] = useForm({ search: "" })
    const [filteredResults, setFilteredResults] = useState([]);
    const {pathname} = useLocation();
    const {currentUser} = props;

    useEffect(() => {
        (async function() {
            let snippets = [];
            if (pathname === '/search/all' && !!currentUser === false) {
                snippets = await snippetAPI.getAllPublic();
            } else if (pathname === '/search/all') {
                snippets = await snippetAPI.getAllVisibleToUser(currentUser._id);
            } else if (pathname === '/search/mysnips') {
                snippets = await snippetAPI.getAllByCurrentUser(currentUser._id);
            }
            setAllSnippets(snippets);
        })();
    }, [pathname, currentUser])

    useEffect(() => {
        setFilteredResults(
            allSnippets.filter(snippet => snippet.title.toLowerCase().includes(search.text.toLowerCase()))   
        )      
    }, [search.text])

    // returns a list of all snippets if no search box is left blank
    const searchResults = search.text ? filteredResults : allSnippets;

    return (
        <>
            <section className="w-3/4 mt-6 mx-auto">
                <div id="search" className="w-2/5 flex items-center mb-4">
                    <p>Search: &nbsp;</p> 
                    <SearchBar search={search} setSearch={setSearch}/>
                </div>
                <ul className="space-y-3">
                    {searchResults.map((snippet, idx) => (
                        <li key={idx} className="bg-white shadow overflow-auto rounded-md px-6 py-4">
                            <SnippetPreview key={idx} user={props.user} snippet={snippet} />
                        </li> 
                    ))}
                </ul>
            </section>
            <div className="mb-4"></div>
        </>
    )
}

export default SearchResultsPage;