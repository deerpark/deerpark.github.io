import Prismic from '@prismicio/client'
import { useState, useEffect, useCallback } from 'react'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Para, Empty } from '../../components/Shared/UI'
import Client from '../../lib/prismic'
import { parentVariants, slideInXDefaultVariants } from '../../config'

export default function Strength() {
  const [strengths, setStrength] = useState()
  const [loading, setLoading] = useState(true)
  const fetchData = useCallback(async () => {
    const response = await Client.query(Prismic.Predicates.at('document.type', 'strength'))
    if (response) {
      setStrength(response.results[0].data.body[0].items)
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
      <InView>
        {({ inView, ref }) => (
          <motion.ul ref={ref} initial='hidden' animate={inView ? 'visible' : 'hidden'} variants={parentVariants}>
            {strengths.length ? (
              strengths.map((strength, i) => (
                <motion.li key={strength.title} variants={slideInXDefaultVariants}>
                  <Para
                    odd={!!(i % 2)}
                    title={strength.title}
                    desc={strength.desc}
                    iconClassName={i % 2 ? `text-gray-500 dark:text-opacity-70 bg-white dark:bg-black` : ''}
                    icon={['fad', strength.icon]}
                    p={strength.p[0].text.split('\n')}
                    isLast={i === strengths.length - 1}
                  />
                </motion.li>
              ))
            ) : (
              <Empty className='py-20' msg='데이터가 없습니다.' spin icon={['fat', 'empty-set']} />
            )}
          </motion.ul>
        )}
      </InView>
    </>
  )
}
