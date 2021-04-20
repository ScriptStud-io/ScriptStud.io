import React from 'react';

import './SplashPage.css';

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
        <form action='GET'>
            <div id='working-with-line'>
            <h1>I am working with </h1>
            <select name='technology' id='tech-select'>
                {tagList.map(tag => <option value={tag}>{tag}</option>)}
            </select>
            </div>
            <input type='submit' value='Submit' />
            
        </form>
    );
}

export default SplashPage;

// TODO: the following code from semantic will create a dropdown menu with predictive typing, i'd like to use it but can't get it to work

{/* <div class="ui floating dropdown labeled search icon button">
<i class="world icon"></i>
<span class="text">Select Language</span>
<div class="menu">
    <div class="item">Arabic</div>
    <div class="item">Chinese</div>
    <div class="item">Danish</div>
    <div class="item">Dutch</div>
    <div class="item">English</div>
    <div class="item">French</div>
    <div class="item">German</div>
    <div class="item">Greek</div>
    <div class="item">Hungarian</div>
    <div class="item">Italian</div>
    <div class="item">Japanese</div>
    <div class="item">Korean</div>
    <div class="item">Lithuanian</div>
    <div class="item">Persian</div>
    <div class="item">Polish</div>
    <div class="item">Portuguese</div>
    <div class="item">Russian</div>
    <div class="item">Spanish</div>
    <div class="item">Swedish</div>
    <div class="item">Turkish</div>
    <div class="item">Vietnamese</div>
</div>
</div>*/}