import './Snippet.css';
import {Grid} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import SyntaxHighlighter from "../../components/SyntaxHighlighter/SyntaxHighlighter"

function Snippet({snipdata}) {
    let history = useHistory();
    const goBack = () => history.goBack();

    return (
        <main>
            <Grid celled>
                <Grid.Row id='snip-comp-title'>
                    <h1>{snipdata.title}</h1>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-purpose' width={3}>
                        <h2>Purpose</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        {snipdata.purpose}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-lang' width={3}>
                        <h2>Languages<br></br>Frameworks<br></br>Libraries</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        We currently don't have anything for this, should we get rid of it?
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
                        {snipdata.notes}
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
                        {snipdata.tags}
                    </Grid.Column>
                </Grid.Row>
                {/*TODO: We can use this row for any navigation/functional buttons*/}
                <Grid.Row>
                    <button onClick={goBack}>Go Back</button>
                </Grid.Row>

            </Grid>
        </main>
    );
}

export default Snippet;