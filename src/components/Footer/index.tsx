import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <span>© Direito autoral por&nbsp;</span>
      <Link to={'https://github.com/heenrik3'}>
        <b>Henrique</b>
      </Link>
      <p>{new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
