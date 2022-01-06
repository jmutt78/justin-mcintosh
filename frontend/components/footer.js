import React from 'react'
import NextImage from 'next/image'
import { getStrapiMedia } from '../lib/media'

const Footer = ({ logo }) => {
  const social = [
    {
      image: (
        <NextImage
          // className="profile-image"
          width={50}
          height={50}
          layout="responsive"
          quality={65}
          objectFit="cover"
          src="/mail.svg"
          alt="email icon"
        />
      ),
      url: 'mailto:justinmcintosh7897@gmail.com',
      alt: 'email icon',
    },
    {
      image: (
        <NextImage
          // className="profile-image"
          width={50}
          height={50}
          layout="responsive"
          quality={65}
          objectFit="cover"
          src="/github.svg"
          alt="email icon"
        />
      ),
      url: 'https://github.com/jmutt78',
      alt: 'github icon',
    },
    {
      image: (
        <NextImage
          // className="profile-image"
          width={50}
          height={50}
          layout="responsive"
          quality={65}
          objectFit="cover"
          src="/product-hunt.svg"
          alt="email icon"
        />
      ),
      url: 'https://www.producthunt.com/@justinmcintoshs',
      alt: 'product hunt icon',
    },
    {
      image: (
        <NextImage
          // className="profile-image"
          width={50}
          height={50}
          layout="responsive"
          quality={65}
          objectFit="cover"
          src="/linkedin.svg"
          alt="email icon"
        />
      ),
      url: 'https://www.linkedin.com/in/justin-mcintosh-45897833/',
      alt: 'Linkedin icon',
    },
    {
      image: (
        <NextImage
          // className="profile-image"
          width={50}
          height={50}
          layout="responsive"
          quality={65}
          objectFit="cover"
          src="/twitter.svg"
          alt="email icon"
        />
      ),
      url: 'https://twitter.com/JustinMcIntoshs',
      alt: 'twitter icon',
    },
  ]

  return (
    <div className="footer-container">
      <div className="footers-wrapper">
        <div className="footer-image">
          <NextImage
            className="logo"
            width={30}
            height={30}
            layout="responsive"
            src={getStrapiMedia(logo)}
            alt={logo.alternativeText || ''}
          />
        </div>
        <h2>Never Giving Up.</h2>
        <div className="icon-link-container">
          {social.map(({ image, url, alt }) => (
            <div key={url} className="icon-wrapper">
              <a href={url} alt={alt}>
                {image}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
