import { useEffect, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import useMeasure from 'react-use-measure'
import Card from '../../components/Shared/UI/Card'
import { containerHeightState, containerWidthState } from '../../states'

export default function Layout({ children }) {
  const [ref, { height, width }] = useMeasure()
  const [, setContainerHeight] = useRecoilState(containerHeightState)
  const [, setContainerWidth] = useRecoilState(containerWidthState)
  const init = useCallback(() => {
    setContainerHeight(height)
    setContainerWidth(width)
  }, [height, width])
  useEffect(() => {
    init()
    window.addEventListener('resize', init)
  }, [height, width])
  return (
    <div className='layout w-full h-full relative base:p-7 base:flex base:justify-center base:items-center'>
      <div className='fixed z-0 bg-white dark:bg-black inset-0 bottom-1/2 base:hidden' />
      <Card
        ref={ref}
        className='card w-full h-full relative base:min-w-sm base:max-w-sm base:max-h-md flex flex-col items-stretch gap-0'
        p='p-0'>
        {children}
      </Card>
    </div>
  )
}
