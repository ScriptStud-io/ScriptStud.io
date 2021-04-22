import './Snippet.css';
import {Grid} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import SyntaxHighlighter from "../../components/SyntaxHighlighter/SyntaxHighlighter"

function Snippet(props) {
    let history = useHistory();
    const goBack = () => history.goBack();

    const disableIfNotUser = props.currentUser._id != props.snipdata.addedBy ? true : false;

    return (
        <main>
            <p>{JSON.stringify(props)}</p>
            <Grid celled>
                <Grid.Row id='snip-comp-title'>
                    <h1>{props.snipdata.title}</h1>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-purpose' width={3}>
                        <h2>Purpose</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        {props.snipdata.purpose}
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
                        {props.snipdata.notes}
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
                        {props.snipdata.tags}
                    </Grid.Column>
                </Grid.Row>
                {/*TODO: We can use this row for any navigation/functional buttons*/}
                <Grid.Row>
                    <Grid.Column id='snip-comp-options' width={3}>
                        <h2>Options</h2>
                    </Grid.Column>
                    <Grid.Column id='snip-comp-options-cell' className='snip-comp-info-field' width={10}>
                        <button className='snippet-options-button' onClick={goBack}>Go Back</button>
                        <button className='snippet-options-button'>Edit Snippet</button>
                        <button className='snippet-options-button' disabled={disableIfNotUser} >Delete Snippet</button>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </main>
    );
}

export default Snippet;