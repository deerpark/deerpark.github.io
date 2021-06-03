import { HashRouter as Router } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import Main from './Main'

export default function Contents() {
  return (
    <Router>
      <Header />
      <Main />
      <Nav />
    </Router>
  )
}
