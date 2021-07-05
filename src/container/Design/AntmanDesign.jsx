import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Shared/UI/Button'

export default function AntmanDesign() {
  return (
    <div className='space-y-10'>
      <div className='space-y-2'>
        <p className='text-xs text-gray-500 opacity-50'>퀀트를 기반으로한 종목 추천 시스템</p>
        <h2 className='text-2xl pb-4 text-gray-900 dark:text-gray-200 flex justify-between items-center'>
          <span className='font-title'>앤트맨</span>
          <div>
            <Button
              className='flex space-x-2'
              as='button'
              type='button'
              text='text-sm font-bold'
              onClick={() => {
                window.open('https://www.antman.kr')
              }}>
              <span>바로가기</span>
              <FontAwesomeIcon icon={['fas', 'angle-right']} />
            </Button>
          </div>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          디자인과 부분적인 프론트엔드 개발을 담당 했습니다.
          <br />
          현재 진행중인 토이 프로젝트로써 올해 오픈을 목표로 개발중인 프로젝트입니다.
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>프롤로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          개미의 77퍼센트는 주식투자에 어려움을 호소합니다.
          <br />
          종목을 선정을 할때 회계 공부도 해야하고, 용어 어렵고, 분석 어렵고 시간이 없고, 공시도 봐야하고 여러 판단을
          할때 어렵기 때문입니다.
          <br />
          글로벌 투자 자문도 다 퀀트로 전환하고 있는 추세에 발 맞춰서 개미도 퀀트를 써야한다는 생각에 앤트맨을
          제작하기로 결심했습니다.
        </p>
      </div>
      <div className=''>
        <figure>
          <img className='w-full object-cover rounded-md' src='/images/antman-3.png' alt='' />
          <figcaption className='text-xs opacity-50 py-1 px-2 text-right'>다크모드 제공</figcaption>
        </figure>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>기능</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          투자에 있어 개미들을 위한 종목별 재무재표 및 공시 제공
          <br />
          주식 투자자들을 위한 커뮤니티 제공 (개발 중)
          <br />
          초보를 위한 퀀트기반 종목 추천 (개발 중)
        </p>
      </div>
      <div className=''>
        <figure>
          <img className='w-full object-cover rounded-md' src='/images/antman-2.png' alt='' />
          <figcaption className='text-xs opacity-50 py-1 px-2 text-right'>앤트맨에서 제공중인 차트 디자인</figcaption>
        </figure>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>에필로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          토이 프로젝트라는 한계가 있어 시간적인 여유가 없고 간간시 여유를 가지며 프로젝트를 진행하다보니 진행속도가
          많이 느린 환경에서도 멤버들의 특유한 팀웍으로 가시적인 성과를 거둘 수 있었습니다.
        </p>
        <p className='text-sm text-gray-500 opacity-75'>
          TailwindCSS의 컬러스키마를 도입하여 쉽고 빠른 라이트/다크모드를 디자인 할 수 있었습니다.
          <br />
        </p>
      </div>
    </div>
  )
}
