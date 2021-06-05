import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import useMeasure from 'react-use-measure'
import Card from '../../components/Shared/UI/Card'
import { containerHeightState } from '../../states'

export default function Layout({ children }) {
  const [ref, { height }] = useMeasure()
  const [, setContainerHeight] = useRecoilState(containerHeightState)
  useEffect(() => {
    setContainerHeight(height)
  }, [height])
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
