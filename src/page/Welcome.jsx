import Empty from '../components/Shared/UI/Empty'

export default function Welcome() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Empty msg='업데이트 예정' icon={['fat', 'traffic-cone']} />
    </div>
  )
}
