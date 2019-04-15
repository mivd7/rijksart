import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loadCollectionInfo} from '../actions/collection';

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
        {this.props.collection && collection.map(collection =>
        <ul >
          <li key={collection.id}>
            <Link to={`/gallery/${collection.id}`}  >
            <img src={collection.webImage.url} alt="painting" style={{width: "25%", height: "25%"}}/>
            <p>{collection.title} door {collection.principalOrFirstMaker}</p>
            </Link>
          </li>
        </ul>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  collection: state.collection,
})

export default connect(mapStateToProps, { loadCollectionInfo })(Collection)