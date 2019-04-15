import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadArt} from '../actions/art';
import {startingSource, defaultStyle} from '../constants'
import Collection from './Collection';

class Start extends Component {
  componentDidMount() {
    this.props.loadArt()
  }

  render() {
    console.log(this.props)
    const art = this.props.art
    return (
      <div>
        {!art && <p>HERE BE ART GALLERY</p>}
        <img src={startingSource} alt={art.title} style={defaultStyle}/>
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

export default connect(mapStateToProps, { loadArt })(Start)