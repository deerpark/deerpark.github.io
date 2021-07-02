import { HashRouter as Router, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'
import List from '../components/Card/List'
import { design } from '../config/contents'

const CardList = props => <List home='/design' contents={design} {...props} />

export default function Design() {
  return (
    <div className='scroll-contents flex-grow flex-shrink pt-7 pb-20 overflow-x-hidden overflow-y-auto'>
      <Cover
        title='디자인'
        subTitle='디자인 컨텐츠'
        minHeight={false}
        icon={<FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'swatchbook']} size='6x' />}
      />
      <Router>
        <Route path={['/design/:id', '/design']} component={CardList} />
      </Router>
    </div>
  )
}
