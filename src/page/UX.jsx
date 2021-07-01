import { HashRouter as Router, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'
import List from '../components/Card/List'
import { ux } from '../config/contents'

const CardList = props => <List home='/ux' contents={ux} {...props} />

export default function UX() {
  return (
    <div className='scroll-contents flex-grow flex-shrink pt-7 pb-20 overflow-x-hidden overflow-y-auto'>
      <Cover
        title='UX'
        subTitle='UX 컨텐츠'
        minHeight={false}
        icon={<FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'head-side']} size='6x' />}
      />
      <Router>
        <Route path={['/ux/:id', '/ux']} component={CardList} />
      </Router>
    </div>
  )
}
