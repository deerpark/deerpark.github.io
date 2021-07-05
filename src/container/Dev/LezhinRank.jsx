import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Shared/UI/Button'

export default function LezhinRank() {
  return (
    <div className='space-y-10'>
      <div className='space-y-2'>
        <p className='text-xs text-gray-500 opacity-50'>레진코믹스 웹툰 랭킹 서비스</p>
        <h2 className='text-2xl pb-4 text-gray-900 dark:text-gray-200 flex justify-between items-center'>
          <span className='font-title'>레진 코믹스 랭킹</span>
          <div>
            <Button
              className='flex space-x-2'
              as='button'
              type='button'
              text='text-sm font-bold'
              onClick={() => {
                window.open('https://lezhin-rank.vercel.app/')
              }}>
              <span>바로가기</span>
              <FontAwesomeIcon icon={['fas', 'angle-right']} />
            </Button>
          </div>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          일별 가장 인기있는 웹툰을 랭킹 서비스로 제공하는 웹 앱으로 현재는 랭킹 API가 종료되어 데모가 불가능합니다.
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>프롤로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          사내에서 랭킹 서비스를 독립적으로 개발하면 어떨까? 하는 토이 프로젝트로 시작하여 공식적으로 서비스를 오픈한
          프로젝트입니다.
          <br />한 화면에 최근 몇년간의 데이터를 사용자의 슬라이더 조작으로 웹툰 리스트를 렌더링 하였으며 다국어지원 및
          SEO 적용까지 짧은 기간에 서비스 런칭을 완료했습니다.
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>개발 스택</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>NextJS</p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>기능</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          일별 단위의 상위 랭킹 20위의 웹툰 카드 제공
          <br />
          슬라이드 조작으로 몇년간의 웹툰 트렌드를 빠르게 파악할수 있는 UI 제공
          <br />
          다국어 지원(영어, 일본어, 한국어)
          <br />
          SEO
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>에필로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          {' '}
          NextJS i18n을 이용, i18n을 적용한 첫 개발 경험이였으며, 단 2주만에 개발 구상부터 서비스 런칭까지 완료했습니다.
          <br />
          퇴사 후 꾸준히 서비스 되다가 어느 순간 서비스 종료가 되어 매우 안타깝게 생각합니다.
        </p>
      </div>
    </div>
  )
}
