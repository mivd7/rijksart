import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadCollectionInfo} from '../actions/collection'
import {loadPaintingById} from '../actions/painting'
import Carousel from './Carousel'

const removeCulturePrefix = (id) => {
  var arr = Array.from(id)
  return id.slice(3, arr.length)
}

class Painting extends Component {
  componentDidMount() {
    this.props.loadPaintingById(removeCulturePrefix(this.props.match.params.id))
  }

  componentDidUpdate() {
    this.props.loadCollectionInfo()
  }
  render() {
    console.log(this.props)
    const collection = this.props.collection
    const webImage = this.props.painting.webImage
    
    return (
      <div>{!webImage && <p>loading image</p>}
       {webImage && <div><img src={webImage.url} 
                                            alt="more images" 
                                            style={{maxWidth: 300, maxHeight: 300}}/>
            <h1>{this.props.painting.title} by {this.props.painting.principalMaker} </h1>
            <p>{this.props.painting.description}</p>
            <Carousel images={collection} />
            </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  painting: state.painting,
  webImage: state.painting.webImage,
  collection: state.collection
})

export default connect(mapStateToProps, { loadPaintingById, loadCollectionInfo })(Painting)
