/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { InView } from 'react-intersection-observer'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import Card from '../../components/Shared/UI/Card'
import { slideInXDelayedVariants, careers } from '../../config'
import { careerPopupState, careerPopupContentsState } from '../../states'

export default function Career() {
  const [, setCareerPopup] = useRecoilState(careerPopupState)
  const setCareerPopupContents = useSetRecoilState(careerPopupContentsState)
  return (
    <>
      <Card
        className='card relative z-0 mb-5 flex flex-col space-y-5 items-stretch gap-0'
        p='py-0'
        rounded='rounded-none'
        shadow='shadow-none'>
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
                        ? '-mt-3.5 px-3.5 mx-3.5 bg-blue-600 rounded-2xl hover:bg-blue-500 mb-3.5 active:scale-95'
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
                          <h3
                            className={`text-md ${
                              career.working ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                            } leading-snug`}>
                            {career.company}
                          </h3>
                          <p
                            className={`text-xs ${
                              career.working ? 'text-white dark:text-opacity-75' : 'text-gray-500'
                            }`}>
                            {career.position}
                          </p>
                        </div>
                        <div
                          className={`w-14 flex-none flex ${
                            career.working
                              ? 'flex-col justify-center items-center space-y-0.5'
                              : 'justify-end items-center'
                          }`}>
                          <b
                            className={`w-full flex justify-center items-center px-1 py-1 text-sm rounded-lg ${
                              career.working
                                ? 'bg-white text-blue-700 bg-opacity-50'
                                : 'bg-gray-200 dark:bg-gray-300 dark:bg-opacity-10 text-gray-600 dark:text-gray-400'
                            }  font-bold leading-none`}>
                            {career.start}
                          </b>
                        </div>
                      </div>
                      {!career.working && careers.length - 1 !== i && (
                        <div
                          className='career-divider absolute bottom-0 -right-5 border-b border-gray-100 dark:border-opacity-10'
                          style={{ left: 58 }}
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
    </>
  )
}
