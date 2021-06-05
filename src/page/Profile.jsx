import { useRecoilState, useRecoilValue } from 'recoil'
import About from '../container/Profile/About'
import Cover from '../components/Shared/Cover'
import { profileTabState, profileTabStickyState } from '../states'

export default function Profile() {
  const [, setProfileTabSticky] = useRecoilState(profileTabStickyState)
  const profileTab = useRecoilValue(profileTabState)

  return (
    <>
      <Cover
        dense
        title='김용만'
        subTitle='프론트엔드 엔지니어'
        icon={
          <>
            <img className='profile-image-dark' src='/profile-image-dark.png' alt='' width='205' />
            <img className='profile-image-light' src='/profile-image.png' alt='' width='205' />
          </>
        }
        setStickyAnyState={inview => setProfileTabSticky(!inview)}
      />
      <div className='min-h-screen'>
        {profileTab === '1' && <About />}
        {profileTab === '2' && <div className='h-96' />}
        {profileTab === '3' && <div className='h-96' />}
        {profileTab === '4' && <div className='h-96' />}
      </div>
    </>
  )
}
