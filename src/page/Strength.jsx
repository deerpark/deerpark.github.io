import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'

export default function Strength() {
  return (
    <>
      <Cover
        title='강점'
        subTitle='업무적 강점'
        icon={
          <FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'battery-bolt']} size='6x' />
        }
      />
      <div className='min-h-screen' />
    </>
  )
}
