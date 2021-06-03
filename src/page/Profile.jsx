export default function Profile({ isScrolled }) {
  return (
    <div>
      <div
        className={`flex flex-col py-10 transition-all ${
          isScrolled ? 'opacity-0 -translate-y-5' : 'opacity-1 -translate-y-0'
        }`}>
        <h2 className='text-xl text-gray-800 dark:text-gray-200'>
          <span className='font-title'>김용만2 {JSON.stringify(isScrolled)}</span>
        </h2>
        <p className='text-xs text-gray-500'>프론트엔드 엔지니어</p>
      </div>
      <div className='flex justify-center items-center pb-10'>
        <img src='/profile-image.png' alt='' width='205' />
      </div>
      <div className='h-96' />
      11
      <div className='h-96' />
      <div className='h-96' />
    </div>
  )
}
