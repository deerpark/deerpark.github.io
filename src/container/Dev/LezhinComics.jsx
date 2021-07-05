import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Shared/UI/Button'

export default function LezhinComics() {
  return (
    <div className='space-y-10'>
      <div className='space-y-2'>
        <p className='text-xs text-gray-500 opacity-50'>최초 유료 웹툰의 시작</p>
        <h2 className='text-2xl pb-4 text-gray-900 dark:text-gray-200 flex justify-between items-center'>
          <span className='font-title'>레진코믹스</span>
          <div>
            <Button
              className='flex space-x-2'
              as='button'
              type='button'
              text='text-sm font-bold'
              onClick={() => {
                window.open('https://www.lezhin.com/ko')
              }}>
              <span>바로가기</span>
              <FontAwesomeIcon icon={['fas', 'angle-right']} />
            </Button>
          </div>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          유료 웹툰을 런칭한 스타트업에서 중견 기업으로..
          <br />
          레진코믹스의 서비스 개발 및 백오피스 개발을 담당 했습니다.
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>프롤로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          마크업 개발자로 입사 후 프론트엔드 개발 업무를 마지막으로 퇴사했습니다.
          <br />
          레진 코믹스의 프로모션 및 다양한 모션 인터렉티브를 개발을 담당했고 백오피스 개발도 했습니다.
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>개발 스택</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>Vanilla JS, AngularJS, Angular</p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>에필로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          국내/해외 서비스를 제공하는 회사의 개발 경험이 좋았습니다.
          <br />
          또한 내부 파트너를 위한 파트너 도구 개발도 재미있었습니다.
          <br />
          스타트업의 회사 문화가 좋았고 좋은 복지도 경험했으며 좋은 사람들과의 협업도 아주 기억에 남습니다.
        </p>
      </div>
    </div>
  )
}
