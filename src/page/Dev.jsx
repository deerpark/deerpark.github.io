import { HashRouter as Router, Route } from 'react-router-dom'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Card } from '../components/Card'
import { parentVariants, slideUpXDelayedVariants } from '../config'

const cardData = [
  // Photo by ivan Torres on Unsplash
  {
    id: '/dev/c',
    category: 'Pizza',
    title: '5 Food Apps Delivering the Best of Your City',
    pointOfInterest: 80,
    backgroundColor: '#814A0E',
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: '/dev/f',
    category: 'How to',
    title: 'Arrange Your Apple Devices for the Gram',
    pointOfInterest: 120,
    backgroundColor: '#959684',
  },
]

const List = ({ match, history }) => {
  console.log(match)
  return (
    <ul className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-7 mx-7'>
      {cardData.map(card => (
        <Card key={card.id} isSelected={match.url === card.id} history={history} {...card} />
      ))}
    </ul>
  )
}

export default function Dev() {
  return (
    <div className='scroll-contents flex-grow flex-shrink pt-7 overflow-x-hidden overflow-y-auto'>
      <Router>
        <Route path={['/dev/:id', '/dev']} component={List} />
      </Router>
      <InView>
        {({ inView, ref }) => (
          <motion.ul
            className='px-7 pb-7 grid grid-flow-rows place-items-center grid-cols-1 sm:grid-cols-2 auto-rows-max gap-7'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={parentVariants}>
            <motion.li variants={slideUpXDelayedVariants}>
              <a
                className='flex h-72 sm:h-52 justify-center transform transition-all duration-500 active:scale-95 hover:scale-105 rounded-3xl shadow-3xl overflow-hidden'
                href='https://www.antman.kr'
                target='_blank'>
                <img
                  src='/images/antman.png'
                  alt=''
                  className='w-full h-full rounded-3xl overflow-hidden object-cover'
                />
              </a>
            </motion.li>
            <motion.li variants={slideUpXDelayedVariants}>
              <motion.a
                className='flex h-72 sm:h-52 justify-center transform transition-all duration-500 active:scale-95 hover:scale-105 rounded-3xl shadow-3xl overflow-hidden'
                href='https://dev.datadive.ai/live'
                target='_blank'>
                <img src='/images/live.png' alt='' className='w-full h-full rounded-3xl overflow-hidden object-cover' />
              </motion.a>
            </motion.li>
          </motion.ul>
        )}
      </InView>
    </div>
  )
}
