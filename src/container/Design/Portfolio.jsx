export default function Portfolio() {
  return (
    <div className='space-y-10'>
      <div className='space-y-2'>
        <p className='text-xs text-gray-500 opacity-50'>이력서와 포트폴리오를 한방에</p>
        <h2 className='text-2xl pb-4 text-gray-900 dark:text-gray-200'>
          <span className='font-title'>Yonn Portfolio</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>오픈소스로 공개한 심플 그 자체 포트폴리오</p>
      </div>
      <div className=''>
        <h2 className='text-lg text-gray-800 dark:text-gray-300'>
          <span className='font-title'>프롤로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>...</p>
      </div>
      <div className=''>
        <h2 className='text-lg text-gray-800 dark:text-gray-300'>
          <span className='font-title'>기능</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>스크린샷...</p>
      </div>
      <div className=''>
        <h2 className='text-lg text-gray-800 dark:text-gray-300'>
          <span className='font-title'>에필로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>...</p>
      </div>
    </div>
  )
}
