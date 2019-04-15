import React from 'react';
import {Link} from 'react-router-dom';

const Carousel = (props) => {
  console.log(props)
  return (<div>
    {!props.images && <div>starting carousel...</div>}
    {props.images && props.images.map(image =>
        <ul >
          <li key={image.id}>
            <Link to={`/gallery/${image.id}`} imageet={props.image} >
            <img src={image.webImage.url} alt="image" style={{width: "25%", height: "25%"}}/>
            <p>{image.title} door {image.principalOrFirstMaker}</p>
            </Link>
          </li>
        </ul>)}
  </div>)
}

export default Carousel