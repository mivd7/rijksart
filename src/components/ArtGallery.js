import React, { Component } from 'react'

const ArtGallery = (props) => {
    console.log(props)

    if (!props) return (<div>this sucks</div>)
    return (
      <div>
        <img src={props.painting.url} alt={props.painting.guid} />
      </div>
    )
}

export default ArtGallery