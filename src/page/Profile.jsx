import { useEffect /* useCallback */ } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useRecoilState /* useRecoilValue */ } from 'recoil'
/* import { motion, AnimatePresence } from 'framer-motion' */
import About from '../container/Profile/About'
import Strength from '../container/Profile/Strength'
import Career from '../container/Profile/Career'
import Tech from '../container/Profile/Tech'
import {
  profileTabStickyState,
  titleStickyState,
  /* containerWidthState,
  profileTabDirectionState, */
} from '../states'
/* import { profileTabVariants, profileTabs } from '../config' */

/* const swipeConfidenceThreshold = 100000
const swipePower = (offset, velocity) => Math.abs(offset) * velocity */

export default function Profile() {
  /* const containerWidth = useRecoilValue(containerWidthState) */
  const [, setTitleSticky] = useRecoilState(titleStickyState)
  const [, setProfileTabSticky] = useRecoilState(profileTabStickyState)
  /* const [direction, setDirection] = useRecoilState(profileTabDirectionState) */
  /* const paginate = useCallback(
    newDirection => {
      let tab
      if (profileTab + newDirection < 0) {
        tab = profileTabs.length - 1
      } else if (profileTab + newDirection > profileTabs.length - 1) {
        tab = 0
      } else {
        tab = profileTab + newDirection
      }
      setProfileTab(tab)
      setDirection(newDirection)
    },
    [profileTab]
  ) */

  useEffect(() => {
    setTitleSticky(true)
    setProfileTabSticky(true)
  }, [])

  return (
    <div className='pt-40'>
      {/* <AnimatePresence initial={false} custom={[direction, containerWidth]}>
      <motion.div
        className='min-h-screen pt-40'
        custom={[direction, containerWidth]}
        variants={profileTabVariants}
        initial='enter'
        animate='center'
        exit='exit'
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(_, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x)
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1)
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1)
          }
        }}> */}

      <Switch>
        <Redirect exact from='/profile' to='/profile/about' />
        <Route exact path='/profile/about' component={About} />
        <Route exact path='/profile/career' component={Career} />
        <Route exact path='/profile/strength' component={Strength} />
        <Route exact path='/profile/tech' component={Tech} />
      </Switch>
      {/* </motion.div>
    </AnimatePresence> */}
    </div>
  )
}
