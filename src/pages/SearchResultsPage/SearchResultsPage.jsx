import './SearchResultsPage.css';

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