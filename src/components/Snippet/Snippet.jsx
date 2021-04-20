import './Snippet.css';
import {Grid} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import * as snippetAPI from '../../services/snippets-api';

function Snippet({snippet}) {
    return (
        <main>
            <Grid celled>
                <Grid.Row id='snip-comp-title'>
                    <h1>{snippet.title}</h1>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-purpose' width={3}>
                        <h2>Purpose</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        {snippet.purpose}
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
                        {snippet.generic}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-guide' width={3}>
                        <h2>Guide</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        {snippet.notes}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-coded-exam' width={3}>
                    <h2>Coded<br></br>Example</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        {snippet.sample}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column id='snip-comp-tags' width={3}>
                        <h2>Tags</h2>
                    </Grid.Column>
                    <Grid.Column className='snip-comp-info-field' width={10}>
                        {snippet.tags}
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </main>
    );
}

export default Snippet;