import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Shared/UI/Button'

export default function Datadive() {
  return (
    <div className='space-y-10'>
      <div className='space-y-2'>
        <p className='text-xs text-gray-500 opacity-50'>고객의 초개인화를 마케팅으로</p>
        <h2 className='text-2xl pb-4 text-gray-900 dark:text-gray-200 flex justify-between items-center'>
          <span className='font-title'>데이터다이브</span>
          <div>
            <Button
              className='flex space-x-2'
              as='button'
              type='button'
              text='text-sm font-bold'
              onClick={() => {
                window.open('https://www.datadive.ai')
              }}>
              <span>바로가기</span>
              <FontAwesomeIcon icon={['fas', 'angle-right']} />
            </Button>
          </div>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          사용자의 행동을 분석하여 360도 프로파일을 제공하며 사용자의 행동 흐름을 기반으로 필요한 타겟군을 추출하여
          마케팅을 집행할 수 있는 서비스입니다.
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>프롤로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75 mb-5'>
          사용자 행동을 분석하기 위해서 먼저 행동 로그를 수집할 수 있는 SDK가 필요하였고 오픈소스중 안정성이 입증된
          Amplitude SDK를 포팅하여 데이터다이브를 위한 커스텀 개발을 진행 했습니다.
        </p>
        <p className='text-sm text-gray-500 opacity-75 mb-5'>
          또한 마케터가 쉽고 빠르게 원하는 사용자 타겟군을 추출하고 마케팅 집행을 할수 있는 서비스 클라이언트를 개발
          했습니다.
        </p>
        <p className='text-sm text-gray-500 opacity-75'>
          프로젝트 초기 베트남의 투자사를 기반으로 1년간 현지에서 베타테스트를 진행 하였고 코로나 발병후 현지 서비스가
          어렵게 되자 프로젝트 방향을 피봇하여 국내향으로 다시 개발 했습니다.
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>개발 스택</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>NextJS, Mobx, Ant Design</p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>기능</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          일별 월별 지표를 대시보드로 제공
          <br />
          미리 제공된 프리셋으로 쉬운 사용자 타켓군 추출 기능 제공
          <br />
          구글 Ads, 페이스북, MaiChimp, 카카오톡 채널 마케팅 집행
          <br />
          마케팅 집행 후 고급 성과 분석 리포트 제공(코호트 분석, 퍼널 분석, 캠페인 비교 분석)
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>에필로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75 mb-5'>
          CDP(고객 데이터 플랫폼) 개발 경험은 쉽게 얻을수 없는 기회였고 개발을 진행 하면서 마케팅, 비즈니스의 영역에
          한번 더 고민하게된 계기가 되었습니다.
        </p>
        <p className='text-sm text-gray-500 opacity-75 mb-5'>
          또한 베트남 현지에서 로컬 개발자 들과 협업은 소중한 추억 및 경험이였으며 코로나로 인한 프로젝트 방향 전환은
          많이 아쉬운 기억으로 남았습니다.
        </p>
        <p className='text-sm text-gray-500 opacity-75'>
          그럼에도 불구하고 프로젝트 시작부터 성공적인 베타 서비스 런칭까지 프론트엔드 개발을 100% 담당했습니다. 아주
          즐겁고 보람찬 경험이였습니다.
        </p>
      </div>
    </div>
  )
}
