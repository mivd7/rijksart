import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadCollectionPaintings} from '../actions/collection'

class Painting extends Component {
  componentDidMount() {
    if (!this.props) return;
    //hard-coded for now; later: this.props.match.params.id
    this.props.loadCollectionPaintings(this.props.match.params.id)
  }
  render() {
    console.log(this.props)
    const painting = this.props.painting
    return (
      <div>
         {painting &&  <div key={painting.guid}><img src={painting.url} 
                                            alt="more images" 
                                            style={{maxWidth: 300, maxHeight: 300}}/></div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  painting: state.painting,
})

export default connect(mapStateToProps, { loadCollectionPaintings })(Painting)