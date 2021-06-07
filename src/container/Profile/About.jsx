import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Para } from '../../components/Shared/UI'
import { fadeInVariants } from '../../config'

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
            className='flex items-center mb-10 h-40 bg-gray-400 text-gray-400 mx-7 rounded-3xl'>
            ^^
          </motion.div>
        )}
      </InView>
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
            className='mb-10 bg-gray-100 dark:bg-gray-800 bg-opacity-25 mx-7 py-5 pl-5 rounded-3xl'>
            <ul className='space-y-5'>
              <li>
                <Para
                  title='13년 11개월'
                  desc='경력'
                  icon={['fad', 'briefcase-clock']}
                  iconClassName='bg-opacity-100'
                  compact
                  titleBorderBottom
                  reverse
                  animate={false}
                />
              </li>
              <li>
                <Para
                  title='1982.10'
                  desc='생년월'
                  icon={['fad', 'cake-candles']}
                  iconClassName='bg-opacity-100'
                  compact
                  titleBorderBottom
                  reverse
                  animate={false}
                />
              </li>
              <li>
                <Para
                  title='서울시 영등포구'
                  desc='사는곳'
                  icon={['fad', 'location-dot']}
                  iconClassName='bg-opacity-100'
                  compact
                  reverse
                  animate={false}
                />
              </li>
            </ul>
          </motion.div>
        )}
      </InView>
      <Para
        odd
        title='소개'
        desc='소개의 말'
        icon={['fat', 'scroll']}
        p={[
          '디자인을 잘 아는 개발자! UX를 잘 아는 개발자! 개발을 잘 하는 개발자!',
          '한 분야만 잘 하는 개발자보다 두루두루 잘 하는 개발자가 되려고 합니다.',
        ]}
      />
      <Para
        title='성장 과정'
        icon={['fat', 'seedling']}
        p={[
          'UI 디자이너로 시작 후 마크업 개발, 인터렉티브 개발을 거쳐 현재 프론트엔드 개발까지 점점 기술력에 대한 갈망이 깊어지면서 다양한 쪽으로 관심을 가지고 있습니다.',
        ]}
      />
      <Para
        odd
        title='역량'
        icon={['fat', 'battery-bolt']}
        p={[
          'RESTful API + ES6 이상 버전의 JavaScript로 오랜 개발 경험',
          'NodeJS 환경에서 React 기반 CRA, NextJS 프레임워크로 SSR, CSR 프론트엔드 개발 경험',
          'AWS, GCP 클라우드 환경에서 프론트엔드 개발 경험',
          '다양한 Motion 인터렉티브 개발 경험',
          '디자인 시스템 및 접근성, SEO를 고려한 개발 경험',
          'GIT, Docker, ESlint, Prettier, Agile을 통한 오랜 협업 경험',
        ]}
      />
      <Para
        title='마치며'
        icon={['fat', 'file-dashed-line']}
        p={[
          '프론트엔드의 모든 것..',
          '디자인과 프론트엔드 개발을 충분히 숙지한 저야 말로 남들보다는 더 나은 UX를 창출할 수 있다고 확신합니다.',
        ]}
        isLast
      />
    </>
  )
}
