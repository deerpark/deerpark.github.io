import { HashRouter as Router, Route } from 'react-router-dom'
import Cover from '../components/Shared/Cover'
import List from '../components/Card/List'
import { ux } from '../config/contents'

const CardList = props => <List home='/ux' contents={ux} {...props} />

export default function UX() {
  return (
    <div className='scroll-contents flex-grow flex-shrink pt-7 pb-20 overflow-x-hidden overflow-y-auto'>
      <Cover mb='mb-16' title='UX' subTitle='UX 컨텐츠' minHeight={false} />
      <Router>
        <Route path={['/ux/:id', '/ux']} component={CardList} />
      </Router>
    </div>
  )
}
