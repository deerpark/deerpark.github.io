import { useCallback, useRef, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import { Tabs } from '../../components/Shared/UI'
import { profileTabState } from '../../states'

const TABS = [
  { label: '소개', value: '1' },
  { label: '업무적 강점', value: '2' },
  { label: '경력', value: '3' },
  { label: '기술 스택', value: '4' },
]

export default function ProfileTab() {
  const scrollRootRef = useRef()
  const [profileTab, setProfileTab] = useRecoilState(profileTabState)
  const tab = useRef(profileTab)
  const handleChangeTab = useCallback(v => {
    if (profileTab !== tab) {
      if (scrollRootRef.current) {
        scrollRootRef.current.scrollTop = 502
      }
      tab.current = profileTab
    }
    setProfileTab(v)
  }, [])
  useEffect(() => {
    scrollRootRef.current = document.querySelector('.ScrollbarsCustom-Scroller')
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ height: [0, 70, 56], opacity: [0, 0, 1] }}
      exit={{ height: [56, 70, 0], opacity: [1, 0, 0] }}
      className='w-full flex justify-center items-center -mt-3 pb-4 overflow-hidden'>
      <Tabs value={profileTab} items={TABS} onChange={handleChangeTab} align='center' />
    </motion.div>
  )
}
