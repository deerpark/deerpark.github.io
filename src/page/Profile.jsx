import { useRecoilState, useRecoilValue } from 'recoil'
import Cover from '../components/Shared/Cover'
import About from '../container/Profile/About'
import Strength from '../container/Profile/Strength'
import Career from '../container/Profile/Career'
import Tech from '../container/Profile/Tech'
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
        {profileTab === '2' && <Career />}
        {profileTab === '3' && <Strength />}
        {profileTab === '4' && <Tech />}
      </div>
    </>
  )
}
