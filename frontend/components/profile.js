import { getStrapiMedia } from '../lib/media'
import NextImage from 'next/image'

const Profile = ({ avatar }) => {
  const { url, alternativeText, width, height } = avatar.data.attributes

  return (
    <NextImage
      className="profile-image"
      // width={100}
      // height={100}
      layout="fill"
      quality={65}
      objectFit="cover"
      src={getStrapiMedia(avatar)}
      alt={alternativeText || ''}
    />
  )
}

export default Profile
