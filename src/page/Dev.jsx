import { HashRouter as Router, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'
import List from '../components/Card/List'
import { dev } from '../config/contents'

const CardList = props => <List home='/dev' contents={dev} {...props} />

export default function Dev() {
  return (
    <div className='scroll-contents flex-grow flex-shrink pt-7 pb-20 overflow-x-hidden overflow-y-auto'>
      <Cover
        title='개발'
        subTitle='개발 포트폴리오'
        minHeight={false}
        icon={
          <FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'laptop-code']} size='6x' />
        }
      />
      <Router>
        <Route path={['/dev/:id', '/dev']} component={CardList} />
      </Router>
    </div>
  )
}
