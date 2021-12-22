import React from 'react'

const Video = ({ source }) => {
    return (
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src={source}></iframe>
        </div>
    )
}

export default Video
