import * as request from 'superagent'

export const SET_ART = 'SET_ART'

export function setArt(art) {
  return {
    type: SET_ART,
    payload: art
  }
}

export const loadArt = () => 
  function (dispatch) {
    request(`https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=${process.env.REACT_APP_API_KEY}&format=json`)
      .then(response => {
        dispatch(setArt(response.body))
      })
      .catch(err => console.log(err))
}

// export const loadArtByID = () => 
//   function (dispatch) {
//     request(`https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=${process.env.REACT_APP_API_KEY}&format=json`)
//       .then(response => {
//         dispatch(setArt(response.body))
//       })
//       .catch(err => console.log(err))
// }