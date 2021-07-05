import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Shared/UI/Button'

export default function Pmang() {
  return (
    <div className='space-y-10'>
      <div className='space-y-2'>
        <p className='text-xs text-gray-500 opacity-50'>네오위즈 게임포털</p>
        <h2 className='text-2xl pb-4 text-gray-900 dark:text-gray-200 flex justify-between items-center'>
          <span className='font-title'>피망</span>
          <div>
            <Button
              className='flex space-x-2'
              as='button'
              type='button'
              text='text-sm font-bold'
              onClick={() => {
                window.open('https://www.pmang.com')
              }}>
              <span>바로가기</span>
              <FontAwesomeIcon icon={['fas', 'angle-right']} />
            </Button>
          </div>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>게임 공식 사이트, 프로모션 페이지 개발</p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>프롤로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>...</p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>개발 스택</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>...</p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>기능</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>스크린샷...</p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>에필로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>...</p>
      </div>
    </div>
  )
}
