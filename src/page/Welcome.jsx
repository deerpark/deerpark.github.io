import Cover from '../components/Shared/Cover'

export default function Welcome() {
  return (
    <>
      <Cover
        dense
        title='김용만'
        subTitle='디자인 / 개발'
        icon={
          <>
            <img className='profile-image-dark' src='/profile-image-dark.png' alt='' width='205' />
            <img className='profile-image-light' src='/profile-image.png' alt='' width='205' />
          </>
        }
      />
    </>
  )
}
