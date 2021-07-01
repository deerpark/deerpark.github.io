import { HashRouter as Router, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'
import List from '../components/Card/List'

const dev = [
  {
    id: '/dev/antman',
    category: '금융',
    title: '앤트맨',
    url: 'https://www.antman.kr',
    image: 'photo-1518186285589-2f7649de83e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
  },
  {
    id: '/dev/livecommerce',
    category: '커머스',
    title: '라방 편성표',
    url: 'https://dev.datadive.ai/live',
    image: 'photo-1605896405055-0ea7c6dd0d7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
  },
  {
    id: '/dev/datadive',
    category: '데이터 분석',
    title: '데이터다이브',
    url: 'https://www.datadive.ai/',
    image: 'photo-1584291527935-456e8e2dd734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRhdGF8ZW58MHx8MHx8',
  },
  {
    id: '/dev/lezhin-rank',
    category: '엔터테인먼트',
    title: '레진 랭킹',
    url: 'https://lezhin-rank.vercel.app/',
    image: 'photo-1620336655055-088d06e36bf0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29taWN8ZW58MHx8MHx8',
  },
  {
    id: '/dev/lezhin',
    category: '엔터테인먼트',
    title: '레진 코믹스',
    url: 'https://www.lezhin.com/',
    image: 'photo-1581515290072-58a77ef204ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGNvbWljfGVufDB8fDB8fA',
  },
  {
    id: '/dev/tapsonic',
    category: '게임',
    title: '탭소닉 HTML5',
    url: 'https://muca.world/TAPSONIC',
    image: 'photo-1598518142101-11ab82b871a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmh5dGhtJTIwZ2FtZXxlbnwwfHwwfHw',
  },
  {
    id: '/dev/pmang',
    category: '게임',
    title: '네오위즈 피망',
    url: 'http://www.pmang.com/',
    image: 'photo-1511512578047-dfb367046420?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWV8ZW58MHx8MHx8',
  },
]

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
