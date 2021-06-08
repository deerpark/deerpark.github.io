import { useMemo } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import RSC from 'react-scrollbars-custom'
import Profile from '../../page/Profile'
import UX from '../../page/UX'
import Dev from '../../page/Dev'
import Design from '../../page/Design'
import Welcome from '../../page/Welcome'
import { profileTabStickyState } from '../../states'

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

const thumbYProps = {
  renderer: props => {
    const { elementRef, ...restProps } = props
    return (
      <div
        {...restProps}
        ref={elementRef}
        className='tHuMbY bg-black dark:bg-white bg-opacity-10'
        style={{
          display: 'none',
        }}
      />
    )
  },
}

export default function Main() {
  const profileTabSticky = useRecoilValue(profileTabStickyState)
  const trackYProps = useMemo(
    () => ({
      renderer: props => {
        const { elementRef, ...restProps } = props
        return (
          <div
            {...restProps}
            ref={elementRef}
            className='trackY bg-transparent flex justify-center'
            style={{
              display: 'none',
            }}
          />
        )
      },
    }),
    [profileTabSticky]
  )

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
