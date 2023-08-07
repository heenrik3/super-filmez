import { useEffect, useState } from 'react'
import Spinner from '../Spinner'

function MovieModal(props: any) {
  const { movieId } = props.data
  const [movie, setMovie] = useState()

  useEffect(() => {
    fetch('http://localhost:8000/movies/' + movieId)
      .then(async (response) => await response.json())
      .then(async (data) => {
        setTimeout(() => {
          setMovie(data.data)
          console.log(data)
        }, 2000)
      })
  }, [movieId])

  if (!movie)
    return (
      <div className="movies__modal" onClick={props.data.onCancel}>
        <div className="modal">
          <Spinner />
        </div>
      </div>
    )

  return (
    <div className="movies__modal" onClick={props.data.onCancel}>
      <div className="modal">
        <picture className="modal__picture">
          <div className="modal__header">
            <button className="modal__btn">
              <i className="fa-solid fa-angle-left" />
            </button>
          </div>
          <img className="modal__img" src={movie.img} />
        </picture>
      </div>
    </div>
  )
}

export default MovieModal
