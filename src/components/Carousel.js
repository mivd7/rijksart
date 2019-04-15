import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadCollectionPaintings} from '../actions/collection'
import ArtGallery from './ArtGallery'

class Carousel extends Component {
  componentWillMount() {
    this.props.loadCollectionPaintings(this.props.match.params.id)
  }
  render() {
    console.log(this.props)
    const painting = this.props.painting
    return (
      <div>
        HERE BE PAINTING
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  painting: state.painting,
})

export default connect(mapStateToProps, { loadCollectionPaintings })(Carousel)