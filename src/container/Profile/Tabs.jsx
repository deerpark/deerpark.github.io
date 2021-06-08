import { useCallback, useRef, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import { Tabs } from '../../components/Shared/UI'
import { profileTabState, profileTabDirectionState } from '../../states'
import { profileTabs } from '../../config'

export default function ProfileTab() {
  const scrollRootRef = useRef()
  const [profileTab, setProfileTab] = useRecoilState(profileTabState)
  const [, setProfileTabDirection] = useRecoilState(profileTabDirectionState)
  const tabRef = useRef(profileTab)
  const handleScrollToTop = useCallback(() => {
    if (scrollRootRef.current) {
      scrollRootRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])
  const handleChangeTab = useCallback(v => {
    if (v !== tabRef.current) {
      setProfileTabDirection(tabRef.current < v ? 1 : -1)
      setProfileTab(v)
      tabRef.current = v
    }
  }, [])
  useEffect(() => {
    setTimeout(handleScrollToTop, 100)
  }, [profileTab])
  useEffect(() => {
    scrollRootRef.current = document.querySelector('.ScrollbarsCustom-Scroller')
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ height: [0, 70, 56], opacity: [0, 0, 1] }}
      exit={{ height: [56, 70, 0], opacity: [1, 0, 0] }}
      className='w-full flex justify-center items-center -mt-3 pb-4 overflow-hidden'>
      <Tabs value={profileTab} items={profileTabs} onChange={handleChangeTab} align='center' />
    </motion.div>
  )
}
