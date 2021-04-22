import './SnippetPreview.css';
import React from 'react';
import SnippetPreviewToolBar from '../SnippetToolBar/SnippetToolBar'
import { FolderOpenIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

function SnippetPreview(props) {

    const createdAt = new Date(props.data.createdAt).toDateString();
    const updatedAt = new Date(props.data.updatedAt).toDateString();
    const titleText = props.data.title.length < 40 ? props.data.title : props.data.title.substring(0,39) + '...';
    const previewText = props.data.purpose.length < 120 ? props.data.purpose : props.data.purpose.substring(0,119) + '...';
    const viewLinkUrl = `/snip/${props.data._id}`;

    return (
        <article className='snip-preview'>
            <Link to={viewLinkUrl}>
            <div className='snip-preview-logo flex justify-center items-center '><FolderOpenIcon className="h-16 w-16 absolute" aria-hidden="true"/><div className="mt-16">VIEW</div></div></Link>
            <div className='snip-preview-content'>

                <div className='snip-preview-title'>{titleText}</div>
                <div className="h-2/4">{previewText}</div>
                <div className="snip-preview-bottom">Created by: {props.data.addedBy.name} | Created on: {createdAt} | Last Edited: {updatedAt}</div>
            </div>
        </article>
    );
}

export default SnippetPreview;