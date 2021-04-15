import React from 'react';
import './CreateSnippetPage.css';
import CreateSnippetForm from '../../components/CreateSnippetForm'

// import PageHeader from '../../components/PageHeader/PageHeader';
// import PageFooter from '../../components/PageFooter/PageFooter';
// import SideNav from '../../components/SideNav/SideNav';

const CreateSnippetPage = (props) => {
    
        return ( 
            <>
                <div className='CreateSnippetPage'>
                    <CreateSnippetForm
                    handleAddSnippet={props.handleAddSnippet}
                    user={props.user} />
                </div>
            </>
         );
    }

 
export default CreateSnippetPage;