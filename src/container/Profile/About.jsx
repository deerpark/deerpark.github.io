import Prismic from '@prismicio/client'
import { useState, useEffect, useCallback } from 'react'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Client from '../../lib/prismic'
import { Para, Empty } from '../../components/Shared/UI'
import { parentVariants, slideInXDefaultVariants, slideInXDelayedVariants } from '../../config'

export default function About() {
  const [name, setName] = useState()
  const [about, setAbout] = useState()
  const [introduce, setIntroduce] = useState()
  const [loading, setLoading] = useState(true)
  const fetchData = useCallback(async () => {
    const response = await Client.query(Prismic.Predicates.at('document.type', 'introduce'))
    if (response) {
      setName(response.results[0].data.name)
      setAbout(response.results[0].data.body[0].items)
      setIntroduce(response.results[0].data.body[1].items)
    }
  }, [])
  useEffect(async () => {
    setLoading(true)
    try {
      await fetchData()
    } catch (err) {
      throw new Error(`${err}`)
    } finally {
      setLoading(false)
    }
  }, [])
  return loading ? (
    <Empty className='py-40' msg='로딩 중입니다.' spin icon={['fat', 'spinner-third']} iconSize='2x' />
  ) : (
    <>
      <div className='mb-7 bg-white dark:bg-black dark:bg-opacity-10 mx-7 py-5 pl-0 rounded-3xl'>
        <InView>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInXDefaultVariants}
              className='pb-10 pl-16 ml-1'>
              <h2 className='text-xl text-gray-600 dark:text-gray-400'>
                <span className='font-title'>기본 정보</span>
              </h2>
            </motion.div>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <motion.ul
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={parentVariants}
              className='space-y-5'>
              {about.length ? (
                about.map((a, i) => (
                  <motion.li key={a.title} variants={slideInXDefaultVariants}>
                    <Para
                      title={a.value}
                      desc={a.title}
                      icon={['fad', a.icon]}
                      iconClassName='bg-opacity-100 mb-3 opacity-60 transform'
                      iconSize={a.iconSize}
                      compact
                      titleBorderBottom={i !== about.length - 1}
                      reverse
                      animate={false}
                    />
                  </motion.li>
                ))
              ) : (
                <Empty className='py-20' msg='데이터가 없습니다.' spin icon={['fat', 'empty-set']} />
              )}
            </motion.ul>
          )}
        </InView>
      </div>
      <div className='my-7 border-b border-gray-100 dark:border-opacity-5' />
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInXDelayedVariants}
            className='pt-10 pl-24'>
            <h2 className='text-xl text-gray-600 dark:text-gray-400'>
              <span className='font-title'>자기 소개서</span>
            </h2>
            <p className='text-xs text-gray-500'>{name}에 대하여..</p>
          </motion.div>
        )}
      </InView>
      {introduce.length ? (
        introduce.map((intro, i) => (
          <Para
            key={intro.title}
            title={intro.title}
            desc={intro.desc}
            icon={['fad', intro.icon]}
            p={intro.p[0].text.split('\n')}
            odd={!!(i % 2)}
            iconClassName=''
            isLast={i === introduce.length - 1}
          />
        ))
      ) : (
        <Empty className='py-20' msg='데이터가 없습니다.' spin icon={['fat', 'empty-set']} />
      )}
    </>
  )
}
