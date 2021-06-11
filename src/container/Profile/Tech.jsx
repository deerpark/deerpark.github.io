import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Para } from '../../components/Shared/UI'
import { slideInXVariants, tech } from '../../config'
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

const { stack, tools } = tech
const icons = {
  javascript: <IconJS />,
  typescript: <IconWebpack />,
  nodejs: <IconNextJS />,
  react: <IconReact />,
  webpack: <IconTS />,
  babel: <IconNodeJS />,
  nextjs: <IconBabel />,
  mobx: <IconMobX />,
  graphql: <IconGraphQL />,
  github: <IconGitHub />,
  docker: <IconDocker />,
  sketch: <IconSketch />,
  figma: <IconFigma />,
}

export default function Tech() {
  return (
    <>
      {stack.map((s, i) => (
        <Para
          key={s.id}
          odd={!!(i % 2)}
          title={s.title}
          rating={s.rating}
          py='pt-5'
          svg={icons[s.id]}
          iconClassName={s.iconClassName}
          iconStyle={{ backgroundColor: s.iconBgColor }}
          p={s.p}
          isLast={i === stack.length - 1}
        />
      ))}
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
      {tools.map((t, i) => (
        <Para
          key={t.id}
          odd={!!(i % 2)}
          title={t.title}
          rating={t.rating}
          py='pt-5'
          svg={icons[t.id]}
          iconClassName={t.iconClassName}
          iconStyle={{ backgroundColor: t.iconBgColor }}
          p={t.p}
          isLast={i === tools.length - 1}
        />
      ))}
    </>
  )
}
