import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadCollection} from '../actions/collection';

class Carousel extends Component {
  componentDidMount() {
    this.props.loadCollection()
  }

  render() {
    console.log(this.props)

    if (!this.props) return (<div>starting the carousel...</div>)
    const collection = this.props.collection
    const loadImageSet = (images) => {
      images.map(image => image.url)
    }
    return (
      <div>
        {!collection && <p>fasten seat belts</p>}
        <h2>More Paintings from this collection</h2>
        {collection.map(collection =>  <img src={collection.url} 
                                            alt="more images" 
                                            style={{maxWidth: 300, maxHeight: 300}}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  collection: state.collection,
})

export default connect(mapStateToProps, { loadCollection })(Carousel)