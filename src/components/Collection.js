import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadCollectionInfo} from '../actions/collection';
import Carousel from './Carousel'

class Collection extends Component {
  componentDidMount() {
    this.props.loadCollectionInfo()
  }

  render() {
    console.log(this.props)

    if (!this.props) return (<div>fetching collection...</div>)
    const collection = this.props.collection

    return (
      <div>
        {!this.props.collection && <p>fasten seat belts</p>}
        {this.props.collection && 
        <Carousel paintingIds={collection.id} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  collection: state.collection,
})

export default connect(mapStateToProps, { loadCollectionInfo })(Collection)