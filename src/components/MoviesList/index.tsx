import MoviesListItem from '../MoviesListItem'
import useMovies from '../../hooks/useMovies'
import { useNavigate } from 'react-router-dom'

function MoviesList() {
  const { movies } = useMovies()

  const navigate = useNavigate()

  const handleGoToMoviePage = (id: string) => {
    navigate(`/${id}`)
  }
  return (
    <ul className="list">
      {movies.map((m: object, i: number) => (
        <MoviesListItem key={i} movie={m} handler={handleGoToMoviePage} />
      ))}
    </ul>
  )
}

export default MoviesList
