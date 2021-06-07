import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import About from '../container/Profile/About'
import Strength from '../container/Profile/Strength'
import Career from '../container/Profile/Career'
import Tech from '../container/Profile/Tech'
import { profileTabState, profileTabStickyState, titleStickyState } from '../states'

export default function Profile() {
  const [, setTitleSticky] = useRecoilState(titleStickyState)
  const [, setProfileTabSticky] = useRecoilState(profileTabStickyState)
  const profileTab = useRecoilValue(profileTabState)

  useEffect(() => {
    setTitleSticky(true)
    setProfileTabSticky(true)
  }, [])

  return (
    <>
      <div className='min-h-screen pt-40'>
        {profileTab === '1' && <About />}
        {profileTab === '2' && <Career />}
        {profileTab === '3' && <Strength />}
        {profileTab === '4' && <Tech />}
      </div>
    </>
  )
}
