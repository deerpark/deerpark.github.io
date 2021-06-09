import { HashRouter as Router } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from './Nav'
import Header from './Header'
import Main from './Main'
import Button from '../../components/Shared/UI/Button'
import Empty from '../../components/Shared/UI/Empty'
import { careerPopupVariants } from '../../config'
import { careerPopupState, careerPopupContentsState } from '../../states'

export default function Contents() {
  const [careerPopup, setCareerPopup] = useRecoilState(careerPopupState)
  const careerPopupContents = useRecoilValue(careerPopupContentsState)
  return (
    <Router>
      <Header />
      <Main />
      <Nav />
      <AnimatePresence>
        <motion.div
          className='absolute z-40 left-3.5 right-3.5 p-7 rounded-3xl shadow-xl bg-white dark:bg-gray-800'
          style={{ height: 500, bottom: -500 }}
          variants={careerPopupVariants}
          initial='enter'
          animate={careerPopup ? 'center' : 'enter'}
          exit='exit'
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}>
          <div className='flex justify-between'>
            <div>
              <h2 className='text-2xl text-gray-600 dark:text-gray-400'>
                <span className='font-title'>{careerPopupContents.company}</span>
              </h2>
              <p className='text-sm text-gray-500 opacity-50'>상세 경력</p>
            </div>
            <div>
              <Button
                as='button'
                type='button'
                width='w-8'
                onClick={() => {
                  setCareerPopup(false)
                }}>
                <FontAwesomeIcon icon={['fas', 'xmark']} />
              </Button>
            </div>
          </div>
          <div className='py-28 flex justify-center items-center'>
            <Empty msg='업데이트 예정' icon={['fat', 'traffic-cone']} />
          </div>
        </motion.div>
      </AnimatePresence>
    </Router>
  )
}
