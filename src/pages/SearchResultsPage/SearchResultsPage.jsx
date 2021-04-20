import './SearchResultsPage.css';
import React, { useState, useEffect, useRef  } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import * as snippetAPI from '../../services/snippets-api';
import SnippetPreview from '../../components/SnippetPreview/SnippetPreview';
import userEvent from '@testing-library/user-event';

const SearchResultsPage = (props) => {

    let [allSnippets, getAllSnippets] = useState({});

    useEffect(() => {
        if (props.search === 'all') {
            //TODO: check if state is currently empty
            console.log('hooray!!!!!!');
            getAllSnippets(allSnippets = snippetAPI.getAll());
            console.log(allSnippets)
        }
    })

    // useEffect(() => {
    //     (async function(){
    //       const tvshows = await tvshowAPI.getAll();
    //       setTvshows(tvshows);
    //     })();
    //   }, [])


    return (
        <>
            <SnippetPreview />
            <SnippetPreview />
            <SnippetPreview />
            <SnippetPreview />
        </>
    );
}

// class SearchResultsPage extends React.Component {
//     state = {  }


//     render() { 
//         return ( <h2>SearchResultsPage</h2> );
//     }
// }

export default SearchResultsPage;