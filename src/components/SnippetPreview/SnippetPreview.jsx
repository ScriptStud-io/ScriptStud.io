import './SnippetPreview.css';
import React from 'react';

function SnippetPreview(props) {

    const createdAtDateObject = new Date(props.data.createdAt);
    const createdAt = createdAtDateObject.toDateString();

    const updatedAtDateObject = new Date(props.data.updatedAt);
    const updatedAt = updatedAtDateObject.toDateString();

    return (
        <div className='snip-preview'>
            <div className='snip-preview-logo'></div>
            <div className='snip-preview-content'>

                <div className='snip-preview-title'>{props.data.title}</div>
                <div>{props.data.purpose.length < 50 ? props.data.purpose : props.data.purpose.substring(0,49) + '...'}</div>
                <div>Created by: {props.data.addedBy.name} | Created on: {createdAt} | Last Edited: {updatedAt}</div>

            </div>
        </div>
    );
}

export default SnippetPreview;