import './SyntaxHighlighter.css'
import { Prism } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SyntaxHighlighter(props) {
    return <Prism id='test' wrapLongLines={true} language='javascript' style={dark}>{props.state[props.name]}</Prism>;
}