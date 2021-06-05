import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'

export default function Tech() {
  return (
    <>
      <Cover
        title='기술'
        subTitle='기술 스택'
        icon={
          <FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'laptop-code']} size='6x' />
        }
      />
      <div className='min-h-screen' />
    </>
  )
}
