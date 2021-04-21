import './SnippetPreview.css';
import React from 'react';
import SnippetPreviewToolBar from '../SnippetToolBar/SnippetToolBar'

function SnippetPreview(props) {

    const createdAt = new Date(props.data.createdAt).toDateString();
    const updatedAt = new Date(props.data.updatedAt).toDateString();
    const previewText = props.data.purpose.length < 50 ? props.data.purpose : props.data.purpose.substring(0,49) + '...';
    const viewLinkUrl = `/snip/${props.data._id}`;

    return (
        <article className='snip-preview'>
            <div className='snip-preview-logo'></div>
            <div className='snip-preview-content'>

                <div className='snip-preview-title'>{props.data.title} <a href={viewLinkUrl}>[View this Snippet]</a></div>
                <div>{previewText}</div>
                <div>Created by: {props.data.addedBy.name} | Created on: {createdAt} | Last Edited: {updatedAt}</div>
                <SnippetPreviewToolBar/>
            </div>
        </article>
    );
}

export default SnippetPreview;