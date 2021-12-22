import { getStrapiMedia } from '../lib/media'
import NextImage from 'next/image'

const Profile = ({ avatar }) => {
  const { url, alternativeText, width, height } = avatar.data.attributes

  return (
    <NextImage
      className="profile-image"
      width={50}
      height={50}
      layout="responsive"
      quality={65}
      objectFit="cover"
      src={getStrapiMedia(avatar)}
      alt={alternativeText || ''}
    />
  )
}

export default Profile
