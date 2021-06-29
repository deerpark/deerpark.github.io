import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { MotionConfig, motion } from 'framer-motion'
import { Tabs } from '../../components/Shared/UI'
import { profileTabs, routes } from '../../config'

const profileRoutes = Object.keys(routes).filter(f => f.includes('/profile'))

export default function ProfileTab({ value }) {
  const history = useHistory()
  const handleChangeTab = useCallback(v => {
    history.push(profileRoutes[v])
  }, [])
  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ height: [0, 56], opacity: [0, 1] }}
        exit={{ height: [56, 0], opacity: [1, 0] }}
        className='w-full flex justify-center items-center -mt-3 pb-4 overflow-hidden'>
        <Tabs value={value} items={profileTabs} onChange={handleChangeTab} align='center' />
      </motion.div>
    </MotionConfig>
  )
}
