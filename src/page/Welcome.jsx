import Cover from '../components/Shared/Cover'

export default function Welcome() {
  return (
    <>
      <Cover
        dense
        title='김용만'
        subTitle='프론트엔드 엔지니어'
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
