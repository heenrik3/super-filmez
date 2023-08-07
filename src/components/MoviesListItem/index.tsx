function MoviesListItem(props: any) {
  const { movie } = props

  const handleClick = () => {
    props.handler(movie.name)
  }

  const stars = Array(Math.round(movie.rating / 2))
    .fill(0)
    .map((_, i) => <i className="fa-solid fa-star" key={i} />)

  return (
    <div className="list-item" onClick={handleClick}>
      <picture className="list-item__picture">
        <img className="list-item__img" src={movie.img} />
      </picture>

      <div className="list-item__info">
        <span className="list-item__title">{movie.name}</span>
        <div className="list-item__rating">{stars}</div>
      </div>
    </div>
  )
}

export default MoviesListItem
