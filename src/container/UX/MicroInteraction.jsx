export default function MicroInteraction() {
  return (
    <div className='space-y-10'>
      <div className=''>
        <h2 className='text-xl text-gray-600 dark:text-gray-400'>
          <span className='font-title'>마이크로 인터렉션</span>
        </h2>
        <p className='text-xs text-gray-500'>더 나은 UX를 위한 마이크로 인터렉션</p>
      </div>
      <div className=''>
        <h2 className='text-lg text-gray-600 dark:text-gray-400'>
          <span className='font-title'>인터렉션</span>
        </h2>
        <p className='text-sm text-gray-500'>
          상호작용은 두가지 다음과 같이 두가지로 분류할 수 있습니다.
          <br />
          미세한 상호작용, 거시적 상호작용
        </p>
      </div>
      <div className=''>
        <h2 className='text-lg text-gray-600 dark:text-gray-400'>
          <span className='font-title'>정의</span>
        </h2>
        <p className='text-sm text-gray-500'>
          장치 및 앱 내에 있는 하나의 단일 목적이 있는 작업이 있는 이벤트 사용자들 에게 흥미로움을 유발하고 사용 경험에
          피드백을 주는 애니메이션 사용자의 직접적인 조작 감각 강화
        </p>
      </div>
      <div className=''>
        <h2 className='text-lg text-gray-600 dark:text-gray-400'>
          <span className='font-title'>패턴의 예</span>
        </h2>
        <p className='text-sm text-gray-500'>
          센서 탭으로 손을 씻으려면 센서 앞에서 손을 흔듭니다. 센서가 손을 인식합니다. 이 때 수돗물이 작동하기 시작
          하므로 손을 씻을 수 있습니다.
        </p>
      </div>
      <div className=''>
        <h2 className='text-lg text-gray-600 dark:text-gray-400'>
          <span className='font-title'>효과적인 사용 예제</span>
        </h2>
        <p className='text-sm text-gray-500'>
          마이크로 인터렉션은 우리 일상 모든 곳에 존재 합니다. 장치 및 앱에서의 예를 살펴 봅니다.
        </p>
      </div>
      <div className='space-y-5'>
        <h2 className='text-lg text-gray-600 dark:text-gray-400'>
          <span className='font-title'>고려해야할 사항 4가지</span>
        </h2>
        <div className=''>
          <h3 className='text-base text-gray-600 dark:text-gray-400'>
            <span className='font-title'>기능 분석</span>
          </h3>
          <p className='text-sm text-gray-500'>
            목적이 무엇인지 고민해야 합니다.
            <br />이 케이스의 목적은 아래로 당겨서 페이지를 갱신합니다.
          </p>
        </div>
        <div className=''>
          <h3 className='text-base text-gray-600 dark:text-gray-400'>
            <span className='font-title'>패턴을 유념</span>
          </h3>
          <p className='text-sm text-gray-500'>
            트리거 → 규칙 → 피드백 → 반복과 모드 사용자가 페이지를 당기면 페이지 갱신을 호출하고 화면에 피드백을 줍니다.
            <br />
            갱신이 되면 이벤트는 종료됩니다.
          </p>
        </div>
        <div className=''>
          <h3 className='text-base text-gray-600 dark:text-gray-400'>
            <span className='font-title'>단순함을 유지</span>
          </h3>
          <p className='text-sm text-gray-500'>
            화려함이 지나치면 페이지의 집중도가 흐트려 질 수 있습니다.
            <br />
            사용자가 순간의 이벤트에 집중할 수 있도록 최소한의 단순함을 유지하여 사용자의 경험을 극대화 합니다.
          </p>
        </div>
        <div className=''>
          <h3 className='text-base text-gray-600 dark:text-gray-400'>
            <span className='font-title'>피드백 수렴</span>
          </h3>
          <p className='text-sm text-gray-500'>
            실험과 테스트를 거쳐 사용자에게 많은 피드백을 받아 지속적으로 반영합니다.
          </p>
        </div>
      </div>
      <div className=''>
        <h2 className='text-lg text-gray-600 dark:text-gray-400'>
          <span className='font-title'>도구</span>
        </h2>
        <p className='text-sm text-gray-500'>무엇으로 마이크로 인터렉션을 만들수 있는지 관련 도구를 알아봅니다.</p>
      </div>
      <div className=''>
        <h2 className='text-lg text-gray-600 dark:text-gray-400'>
          <span className='font-title'>관련 링크</span>
        </h2>
        <p className='text-sm text-gray-500'>외부 링크를 공유 합니다.</p>
      </div>
    </div>
  )
}
