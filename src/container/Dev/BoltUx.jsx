import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/Shared/UI/Button'

export default function BoltUx() {
  return (
    <div className='space-y-10'>
      <div className='space-y-2'>
        <p className='text-xs text-gray-500 opacity-50'>홈페이지 제작 서비스</p>
        <h2 className='text-2xl pb-4 text-gray-900 dark:text-gray-200 flex justify-between items-center'>
          <span className='font-title'>BOLT UX</span>
          <div>
            <Button
              className='flex space-x-2'
              as='button'
              type='button'
              text='text-sm font-bold'
              onClick={() => {
                window.open('https://www.bolt-ux.com')
              }}>
              <span>바로가기</span>
              <FontAwesomeIcon icon={['fas', 'angle-right']} />
            </Button>
          </div>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          개발 디자인을 담당 했습니다.
          <br />
          개발과 디자인 그리고 UX를 다루는 프로젝트 입니다.
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>프롤로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          홈페이지 제작을 최소한의 비용을 받고 경험 차원에서 서비스를 제공하면 좋겠다 하여 아주 소소한 페이지를 제작하는
          서비스를 해보자하여 시작 하였습니다.
        </p>
      </div>
    </div>
  )
}
