import { getStrapiMedia } from '../lib/media'
import NextImage from 'next/image'

const Project = ({ project: { title, image, body, url, stack, git } }) => {
  return (
    <div className="liner">
      <div className="project-wrapper">
        <div className="toolbar">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="image-container">
          <NextImage
            // className="profile-image"
            width={50}
            height={50}
            layout="responsive"
            quality={65}
            objectFit="cover"
            src={getStrapiMedia(image)}
            alt={image.alternativeText || ''}
          />
        </div>
      </div>
      <div className="project-info">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <p>{body}</p>
        <div className="stack-container">
          <p style={{ fontWeight: '600', marginRight: '5px' }}>Stack:</p>
          <p> {stack}</p>
        </div>
        {git && (
          <a
            href={git}
            className="git-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default Project
