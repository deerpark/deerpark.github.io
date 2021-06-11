import { Para } from '../../components/Shared/UI'

export default function Strength() {
  return (
    <>
      <Para
        title='SSR'
        desc='SPA(CSR), SSR 개발 경험'
        icon={['fad', 'server']}
        p={['SPA(싱글 페이지 애플리케이션), SSR(서버 사이드 렌더링), CSR(클라이언트 사이드 렌더링) 개발 경험']}
      />
      <Para
        odd
        title='디자인'
        desc='디자인에 대한 이해'
        icon={['fad', 'compass-drafting']}
        iconClassName='text-gray-500 dark:text-opacity-70 bg-white dark:bg-black'
        p={['UI,UX,프로토타입 및 디자인 시스템 전반에 대한 깊은 이해와 활용 능력']}
      />
      <Para
        title='DMP'
        desc='데이터 시각화에 대한 개발 경험'
        icon={['fad', 'database']}
        p={['DMP, CDP, 데이터 분석 서비스 클라이언트/SDK 개발 경험']}
      />
      <Para
        odd
        title='OOP'
        desc='객체 지향 프로그래밍'
        icon={['fad', 'draw-circle']}
        iconClassName='text-gray-500 dark:text-opacity-70 bg-white dark:bg-black'
        p={['객체지향 설계와 테스트 주도 개발에 대한 이해']}
        isLast
      />
    </>
  )
}
