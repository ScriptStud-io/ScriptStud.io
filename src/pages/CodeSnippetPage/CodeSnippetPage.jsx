import './CodeSnippetPage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import SideNav from '../../components/SideNav/SideNav';
import Snippet from '../../components/Snippet/Snippet';

import React from 'react';

function CodeSnippetPage(props) {
    console.log ('hello world!!!!!!!!')
    console.log(`props.match: ${JSON.stringify(props.match)}`)
    return (
        <main>
            <Snippet snipId={props.match.params} />
        </main>
    );
}



// class CodeSnippetPage extends React.Component {
//     state = {  }
//     render() { 
//         return (
//             <main>
//                 <Snippet />
//             </main>
//         );
//     }
// }

export default CodeSnippetPage;