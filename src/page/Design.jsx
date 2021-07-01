import { HashRouter as Router, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'
import List from '../components/Card/List'

const design = [
  {
    id: '/design/antman',
    category: '금융',
    title: '앤트맨',
    url: 'https://www.antman.kr',
    image: 'photo-1611974789855-9c2a0a7236a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHN0b2NrJTIwdHJhZGV8ZW58MHx8MHx8',
  },
  {
    id: '/design/yonn',
    category: '오픈소스',
    title: '포트폴리오',
    url: 'https://deerpark.github.io',
    image: 'photo-1458682625221-3a45f8a844c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRmb2xpb3xlbnwwfHwwfHw',
  },
]

const CardList = props => <List home='/design' contents={design} {...props} />

export default function Design() {
  return (
    <div className='scroll-contents flex-grow flex-shrink overflow-x-hidden overflow-y-auto'>
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
