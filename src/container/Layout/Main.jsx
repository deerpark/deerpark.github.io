import { Switch, Route } from 'react-router-dom'
import RSC from 'react-scrollbars-custom'
import Profile from '../../page/Profile'
import UX from '../../page/UX'
import Dev from '../../page/Dev'
import Design from '../../page/Design'
import Welcome from '../../page/Welcome'

function Content() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Welcome>Welcome!</Welcome>
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/ux'>
          <UX />
        </Route>
        <Route exact path='/dev'>
          <Dev />
        </Route>
        <Route exact path='/design'>
          <Design />
        </Route>
      </Switch>
    </>
  )
}

const wrapperProps = {
  renderer: props => {
    const { elementRef, ...restProps } = props
    return (
      <div
        {...restProps}
        ref={elementRef}
        className='MyAwesomeScrollbarsWrapper'
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
        }}
      />
    )
  },
}

const trackYProps = {
  renderer: props => {
    const { elementRef, ...restProps } = props
    return (
      <div
        {...restProps}
        ref={elementRef}
        className='trackY bg-transparent flex justify-center'
        style={{
          top: 'calc(92px + env(safe-area-inset-top) * 0.8)',
          height: 'calc(100% - 96px - env(safe-area-inset-top) * 0.8)',
          position: 'absolute',
          overflow: 'hidden',
          borderRadius: 4,
          userSelect: 'none',
          width: 10,
          right: 0,
        }}
      />
    )
  },
}

const thumbYProps = {
  renderer: props => {
    const { elementRef, ...restProps } = props
    return (
      <div
        {...restProps}
        ref={elementRef}
        className='tHuMbY bg-black dark:bg-white bg-opacity-10'
        style={{
          cursor: 'pointer',
          borderRadius: 4,
          width: 5,
        }}
      />
    )
  },
}

/* const IDLE_MAX_Y = 312 */

export default function Main() {
  return (
    <RSC
      /* onScroll={onScroll} */
      className='flex-grow flex-shrink'
      wrapperProps={wrapperProps}
      trackYProps={trackYProps}
      thumbYProps={thumbYProps}
      noScrollX>
      <Content />
    </RSC>
  )
}
