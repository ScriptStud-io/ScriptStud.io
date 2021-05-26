import './Snippet.css';
import {Grid} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import * as snippetAPI from '../../services/snippets-api';
import SyntaxHighlighter from "../../components/SyntaxHighlighter/SyntaxHighlighter";
import SnippetToolBar from "../SnippetToolBar/SnippetToolBar"
import { ArrowLeftIcon } from '@heroicons/react/solid'

function Snippet(props) {
    let history = useHistory();
    const goBack = () => history.goBack();

    const deleteClickHandler = () => snippetAPI.deleteOne(props.snippet._id);

    const privateMessage = 'This is a private snippet.  It is only visible to you.';
    const publicMessage = 'This is a public snippet.  Anyone can view it.';

    return (
        <main className="w-3/4 mt-6 mx-auto flex">
            <ul className="">
            <Grid celled>
                <Grid.Row id='snip-comp-title'>

                <li id="test-top" className="w-1/6 bg-white shadow overflow-hidden rounded-md px-6 py-4 border-t-4  border-current">
                    <Grid.Column id='snip-comp-title' >
                        <h2>Title</h2>
                    </Grid.Column>
                </li>
                <li className="ml-2 w-4/6 bg-white shadow overflow-hidden rounded-md px-4 py-2 border-t-4  border-current">
                    <Grid.Column className='snip-comp-info-field' >
                        {props.snippet.title}
                    </Grid.Column>
                </li>
                </Grid.Row >
                <div className="mt-3"></div>

                <Grid.Row id='snip-comp-purpose'>
                <li className="w-1/6 bg-white shadow overflow-hidden rounded-md px-6 py-4 border-t-4  border-current">
                    <Grid.Column id='snip-comp-purpose' width={3}>
                        <h2>Purpose</h2>
                    </Grid.Column>
                    </li>
                    <li className="ml-2 w-4/6 bg-white shadow overflow-hidden rounded-md px-4 py-2 border-t-4  border-current">
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        {props.snippet.purpose}
                    </Grid.Column>
                    </li>
                </Grid.Row>
                <div className="mt-3"></div>

                <Grid.Row id='snip-comp-genform'>
                <li className="w-1/6 bg-white shadow overflow-hidden rounded-md px-6 py-4 border-t-4  border-current">
                    <Grid.Column id='snip-comp-genform' width={3}>
                        <h2>Generic Form</h2>
                    </Grid.Column>
                    </li>
                    <li className="ml-2 w-4/6 bg-white shadow overflow-hidden rounded-md px-4 py-2 border-t-4  border-current">
                    <Grid.Column className='snip-comp-info-field' width={10}>
                    <SyntaxHighlighter name="generic" state={props.snippet} />
                    </Grid.Column>
                    </li>
                </Grid.Row>
                <div className="mt-3"></div>

                <Grid.Row id='snip-comp-guide'>
                <li className="w-1/6 bg-white shadow overflow-hidden rounded-md px-6 py-4 border-t-4  border-current">
                    <Grid.Column id='snip-comp-guide' width={3}>
                        <h2>Guide</h2>
                    </Grid.Column>
                    </li>
                    <li className="ml-2 w-4/6 bg-white shadow overflow-hidden rounded-md px-4 py-2 border-t-4  border-current">
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        {props.snippet.notes}
                    </Grid.Column>
                    </li>
                </Grid.Row>
                <div className="mt-3"></div>

                <Grid.Row id='snip-comp-coded-exam'>
                <li className="w-1/6 bg-white shadow overflow-hidden rounded-md px-6 py-4 border-t-4  border-current">
                    <Grid.Column id='snip-comp-coded-exam' width={3}>
                    <h2>Coded<br></br>Example</h2>
                    </Grid.Column>
                    </li>
                    <li className="ml-2 w-4/6 bg-white shadow overflow-hidden rounded-md px-4 py-2 border-t-4  border-current">
                    <Grid.Column className='snip-comp-info-field' width={10}>
                    <SyntaxHighlighter name="sample" state={props.snippet} />
                    </Grid.Column>
                    </li>
                </Grid.Row>

                <div className="mt-3"></div>

                <Grid.Row id='snip-comp-privacy'>
                <li className="w-1/6 bg-white shadow overflow-hidden rounded-md px-6 py-4 border-t-4  border-current">
                    <Grid.Column id='snip-comp-tags' width={3}>
                        <h2>Tags</h2>
                    </Grid.Column>
                    </li>
                    <li className="ml-2 w-4/6 bg-white shadow overflow-hidden rounded-md px-4 py-2 border-t-4  border-current">
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        {props.snippet.tags}
                    </Grid.Column>
                    </li>
                </Grid.Row>

                <div className="mt-3"></div>

                <Grid.Row id='snip-comp-tags'>
                <li className="w-1/6 bg-white shadow overflow-hidden rounded-md px-6 py-4 border-t-4  border-current">
                    <Grid.Column id='snip-comp-tags' width={3}>
                        <h2>Privacy</h2>
                    </Grid.Column>
                </li>
                <li className="ml-2 w-4/6 bg-white shadow overflow-hidden rounded-md px-4 py-2 border-t-4  border-current">
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        {props.snippet.isPrivate ? privateMessage : publicMessage}
                    </Grid.Column>
                </li>
                </Grid.Row>

                <div className="mt-3"></div>
                <Grid.Row>
                    <li className="w-1/6 overflow-hidden rounded-md px-6 py-4">
                        <Grid.Column id='snip-comp-tags' width={3}>
                            <button
                                onClick={goBack}
                                type="button"
                                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 mr-3"
                            >
                            <span className="sr-only">Edit</span>
                            <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </Grid.Column>
                        </li>
                        <li className="ml-2 w-4/6 overflow-hidden rounded-md px-4 py-2">
                        <Grid.Column>
                            <SnippetToolBar user={props.currentUser} snippet={props.snippet}  deleteClickHandler={deleteClickHandler}  />
                        </Grid.Column>
                        </li>
                </Grid.Row>
                
            </Grid>
            </ul>
        </main>
    );
}

export default Snippet;