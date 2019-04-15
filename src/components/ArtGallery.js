import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadArt} from '../actions/art';
import Painting from './Painting'
import Collection from './Collection';

class ArtGallery extends Component {
  componentDidMount() {
    this.props.loadArt()
  }

  render() {
    console.log(this.props)

    if (!this.props) return (<div>this sucks</div>)
    const art = this.props.art
    return (
      <div>
        {!art && <p>HERE BE ART GALLERY</p>}
        <Painting />
        <h2>{art.title}</h2>
        <p>{art.plaqueDescriptionDutch}</p>
        <Collection/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  art: state.art,
})

export default connect(mapStateToProps, { loadArt })(ArtGallery)