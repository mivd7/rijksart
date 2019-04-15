import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadCollectionPaintings} from '../actions/collection'

const removeCulturePrefix = (id) => {
  var arr = Array.from(id)
  return id.slice(3, arr.length)
}

class Painting extends Component {
  componentDidMount() {
    //hard-coded for now; later: this.props.match.params.id
    this.props.loadCollectionPaintings(removeCulturePrefix(this.props.match.params.id))
  }
  render() {
    console.log(this.props)
    const painting = this.props.painting.webImage
    return (
      <div>{!painting && <p>loading painting</p>}
       {painting && <div key={painting.guid}><img src={painting.url} 
                                            alt="more images" 
                                            style={{maxWidth: 300, maxHeight: 300}}/>
            <h1>{this.props.painting.title} by {this.props.painting.principalMaker} </h1>
            <p>{this.props.painting.description}</p>
            </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  painting: state.collection,
})

export default connect(mapStateToProps, { loadCollectionPaintings })(Painting)