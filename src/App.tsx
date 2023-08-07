import useTheme from './hooks/useTheme'
import RoutesApp from './routes'
import './style/main.sass'

function App() {
  const { theme } = useTheme()

  return (
    <>
      <div className={`app ${theme}`}>
        <RoutesApp />
      </div>
    </>
  )
}

export default App
