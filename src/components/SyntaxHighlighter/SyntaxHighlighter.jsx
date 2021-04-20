import { Prism } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SyntaxHighlighter(props) {
    return(
    <Prism language='javascript' style={dark}>{props.sampleState.sample}</Prism>
    )
}

