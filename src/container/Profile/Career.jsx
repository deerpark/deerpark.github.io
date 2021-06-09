/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { InView } from 'react-intersection-observer'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../../components/Shared/UI/Card'
import { slideInXVariants, slideInXDelayedVariants, careers } from '../../config'
import { careerPopupState, careerPopupContentsState } from '../../states'

export default function Career() {
  const [, setCareerPopup] = useRecoilState(careerPopupState)
  const setCareerPopupContents = useSetRecoilState(careerPopupContentsState)
  return (
    <div className='min-h-screen pt-10'>
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInXVariants}
            className='profile-image flex justify-center items-center pt-10 pb-10'>
            <FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'user-clock']} size='6x' />
          </motion.div>
        )}
      </InView>
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInXDelayedVariants}
            className='text-2xl pb-20 text-center'>
            <h2 className='text-2xl text-gray-600 dark:text-gray-400'>
              <span className='font-title'>경력</span>
            </h2>
            <p className='text-xs text-gray-500'>경력 요약</p>
          </motion.div>
        )}
      </InView>
      <Card
        className='card relative z-0 mb-5 flex flex-col space-y-5 items-stretch gap-0'
        p='base:py-7'
        rounded='rounded-none'
        shadow='shadow-none'>
        <InView>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInXDelayedVariants}
              className='px-7'>
              <p className='text-2xs text-gray-500 pl-0.5'>2003 ~ 현재</p>
              <h2 className='text-lg text-gray-600 dark:text-gray-400'>
                <span className='font-title'>경력 요약</span>
              </h2>
            </motion.div>
          )}
        </InView>
        <ul className='flex flex-col items-stretch'>
          {careers.map((career, i) => (
            <InView key={career.company}>
              {({ inView, ref }) => (
                <motion.li
                  ref={ref}
                  initial='hidden'
                  animate={inView ? 'visible' : 'hidden'}
                  variants={slideInXDelayedVariants}>
                  <a
                    onClick={() => {
                      setCareerPopup(true)
                      setCareerPopupContents(oldState => ({
                        ...oldState,
                        company: career.company,
                      }))
                    }}
                    className={`career-button block transition-all transform ${
                      career.working
                        ? 'px-3.5 mx-3.5 bg-gray-100 dark:bg-gray-400 dark:bg-opacity-10 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-300 dark:hover:bg-opacity-10 mb-3.5 active:scale-95'
                        : 'px-7 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:bg-opacity-10'
                    }`}>
                    <div
                      className={`flex items-center py-3 space-x-5 relative transition-all transform ${
                        career.working ? '' : 'active:scale-95'
                      }`}>
                      <div
                        className='w-14 h-14 p-2 flex-none shadow-md flex justify-center items-center rounded-2xl overflow-hidden'
                        style={{ backgroundColor: career.color }}>
                        <img src={career.logo} alt='' />
                      </div>
                      <div className='flex-grow flex justify-between'>
                        <div className='flex-grow flex flex-col items-stretch'>
                          <h3 className='text-md text-gray-600 dark:text-gray-400 leading-snug'>{career.company}</h3>
                          <p className='text-xs text-gray-500'>{career.position}</p>
                        </div>
                        <div
                          className={`w-14 flex-none flex ${
                            career.working
                              ? 'flex-col justify-center items-center space-y-0.5'
                              : 'justify-end items-center'
                          }`}>
                          <b
                            className={`w-full flex justify-center items-center px-1 py-1 text-sm rounded-lg ${
                              career.working ? 'bg-gray-200' : 'bg-gray-100'
                            } dark:bg-gray-300 dark:bg-opacity-10 font-bold text-gray-600 dark:text-gray-400 leading-none`}>
                            {career.start}
                          </b>
                        </div>
                      </div>
                      {!career.working && careers.length - 1 !== i && (
                        <div
                          className='career-divider absolute bottom-0 -right-5 border-b border-gray-100 dark:border-opacity-10'
                          style={{ left: 80 }}
                        />
                      )}
                    </div>
                  </a>
                </motion.li>
              )}
            </InView>
          ))}
        </ul>
      </Card>
    </div>
  )
}
