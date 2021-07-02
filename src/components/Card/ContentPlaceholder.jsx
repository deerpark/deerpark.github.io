/* eslint-disable import/prefer-default-export */
import * as React from 'react'
import { motion } from 'framer-motion'
import { Empty } from '../Shared/UI'
import { MicroInteraction, UxMotion } from '../../container/UX'
import { AntmanDesign, Portfolio } from '../../container/Design'
import { Antman, LiveCommerce, Datadive, LezhinRank, LezhinComics, TapSonic, Pmang } from '../../container/Dev'

const Contens = {
  '/ux/micro-interaction': <MicroInteraction />,
  '/ux/motion': <UxMotion />,
  '/dev/antman': <Antman />,
  '/dev/livecommerce': <LiveCommerce />,
  '/dev/datadive': <Datadive />,
  '/dev/lezhin-rank': <LezhinRank />,
  '/dev/lezhin': <LezhinComics />,
  '/dev/tapsonic': <TapSonic />,
  '/dev/pmang': <Pmang />,
  '/design/antman': <AntmanDesign />,
  '/design/portfolio': <Portfolio />,
}

export const ContentPlaceholder = React.memo(({ id }) => (
  <motion.div layout className='content-container' style={{ originY: 0, originX: 0 }}>
    {Contens[id] ? Contens[id] : <Empty className='py-20' msg='데이터가 없습니다.' spin icon={['fat', 'empty-set']} />}
  </motion.div>
))
