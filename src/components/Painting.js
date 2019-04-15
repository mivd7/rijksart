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
    this.props.loadCollectionInfo()
  }

  render() {
    console.log(this.props)
    const {collection, painting} = this.props
    const webImage = this.props.painting.webImage
    
    return (
      <div>{!webImage && <p>loading painting</p>}
       {webImage && <div><img src={webImage.url} 
                              alt="more images" 
                              style={{maxWidth: 300, maxHeight: 300}}/>
            <h1>{painting.title} by {painting.principalMaker} </h1>
            <p>{painting.plaqueDescriptionDutch}</p>
            <Carousel images={collection} />
            </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  painting: state.painting,
  collection: state.collection
})

export default connect(mapStateToProps, { loadPaintingById, loadCollectionInfo })(Painting)
