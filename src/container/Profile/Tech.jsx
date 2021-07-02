import Prismic from '@prismicio/client'
import { useState, useEffect, useCallback } from 'react'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Para, Empty } from '../../components/Shared/UI'
import { parentVariants, slideInXDefaultVariants, slideInXVariants /* , tech */ } from '../../config'
import Client from '../../lib/prismic'
import { ReactComponent as IconJS } from '../../assets/icons/icon-js.svg'
import { ReactComponent as IconWebpack } from '../../assets/icons/icon-webpack.svg'
import { ReactComponent as IconNextJS } from '../../assets/icons/icon-nextjs.svg'
import { ReactComponent as IconReact } from '../../assets/icons/icon-react.svg'
import { ReactComponent as IconTS } from '../../assets/icons/icon-typescript.svg'
import { ReactComponent as IconNodeJS } from '../../assets/icons/icon-nodejs.svg'
import { ReactComponent as IconBabel } from '../../assets/icons/icon-babel.svg'
import { ReactComponent as IconMobX } from '../../assets/icons/icon-mobx.svg'
import { ReactComponent as IconGraphQL } from '../../assets/icons/icon-graphql.svg'
import { ReactComponent as IconGitHub } from '../../assets/icons/icon-github.svg'
import { ReactComponent as IconDocker } from '../../assets/icons/icon-docker.svg'
import { ReactComponent as IconSketch } from '../../assets/icons/icon-sketch.svg'
import { ReactComponent as IconFigma } from '../../assets/icons/icon-figma.svg'

/* const { stack, tools } = tech */

const icons = {
  javascript: <IconJS />,
  typescript: <IconTS />,
  nodejs: <IconNodeJS />,
  react: <IconReact />,
  webpack: <IconWebpack />,
  babel: <IconBabel />,
  nextjs: <IconNextJS />,
  mobx: <IconMobX />,
  graphql: <IconGraphQL />,
  github: <IconGitHub />,
  docker: <IconDocker />,
  sketch: <IconSketch />,
  figma: <IconFigma />,
}

export default function Tech() {
  const [stack, setStack] = useState([])
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = useCallback(async () => {
    const response = await Client.query(Prismic.Predicates.at('document.type', 'tech'))
    if (response) {
      setStack(response.results[0].data.body[0].items)
      setTools(response.results[0].data.body[1].items)
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
    <Empty className='py-20' msg='로딩 중입니다.' spin icon={['fat', 'spinner-third']} iconSize='2x' />
  ) : (
    <>
      <InView>
        {({ inView, ref }) => (
          <motion.ul ref={ref} initial='hidden' animate={inView ? 'visible' : 'hidden'} variants={parentVariants}>
            {stack.length ? (
              stack.map((s, i) => (
                <motion.li key={s.id} variants={slideInXDefaultVariants}>
                  <Para
                    odd={!!(i % 2)}
                    title={s.title}
                    rating={s.rating}
                    py='pt-5'
                    svg={icons[s.id]}
                    iconClassName={s.iconclassname}
                    iconStyle={{ backgroundColor: s.iconbgcolor }}
                    p={s.p[0].text.split('\n')}
                    isLast={i === stack.length - 1}
                  />
                </motion.li>
              ))
            ) : (
              <Empty className='py-20' msg='데이터가 없습니다.' spin icon={['fat', 'empty-set']} />
            )}
          </motion.ul>
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
              <span className='font-title'>개발 도구</span>
            </h2>
            <p className='text-xs text-gray-500'>별점은 숙련도를 의미합니다.</p>
          </motion.div>
        )}
      </InView>
      <InView>
        {({ inView, ref }) => (
          <motion.ul ref={ref} initial='hidden' animate={inView ? 'visible' : 'hidden'} variants={parentVariants}>
            {tools.length ? (
              tools.map((t, i) => (
                <motion.li key={t.id} variants={slideInXDefaultVariants}>
                  <Para
                    odd={!!(i % 2)}
                    title={t.title}
                    rating={t.rating}
                    py='pt-5'
                    svg={icons[t.id]}
                    iconClassName={t.iconclassname}
                    iconStyle={{ backgroundColor: t.iconbgcolor }}
                    p={t.p[0].text.split('\n')}
                    isLast={i === tools.length - 1}
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
