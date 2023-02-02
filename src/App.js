import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Login} />
          <Route path={'/home'}>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App
