import { Fragment, useEffect } from 'react'
import MoviesList from '../MoviesList'
import Pagination from '../Pagination'
import Spinner from '../Spinner'

import useMovies from '../../hooks/useMovies'

function MoviesLayout() {
  const { movies, getMovies } = useMovies()

  useEffect(() => {
    getMovies()
  }, [])

  if (!movies.length) return <Spinner />

  return (
    <Fragment>
      <Pagination />
      <MoviesList />
    </Fragment>
  )
}

export default MoviesLayout
