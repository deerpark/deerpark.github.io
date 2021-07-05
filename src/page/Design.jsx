import { HashRouter as Router, Route } from 'react-router-dom'
import Cover from '../components/Shared/Cover'
import List from '../components/Card/List'
import { design } from '../config/contents'

const CardList = props => <List home='/design' contents={design} {...props} />

export default function Design() {
  return (
    <div className='scroll-contents flex-grow flex-shrink pt-7 pb-20 overflow-x-hidden overflow-y-auto'>
      <Cover mb='mb-16' title='디자인' subTitle='디자인 컨텐츠' minHeight={false} />
      <Router>
        <Route path={['/design/:id', '/design']} component={CardList} />
      </Router>
    </div>
  )
}
