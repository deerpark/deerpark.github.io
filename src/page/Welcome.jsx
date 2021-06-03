import Card from '../components/Shared/UI/Card'

export default function Welcome() {
  return (
    <>
      <div className='grid grid-flow-row grid-cols-1 gap-7'>
        <Card className='card relative h-60 flex flex-col' shadow='shadow-md' rounded='rounded-3xl'>
          <div className='flex-grow rounded-3xl rounded-b-none' style={{ background: '#08B5D4' }} />
          <div className='flex-none flex justify-between items-center space-x-2 px-7 py-5 rounded-3xl rounded-t-none'>
            <div className='flex flex-col'>
              <h2 className='text-xl text-gray-800 dark:text-gray-200'>
                <span className='font-title'>TailWindCSS</span>
              </h2>
              <p className='text-xs text-gray-500'>유틸리티 CSS 프레임워크</p>
            </div>
            <div className='flex'>
              <div className='w-12 h-12 flex justify-center items-center rounded-3xl bg-gray-100 dark:bg-gray-800 dark:bg-opacity-70'>
                <img style={{ maxWidth: 36, maxHeight: 36 }} src='/images/tailwindcss-logo.svg' alt='' />
              </div>
            </div>
          </div>
        </Card>
        <Card className='card relative h-60 flex flex-col' shadow='shadow-md' rounded='rounded-3xl'>
          <div className='flex-grow rounded-3xl rounded-b-none' style={{ background: '#FA6400' }} />
          <div className='flex-none flex justify-between items-center space-x-2 px-7 py-5 rounded-3xl rounded-t-none'>
            <div className='flex flex-col'>
              <h2 className='text-xl text-gray-800 dark:text-gray-200'>
                <span className='font-title'>케이스 스터디</span>
              </h2>
              <p className='text-xs text-gray-500'>포트폴리오는 이렇게 만들어졌다.</p>
            </div>
            <div className='flex'>
              <div className='w-12 h-12 flex justify-center items-center rounded-3xl bg-gray-100 dark:bg-gray-800 dark:bg-opacity-70'>
                <img style={{ maxWidth: 36, maxHeight: 36 }} src='/images/tailwindcss-logo.svg' alt='' />
              </div>
            </div>
          </div>
        </Card>
        <Card className='card relative h-60 flex flex-col' shadow='shadow-md' rounded='rounded-3xl'>
          <div className='flex-grow rounded-3xl rounded-b-none' style={{ background: '#F7B500' }} />
          <div className='flex-none flex justify-between items-center space-x-2 px-7 py-5 rounded-3xl rounded-t-none'>
            <div className='flex flex-col'>
              <h2 className='text-xl text-gray-800 dark:text-gray-200'>
                <span className='font-title'>MobX 사용기</span>
              </h2>
              <p className='text-xs text-gray-500'>상태관리에 있어서 가장 쉽고 빠른..</p>
            </div>
            <div className='flex'>
              <div className='w-12 h-12 flex justify-center items-center rounded-3xl bg-gray-100 dark:bg-gray-800 dark:bg-opacity-70'>
                <img style={{ maxWidth: 36, maxHeight: 36 }} src='/images/tailwindcss-logo.svg' alt='' />
              </div>
            </div>
          </div>
        </Card>
        <Card className='card relative h-60 flex flex-col' shadow='shadow-md' rounded='rounded-3xl'>
          <div className='flex-grow rounded-3xl rounded-b-none' style={{ background: '#E02020' }} />
          <div className='flex-none flex justify-between items-center space-x-2 px-7 py-5 rounded-3xl rounded-t-none'>
            <div className='flex flex-col'>
              <h2 className='text-xl text-gray-800 dark:text-gray-200'>
                <span className='font-title'>NextJS</span>
              </h2>
              <p className='text-xs text-gray-500'>리액트 SSR의 혁명 같은 존재</p>
            </div>
            <div className='flex'>
              <div className='w-12 h-12 flex justify-center items-center rounded-3xl bg-gray-100 dark:bg-gray-800 dark:bg-opacity-70'>
                <img style={{ maxWidth: 36, maxHeight: 36 }} src='/images/tailwindcss-logo.svg' alt='' />
              </div>
            </div>
          </div>
        </Card>
        <Card className='card relative h-60 flex flex-col' shadow='shadow-md' rounded='rounded-3xl'>
          <div className='flex-grow rounded-3xl rounded-b-none' style={{ background: '#6236FF' }} />
          <div className='flex-none flex justify-between items-center space-x-2 px-7 py-5 rounded-3xl rounded-t-none'>
            <div className='flex flex-col'>
              <h2 className='text-xl text-gray-800 dark:text-gray-200'>
                <span className='font-title'>GraphQL</span>
              </h2>
              <p className='text-xs text-gray-500'>GraphQL 무작정 따라하기</p>
            </div>
            <div className='flex'>
              <div className='w-12 h-12 flex justify-center items-center rounded-3xl bg-gray-100 dark:bg-gray-800 dark:bg-opacity-70'>
                <img style={{ maxWidth: 36, maxHeight: 36 }} src='/images/tailwindcss-logo.svg' alt='' />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
