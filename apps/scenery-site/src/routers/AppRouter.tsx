import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'

import Dashboard from '../features/Dashboard/Dashboard'

export const history = createHistory()

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        {/* Public */}
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default AppRouter
