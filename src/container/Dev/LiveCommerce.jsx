export default function LiveCommerce() {
  return (
    <div className='space-y-10'>
      <div className='space-y-2'>
        <p className='text-xs text-gray-500 opacity-50'>국내 라방의 모든 스케쥴을 한곳에 담다</p>
        <h2 className='text-2xl pb-4 text-gray-900 dark:text-gray-200'>
          <span className='font-title'>라방 편성표</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>라이브커머스 한곳에서 볼수 없을까?</p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>프롤로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          사내 타 부서에서 있으면 좋을법한 기능에 대한 의견을 주고받은 후 토이 프로젝트로 시작했지만 내부 반응이 좋아
          공식적으로 시간과 인력을 협조 받아 개발했습니다.
          <br />타 부서에서는 라이브 방송 편성에 있어 경쟁사의 편성표가 큰 도움이 된다고 인지 하고 실무자 인터뷰를
          시작으로 필요한 요구 사항을 수집한 후 개발을 시작했습니다.
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>개발 스택</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          SEO 및 빠른 기능 프로토타입을 위해 NextJS, MobX로 프로젝트를 구성했습니다.
          <br />
          쉽고 빠르게 UI를 개발하기 위해 TailwindCSS를 도입하였습니다.
        </p>
      </div>
      <div className=''>
        <figure>
          <img
            className='w-full object-cover rounded-md'
            src='https://images.unsplash.com/photo-1605791767308-46f38113f418?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
            alt=''
          />
          <figcaption className='text-xs opacity-50 py-1 px-2 text-right'>image by unsplash.com</figcaption>
        </figure>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>기능</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>
          경쟁사 방송표 크롤링 후 주단위 편성표 제공
          <br />
          카테고리 및 경쟁사의 요약정보를 보여주기위한 차트 대시보드 제공
          <br />
          주단위 시간표위에 주단위 사용자 유입 히트맵을 오버레이로 제공 (개발 중)
        </p>
      </div>
      <div className=''>
        <h2 className='subtitle'>
          <span className='font-title'>에필로그</span>
        </h2>
        <p className='text-sm text-gray-500 opacity-75'>현재 내부 데모를 위한 막바지 개발이 진행중에 있습니다.</p>
      </div>
    </div>
  )
}
