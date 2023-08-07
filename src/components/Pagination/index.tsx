import useMovies from '../../hooks/useMovies'
import usePagination from '../../hooks/usePagination'

function Pagination() {
  const { totalMovies } = useMovies()

  const {
    page,
    resultsPerPage,
    postsPerPage,
    handlePageChanges,
    handlePostsPerPageChanges,
  } = usePagination()

  const numPages = Math.ceil(totalMovies / resultsPerPage)

  let backDisabled = true
  let nextDisabled = true

  // Primeira página, há outras
  if (page === 1 && numPages > 1) {
    backDisabled = true
    nextDisabled = false
  }
  // Ultima página
  else if (page === numPages && numPages > 1) {
    backDisabled = false
    nextDisabled = true
  }
  // Página qualquer entre outras páginas
  else if (page < numPages) {
    backDisabled = false
    nextDisabled = false
  }
  // Não há páginas
  else {
    backDisabled = true
    nextDisabled = true
  }

  return (
    <div className="pagination">
      <div className="pagination__posts">
        <label htmlFor="posts">Filmes por página</label>
        <select
          name="posts"
          onChange={(e) => handlePostsPerPageChanges(+e.target.value)}
        >
          {postsPerPage.map((post, i) => (
            <option value={post} key={i}>
              {post}
            </option>
          ))}
        </select>
      </div>
      <div className="pagination__pages">
        <button
          className="pagination__btn"
          disabled={backDisabled}
          onClick={() => handlePageChanges('back')}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        {page}
        <button
          className="pagination__btn"
          disabled={nextDisabled}
          onClick={() => handlePageChanges('next')}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Pagination
