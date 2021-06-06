import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'
import Empty from '../components/Shared/UI/Empty'

export default function Dev() {
  return (
    <>
      <Cover
        title='개발'
        subTitle='개발 컨텐츠'
        icon={
          <FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'laptop-code']} size='6x' />
        }
      />
      <div className='min-h-screen'>
        <Empty msg='업데이트 예정' icon={['fat', 'traffic-cone']} />
      </div>
    </>
  )
}
