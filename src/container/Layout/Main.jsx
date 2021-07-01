import { Switch, Route } from 'react-router-dom'
import Profile from '../../page/Profile'
import UX from '../../page/UX'
import Dev from '../../page/Dev'
import Design from '../../page/Design'
import Welcome from '../../page/Welcome'

const Main = () => (
  <Switch>
    <Route exact path='/'>
      <Welcome />
    </Route>
    <Route path='/profile'>
      <Profile />
    </Route>
    <Route path='/ux'>
      <UX />
    </Route>
    <Route path='/dev'>
      <Dev />
    </Route>
    <Route path='/design'>
      <Design />
    </Route>
  </Switch>
)

export default Main
