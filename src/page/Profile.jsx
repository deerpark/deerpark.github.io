import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { inviewVariants } from '../config'
import { Para } from '../components/Shared/UI'

export default function Profile() {
  return (
    <>
      <div className='h-screen flex flex-col justify-center items-stretch'>
        <InView>
          {({ inView, ref, entry }) => (
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={inviewVariants}
              className='profile-image flex justify-center items-center pt-10 pb-5'>
              <img className='profile-image-dark' src='/profile-image-dark.png' alt='' width='205' />
              <img className='profile-image-light' src='/profile-image.png' alt='' width='205' />
            </motion.div>
          )}
        </InView>
        <InView>
          {({ inView, ref, entry }) => (
            <motion.div
              ref={ref}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={inviewVariants}
              className='text-3xl pb-40 text-center'>
              <h2 className='text-3xl text-gray-600 dark:text-gray-400'>
                <span className='font-title'>김용만</span>
              </h2>
              <p className='text-sm text-gray-500'>프론트엔드 엔지니어</p>
            </motion.div>
          )}
        </InView>
      </div>
      <Para
        odd
        title='소개'
        desc='소개의 말'
        icon={['fat', 'person']}
        p={[
          '“열정”... 이 단어가 저를 가장 잘 표현해 주는 단어입니다.',
          '한 가지에 매료되면 강한 집중력을 발휘합니다. 오히려 과한 열정일 수도 있습니다. 현재는 넘치는 열정도 스스로 컨트롤할 줄 아는 김용만이라고 합니다.',
        ]}
      />
      <Para
        title='성장 과정'
        icon={['fat', 'baby-carriage']}
        p={[
          '22살 디자이너 ~ 28살 마크업 개발을 시작으로 시간이 지남에 따라 점점 기술력에 대한 갈망이 깊어지면서 프론트엔드 개발 쪽으로 관심을 가지게 되었으며, 현재 수많은 프레임워크와 라이브러리에 대해 시간을 투자하며 공부에 공부를 하고있습니다.',
        ]}
      />
      <Para
        odd
        title='경력'
        icon={['fat', 'briefcase-clock']}
        p={[
          '그동안은 svg, motion script 라이브러리인 GSAP로 다양한 motion 인터렉티브 개발 경험을 쌓아왔고, NextJS 프레임워크로 SSR 및 SPA 등 프론트엔드 개발에 집중했습니다.',
          '또한 AngularJS를 시작으로 Angular, React 기반의 라이브러리와 프레임워크를 이용하여 실무 경력을 쌓아왔으며 캔버스와 WebGL도 두루 살펴 보고 있습니다.',
          '추가로 ES6,7,8에 지속적인 관심을 갖고 있고, NodeJS를 이용한 개발환경에 대한 여러가지 고민도 함께 하며 RESTful API로 현업 개발을 하고 있습니다.',
          '또한 단위테스트에 대한 관심도 많이 가지고 있으며 TDD 개발에 관심이 있습니다.',
        ]}
      />
      <Para
        title='역량'
        icon={['fat', 'battery-bolt']}
        p={[
          'GIT, Docker, Prettier, Agile를 통한 오랜 협업 경험을 가지고 있습니다.',
          '동료와의 원활한 커뮤니케이션을 아주 중요하게 생각하며 오로지 개발이 아닌 비즈니스 모델과 개발은 하나라고 생각하고 있습니다.',
          '접근성 및 SEO는 기본이라고 생각하고 있고, 더 나아가 디자인과 개발이 따로 떨어져 생각하는 게 아닌 함께 고려해야 한다는 철학을 가지고 있습니다.',
          '결국 사용자 경험을 최대한 끌어올릴수 있는 방안도 함께 연구해야 한다고 생각합니다.',
        ]}
      />
      <Para
        odd
        title='마치며'
        icon={['fat', 'file-dashed-line']}
        p={[
          '프론트엔드의 모든 것..',
          '디자인+마크업+MSA+RESTful API를 충분히 숙지한 저야말로 더 나은 UX를 창출할 수 있다고 믿고 있으며, 이는 결론적으로 귀사에 기존 및 새로운 상품에 대한 수익 증진 효과를 가져오게 될 거라는 걸 확신하고 있습니다.',
          '긴 글 읽어 주셔서 깊은 감사 드리며 꼭 귀사와 함께 하고 싶다는 말씀 전달 드립니다. 이상입니다.',
        ]}
        isLast
      />
    </>
  )
}