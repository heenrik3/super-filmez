import { Link } from 'react-router-dom'
import useTheme from '../../hooks/useTheme'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <Link to="/">
        <h1>Super Filmez</h1>
      </Link>
      <nav className="navbar">
        <button className="navbar__btn" onClick={toggleTheme}>
          <i className={`fa fa-${theme === 'light' ? 'moon' : 'sun'}`} />
        </button>

        <Link
          className="navbar__link"
          to="https://github.com/heenrik3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="navbar__btn">
            <i className="fa-brands fa-github" />
            /heenrik3
          </button>
        </Link>
      </nav>
    </header>
  )
}

export default Header
