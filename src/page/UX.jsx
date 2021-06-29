import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'
import Empty from '../components/Shared/UI/Empty'

export default function UX() {
  return (
    <div className='scroll-contents flex-grow flex-shrink overflow-x-hidden overflow-y-auto'>
      <Cover
        title='UX'
        subTitle='UX 컨텐츠'
        icon={<FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'head-side']} size='6x' />}
      />
      <div className='pb-40'>
        <Empty msg='업데이트 예정' icon={['fat', 'traffic-cone']} />
      </div>
    </div>
  )
}
