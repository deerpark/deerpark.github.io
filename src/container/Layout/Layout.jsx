import Card from '../../components/Shared/UI/Card'

export default function Layout({ children }) {
  return (
    <div className='layout w-full h-full relative base:p-7 base:flex base:justify-center base:items-center'>
      <div className='fixed z-0 bg-white dark:bg-black inset-0 bottom-1/2 base:hidden' />
      <Card
        className='card w-full h-full relative base:min-w-sm base:max-w-sm base:max-h-md flex flex-col items-stretch gap-0'
        p='p-0'>
        {children}
      </Card>
    </div>
  )
}
