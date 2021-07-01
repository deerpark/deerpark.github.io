import { HashRouter as Router, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'
import List from '../components/Card/List'

const ux = [
  {
    id: '/ux/micro-interaction',
    category: '인터렉션',
    title: '마이크로 인터렉션',
    url: '#',
    image: 'photo-1598121210875-08d6cf351459?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJhY3Rpb258ZW58MHx8MHx8',
  },
  {
    id: '/ux/motion',
    category: '인터렉션',
    title: '모션 인터렉션',
    url: '#',
    image: 'photo-1533136036465-1861830963f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vdGlvbnxlbnwwfHwwfHw',
  },
]

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
