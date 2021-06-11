import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Para } from '../../components/Shared/UI'
import { fadeInVariants, slideInXVariants, about, introduce } from '../../config'

export default function About() {
  return (
    <>
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            className='mb-7 bg-white dark:bg-black dark:bg-opacity-10 mx-7 py-5 pl-0 rounded-3xl'>
            <ul className='space-y-5'>
              {about.map((a, i) => (
                <li key={a.title}>
                  <Para
                    title={a.value}
                    desc={a.title}
                    icon={a.icon}
                    iconClassName='bg-opacity-100 mb-3 opacity-60 transform scale-75'
                    iconSize={a.iconSize}
                    compact
                    titleBorderBottom={i !== about.length - 1}
                    reverse
                    animate={false}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </InView>
      <div className='my-7 border-b border-gray-100 dark:border-opacity-5' />
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInXVariants}
            className='text-2xl pt-10 pb-20 text-center'>
            <h2 className='text-2xl text-gray-600 dark:text-gray-400'>
              <span className='font-title'>자기 소개서</span>
            </h2>
            <p className='text-xs text-gray-500'>김용만에 대하여..</p>
          </motion.div>
        )}
      </InView>
      {introduce.map((intro, i) => (
        <Para
          key={intro.title}
          title={intro.title}
          desc={intro.desc}
          icon={intro.icon}
          p={intro.p}
          odd={!!(i % 2)}
          iconClassName=''
          isLast={i === introduce.length - 1}
        />
      ))}
    </>
  )
}
