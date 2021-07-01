import { HashRouter as Router } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from './Nav'
import Header from './Header'
import Main from './Main'
import Button from '../../components/Shared/UI/Button'
import { careerPopupVariants, fadeInVariants } from '../../config'
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
        {careerPopup && (
          <motion.div
            key='backdrop'
            initial='enter'
            exit='exit'
            animate={careerPopup ? 'visible' : 'enter'}
            variants={fadeInVariants}
            className='absolute inset-0 z-40 backdrop-filter backdrop-blur-sm bg-gray-500 dark:bg-black bg-opacity-50 dark:bg-opacity-50'
          />
        )}
        <motion.div
          key='careerPopup'
          className='absolute z-40 left-3.5 right-3.5 p-7 rounded-3xl shadow-xl bg-white dark:bg-gray-800'
          style={{ height: 400, bottom: -400 }}
          variants={careerPopupVariants}
          initial=''
          animate={careerPopup ? 'center' : 'enter'}
          exit='exit'
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}>
          <div className='flex-none flex justify-between'>
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
          <div className='py-5 flex flex-col items-stretch space-y-8 overflow-auto' style={{ height: 284 }}>
            {careerPopupContents.details
              .filter(d => d.key === careerPopupContents.id)
              .map((d, index) => (
                <div key={index.toString()} className='flex flex-col items-stretch space-y-2'>
                  {d?.title && <h3 className='text-lg font-bold'>{d?.title}</h3>}
                  <div className='opacity-75'>
                    {d?.subtitle && (
                      <div className='text-sm font-bold'>
                        <span className='inline-bock px-1 rounded bg-gray-600 text-white'>{d?.subtitle}</span>
                      </div>
                    )}
                    <div className='text-sm'>
                      {d.desc[0]?.text?.split('\n')?.length &&
                        d.desc[0].text.split('\n').map((p, i) => <div key={i.toString()}>{p}</div>)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </Router>
  )
}
