import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import Layout from '../../components/Layout'
import useMovies from '../../hooks/useMovies'

function Movie() {
  const { id } = useParams()
  const { movie, getMovie } = useMovies()

  useEffect(() => {
    getMovie(id ? id : '')
  }, [id])

  if (!movie)
    return (
      <Layout>
        <Spinner />
      </Layout>
    )

  return (
    <Layout>
      <>
        <picture className="movie__picture">
          <Link to="/" className="movie__back">
            <i className="fa-solid fa-angle-left" />
            <span>Voltar</span>
          </Link>
          <img className="movie__img" src={movie.img} />
        </picture>

        <div className="movie__info">
          <div className="movie__name">
            <h1>{movie.name}</h1>
          </div>

          <div className="movie__extras">
            <div className="movie__rating">
              <i className="fa-solid fa-star" />
              <span>
                {movie.rating}|<span>10</span>
              </span>
            </div>
            <ul className="movie__tags">
              {movie.genre.map((genre: string, i: number) => (
                <span className="movie__tag" key={i}>
                  {genre}
                </span>
              ))}
            </ul>
          </div>

          <div className="movie__director">
            <span>
              <b>Diretor:</b> {movie.director} - {movie.year}
            </span>
          </div>

          <div className="movie__cast">
            <h3>Elenco</h3>

            <div className="cast">
              {Array(4)
                .fill(1)
                .map((item, i) => (
                  <picture className="cast__picture" key={i}>
                    <img className="cast__img" src={movie.img} />
                  </picture>
                ))}
            </div>
          </div>

          <div className="movie__description">
            <h3>Sinopse</h3>
            <span>{movie.description}</span>
          </div>

          <div className="movie__posters">
            <h3>Posters</h3>

            <div className="posters">
              {Array(4)
                .fill(1)
                .map((item, i) => (
                  <picture className="posters__picture" key={i}>
                    <img className="posters__img" src={movie.img} />
                  </picture>
                ))}
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default Movie
