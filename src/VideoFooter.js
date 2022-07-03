import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react"

function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h3>@blske</h3>
            <p>Random text in a description</p>
            <div className='videoFooter_ticker'>
                <MusicNoteIcon className="videoFooter_icon">
                    <Ticker mode="smooth">

                    </Ticker>
                </MusicNoteIcon>
            </div>
        </div>
        <img classname="videoFooter_record"
    src="https://static.thenounproject.com/png/934821-200.png"
    alt=""/>
    </div>
    
  )
}

export default VideoFooter