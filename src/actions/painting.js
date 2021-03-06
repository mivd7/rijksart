import * as request from 'superagent'

export const SET_PAINTING = 'SET_PAINTING'

export function setPainting(painting) {
  return {
    type: SET_PAINTING,
    payload: painting
  }
}

//hard-coded starting action
export const loadPainting = () => 
function (dispatch) {
  request(`https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=${process.env.REACT_APP_API_KEY}&format=json`)
    .then(response => {
      dispatch(setPainting(response.body))
    })
    .catch(err => console.log(err))
}

export const loadPaintingById = (id) => (dispatch) => {

  request(`https://www.rijksmuseum.nl/api/nl/collection/${id}?key=${process.env.REACT_APP_API_KEY}&format=json`)
  .then(response => {
      dispatch(setPainting(response.body))
    })
    .catch(console.error)
}
