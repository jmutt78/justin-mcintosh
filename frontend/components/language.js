import { getStrapiMedia } from '../lib/media'
import NextImage from 'next/image'

const Language = ({ language }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3>Languages</h3>
        <ul>
          {language.map(({ name, langImage }, index) => (
            <li key={index} className="indy-lang-wrapper">
              <div className="lang-image-container">
                <NextImage
                  //   className="profile-image"
                  width={50}
                  height={50}
                  layout="responsive"
                  quality={65}
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
export default Language
