import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Para } from '../../components/Shared/UI'
import { slideInXVariants, slideInXDelayedVariants } from '../../config'
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

export default function Tech() {
  return (
    <>
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInXVariants}
            className='profile-image flex justify-center items-center pt-10 pb-10'>
            <FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'laptop-code']} size='6x' />
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
              <span className='font-title'>기술 스택</span>
            </h2>
            <p className='text-xs text-gray-500'>별점은 숙련도를 의미합니다.</p>
          </motion.div>
        )}
      </InView>
      <Para
        title='JavaScript'
        rating={4}
        py='pt-5'
        svg={<IconJS />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#F7DF1E' }}
        p={['DOM, REST API, 비동기 처리에 대한 이해']}
      />
      <Para
        odd
        title='TypScript'
        rating={2}
        py='pt-5'
        svg={<IconTS />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#007ACC' }}
        p={['정적 타입 레퍼런스에 대한 이해, 사이드 프로젝트에서 실험적으로 도입 중']}
      />
      <Para
        title='NodeJS'
        rating={3}
        py='pt-5'
        svg={<IconNodeJS />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#F1F5F9' }}
        p={['NPM으로 패키지 배포 가능, Express 기반 서버 구성에 대한 약한 이해']}
      />
      <Para
        odd
        title='React'
        rating={5}
        py='pt-5'
        svg={<IconReact />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#000000' }}
        p={[
          'Virtual DOM, JSX, props, state, LifeCycle, React Hooks에 대한 이해',
          '사이드 프로젝트에 Recoil, React Concurrent모드 실험적 도입 중',
        ]}
      />
      <Para
        title='Webpack'
        rating={3}
        py='pt-5'
        svg={<IconWebpack />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#8ED6FB' }}
        p={['Bundle과 Chunk 및 webpack.config 커스텀에 대한 이해,']}
      />
      <Para
        odd
        title='Babel'
        rating={4}
        py='pt-5'
        svg={<IconBabel />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#F1F5F9' }}
        p={['플러그인, 프리셋, env 프리셋, 폴리필에 대한 이해']}
      />
      <Para
        title='NextJS'
        rating={5}
        py='pt-5'
        svg={<IconNextJS />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#000000' }}
        p={['스캐폴딩, next.config.js 설정 커스텀, 라우팅, API 라우팅, 배포']}
      />
      <Para
        odd
        title='MobX'
        rating={4}
        py='pt-5'
        svg={<IconMobX />}
        iconClassName='p-0'
        iconStyle={{ backgroundColor: '#EA6618' }}
        p={[
          'Store 설계, observable, action, computed 핵심 기능에 대한 이해 및 비동기 처리 구성',
          'Flux 패턴, Domain Store, Domain Object, Model State에 대한 이해',
        ]}
      />
      <Para
        title='GraphQL'
        rating={2}
        py='pt-5'
        svg={<IconGraphQL />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#E535AB' }}
        p={['스키마(schema) 및 리졸버(resolver) 개념에 대한 이해, 프론트엔드, 백엔드 구성에 대한 이해']}
      />
      <div className='my-20 border-b border-gray-100 dark:border-opacity-5' />
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInXVariants}
            className='profile-image flex justify-center items-center pt-10 pb-16'>
            <FontAwesomeIcon className='text-blue-600 dark:text-opacity-70' icon={['fat', 'gavel']} size='6x' />
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
              <span className='font-title'>개발 도구</span>
            </h2>
            <p className='text-xs text-gray-500'>별점은 숙련도를 의미합니다.</p>
          </motion.div>
        )}
      </InView>
      <Para
        title='GitHub'
        rating={5}
        py='pt-5'
        svg={<IconGitHub />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#F1F5F9' }}
        p={['Git-flow 전략에 대한 이해']}
      />
      <Para
        odd
        title='Docker'
        rating={3}
        py='pt-5'
        svg={<IconDocker />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#E2E8F0' }}
        p={['컨테이너, 이미지에 대한 이해, Dockerfile 구성, Docker Compose에 대한 이해']}
      />
      <Para
        title='Sketch'
        rating={5}
        py='pt-5'
        svg={<IconSketch />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#F1F5F9' }}
        p={['Sketch 프로토타입 커뮤니케이션에 대한 이해']}
      />
      <Para
        odd
        title='Figma'
        rating={4}
        py='pt-5'
        svg={<IconFigma />}
        iconClassName='p-2'
        iconStyle={{ backgroundColor: '#1E293B' }}
        p={['Figma 프로토타입 커뮤니케이션에 대한 이해']}
        isLast
      />
    </>
  )
}
