import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadCollectionPaintings} from '../actions/collection'

const removeCulturePrefix = (id) => {
  var arr = Array.from(id)
  return id.slice(3, arr.length)
}


class Carousel extends Component {
  componentWillMount() {
    this.props.loadCollectionPaintings(removeCulturePrefix(this.props.match.params.id))
  }
  render() {
    console.log(this.props.painting)
    return (
      <div>
      
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  painting: state.painting,
})

export default connect(mapStateToProps, { loadCollectionPaintings })(Carousel)