import './Snippet.css';
import {Grid} from 'semantic-ui-react';

function Snippet() {
    return (
        <main>
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
                        Lorem Ipsum
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
                        Lorem Ipsum
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