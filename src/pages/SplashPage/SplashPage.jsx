import React from 'react';

// this is for testing purposes until we have a tags model in MongoDB
const tags = [
    'html',
    'css',
    'javascript',
    'node/express',
    'mongoDB',
    'mongoose',
    'react',
    'kubernetes',
    'docker',
    'postgreSQL',
    'python',
    'django',
    'rust',
    'c++',
    'c#',
    'jQuery',
    'R',
    'java',
    'fortran',
    'kotlin',
    'powershell'
]

// TODO: this form will need to send a GET request to a MongoDB collection
// TODO: "name" value in "select" will need to find a particular technology
// TODO: load search results page with snippet previews that match tech searched

function SplashPage() {
    const tagList = tags;
    return (
        <main>
        <form action='GET'>
            <h1>I am working with </h1>
            <select name='technology' id='tech-select'>
                {tagList.map(tag => <option value={tag}>{tag}</option>)}
            </select>
            <br/>
            <input type='submit' value='Submit' />
        </form>
        </main>
    );
}

export default SplashPage;

{/* <div className="ui floating dropdown labeled search icon button">
<span className="text">Choose a Technology</span>
<div className="menu">
    <div className="item">Arabic</div>
    <div className="item">Chinese</div>
    <div className="item">Danish</div>
</div>
</div> */}