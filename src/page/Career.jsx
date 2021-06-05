import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'

export default function Career() {
  return (
    <>
      <Cover
        title='경력'
        subTitle='경력 요약'
        icon={<FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'buildings']} size='6x' />}
      />
      <div className='min-h-screen' />
    </>
  )
}
