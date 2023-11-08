// before running this app, server should run first!
// type this command on terminal 'npx json-server -p 3500 -w data/db.json' to run the server...
import AppRoutes from './components/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
