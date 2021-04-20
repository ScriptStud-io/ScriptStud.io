import './Snippet.css';
import {Grid} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import * as snippetAPI from '../../services/snippets-api';
import SyntaxHighlighter from "../../components/SyntaxHighlighter/SyntaxHighlighter"

function Snippet(props) {
    console.log(`props.match.params: ${JSON.stringify(props.snipId.snipid)}`)

    const history = useHistory();

    async function getSnippet(snippetId) {
        console.log(`getSnippet results: ${await snippetAPI.getOne(snippetId)}`);
    }

    getSnippet(JSON.stringify(props.snipId.snipid))

    return (
        <main>
            <h1>{JSON.stringify(props.snipId)}</h1>
            <Grid celled>
                <Grid.Row id='snip-comp-title'>
                    <h1>Title</h1>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-purpose' width={3}>
                        <h2>Purpose</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        Lorem Ipsum
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-lang' width={3}>
                        <h2>Languages<br></br>Frameworks<br></br>Libraries</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        Lorem Ipsum
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-genform' width={3}>
                        <h2>Generic Form</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                {/* this syntax component will accept the state.generic prop */}
                    {/* <SyntaxHighlighter name="generic" state={state.generic} /> */}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-guide' width={3}>
                        <h2>Guide</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        Lorem Ipsum
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-coded-exam' width={3}>
                    <h2>Coded<br></br>Example</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                {/* this syntax component will accept the state.sample prop */}
                    {/* <SyntaxHighlighter  /> */}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-tags' width={3}>
                        <h2>Tags</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        Lorem Ipsum
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </main>
    );
}

export default Snippet;