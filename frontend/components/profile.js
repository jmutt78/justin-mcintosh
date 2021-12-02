import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Profile = ({ avatar }) => {
  const { url, alternativeText, width, height } = avatar.data.attributes

  return (
    <NextImage
      layout="responsive"
      className="profile-image"
      width={25}
      height={25}
      objectFit="cover"
      src={getStrapiMedia(avatar)}
      alt={alternativeText || ""}
    />
  )
}

export default Profile
