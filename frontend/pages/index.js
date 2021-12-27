import NextImage from 'next/image'
import React from 'react'
import About from '../components/about'
import Layout from '../components/layout'
import Profile from '../components/profile'
import Language from '../components/language'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'

const Home = ({ articles, categories, homepage }) => {
  const profile = homepage.attributes.profile
  const landscape = homepage.attributes.landscape
  const logo = homepage.attributes.logo
  const language = homepage.attributes.language

  return (
    <Layout categories={categories} logo={logo}>
      <Seo seo={homepage.attributes.seo} />
      <div>
        <div className="uk-container uk-container-large title-container">
          <h1>{homepage.attributes.hero.title}</h1>{' '}
          <div className="svg-container">
            <NextImage
              className="profile-image"
              width={50}
              height={50}
              layout="responsive"
              quality={65}
              objectFit="cover"
              src={getStrapiMedia(landscape)}
              alt={landscape.alternativeText || ''}
            />
          </div>
        </div>
        <div className="profile-container">
          <Profile avatar={profile} />
        </div>
        <div className="profile-headline">
          <h2>Your Trusted Partner in Software Development</h2>
          <h3>
            I build beautiful, functional websites and applications for
            businesses because I love them.
          </h3>
        </div>
        <About />
        <div className="tech-container">
          <h2>Technology</h2>
        </div>
        <div>
          <Language language={language} />
        </div>

        <div className="work-container"></div>
        <div className="projects-container"></div>
        <div className="ed-container"></div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes, avatarRes] =
    await Promise.all([
      fetchAPI('/articles', { populate: '*' }),
      fetchAPI('/categories', { populate: '*' }),
      fetchAPI('/homepage', {
        populate: {
          hero: '*',
          seo: { populate: '*' },
          profile: '*',
          landscape: '*',
          logo: '*',
          language: { populate: '*' },
          frontend: { populate: '*' },
          backend: { populate: '*' },
        },
      }),
    ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
