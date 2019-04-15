import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadPainting} from '../actions/painting';

class ArtGallery extends Component {
  componentDidMount() {
    this.props.loadPainting()
  }

  render() {
    console.log(this.props)

    if (!this.props) return (<div>this sucks</div>)
    const painting = this.props.painting
    return (
      
      <div>
        {!painting && <div>painting not available</div>}
        <img src={painting.url} alt="rembrandt" style={{width: '50%', height: '50%'}}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  painting: state.painting,
})

export default connect(mapStateToProps, { loadPainting })(ArtGallery)