import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import useScrolled from '../../hooks/useScrolled'
import Profile from '../../page/Profile'
import Career from '../../page/Career'
import Strength from '../../page/Strength'
import Tech from '../../page/Tech'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Card from '../../components/Card/Card'

const App = () => {
  const [isScrolled, ref] = useScrolled()
  return (
    <Router>
      <div className='layout w-full h-full relative sm:p-7 sm:flex sm:justify-center sm:items-center'>
        <div className='fixed z-0 bg-white inset-0 bottom-1/2 xs:bg-transparent xs:static' />
        <Card className='card w-full h-full relative sm:min-w-sm sm:max-w-sm sm:max-h-md overflow-hidden' p='p-0'>
          <Header isScrolled={isScrolled} />
          <main className='main absolute z-10 inset-0 overflow-y-auto'>
            <div className='p-7 pt-24' ref={ref}>
              <Switch>
                <Route exact path='/'>
                  <>Welcome!</>
                </Route>
                <Route exact path='/profile'>
                  <Profile isScrolled={isScrolled} />
                </Route>
                <Route exact path='/career'>
                  <Career isScrolled={isScrolled} />
                </Route>
                <Route exact path='/strength'>
                  <Strength isScrolled={isScrolled} />
                </Route>
                <Route exact path='/tech'>
                  <Tech isScrolled={isScrolled} />
                </Route>
              </Switch>
            </div>
          </main>
          <Nav />
        </Card>
      </div>
    </Router>
  )
}

export default App
