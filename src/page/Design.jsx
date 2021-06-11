/* import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cover from '../components/Shared/Cover'
import Empty from '../components/Shared/UI/Empty'
/* import { fadeInVariants } from '../config' */

export default function Design() {
  return (
    <>
      <Cover
        title='디자인'
        subTitle='디자인 컨텐츠'
        icon={<FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'swatchbook']} size='6x' />}
      />
      {/* <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            className='flex items-center mb-10 h-40 bg-gray-400 text-gray-400 mx-7 rounded-3xl'>
            ^^
          </motion.div>
        )}
      </InView> */}
      <div className='min-h-screen'>
        <Empty msg='업데이트 예정' icon={['fat', 'traffic-cone']} />
      </div>
    </>
  )
}
