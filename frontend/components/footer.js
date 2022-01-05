import React from 'react'

// import  from './icon.svg'
// import Mail from './mail.svg'
// import Github from '../public/github.svg'
// import ProductHunt from '../public/product-hunt.svg'
// import Linkin from '../public/linkedin.svg'
// import Twitter from '../public/twitter.svg'

const Footer = () => {
  //   const social = [
  //     {
  //       image: <Mail />,
  //       url: 'mailto:justinmcintosh7897@gmail.com',
  //       alt: 'email icon',
  //     },
  //     {
  //       image: <Github />,
  //       url: 'https://github.com/jmutt78',
  //       alt: 'github icon',
  //     },
  //     {
  //       image: <ProductHunt />,
  //       url: 'https://www.producthunt.com/@justinmcintoshs',
  //       alt: 'product hunt icon',
  //     },
  //     {
  //       image: <Linkin />,
  //       url: 'https://www.linkedin.com/in/justin-mcintosh-45897833/',
  //       alt: 'Linkedin icon',
  //     },
  //     {
  //       image: <Twitter />,
  //       url: 'https://twitter.com/JustinMcIntoshs',
  //       alt: 'twitter icon',
  //     },
  //   ]

  return (
    <div>
      <div>
        <h2>Never Giving Up.</h2>
        <div>
          {/* {social.map(({ image, url, alt }) => (
            <div key={url}>
              <a href={url} alt={alt}>
                {image}
              </a>
            </div>
          ))} */}
        </div>
        <div>
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect
          </a>{' '}
          &{' '}
          <a
            href="https://www.flaticon.com/authors/photo3idea-studio"
            title="photo3idea_studio"
          >
            photo3idea_studio
          </a>{' '}
        </div>
      </div>
    </div>
  )
}

export default Footer
