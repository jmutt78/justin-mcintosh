import { getStrapiMedia } from '../lib/media'
import NextImage from 'next/image'

const BoxContainer = ({ data, title }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{title}</h3>
        <ul>
          {data.map(({ name, langImage }, index) => (
            <li key={index} className="indy-card-wrapper">
              <div className="card-image-contianer">
                <NextImage
                  //   className="profile-image"
                  width={250}
                  height={250}
                  layout="responsive"
                  objectFit="cover"
                  src={getStrapiMedia(langImage)}
                  alt={langImage.data.alternativeText || ''}
                />
              </div>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default BoxContainer
