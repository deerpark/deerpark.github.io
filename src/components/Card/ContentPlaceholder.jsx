/* eslint-disable import/prefer-default-export */
import { memo } from 'react'
import { Empty } from '../Shared/UI'
import { MicroInteraction, UxMotion } from '../../container/UX'
import { AntmanDesign, Portfolio } from '../../container/Design'
import { Antman, LiveCommerce, Datadive, LezhinRank, LezhinComics, TapSonic, Pmang, BoltUx } from '../../container/Dev'

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
  '/dev/boltux': <BoltUx />,
  '/design/antman': <AntmanDesign />,
  '/design/portfolio': <Portfolio />,
  '/design/boltux': <BoltUx />,
}

export const ContentPlaceholder = memo(({ id }) => (
  <div className=''>
    {Contens[id] ? Contens[id] : <Empty className='py-20' msg='데이터가 없습니다.' spin icon={['fat', 'empty-set']} />}
  </div>
))
