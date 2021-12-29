import NextImage from 'next/image'
import React from 'react'
import About from '../components/about'
import Layout from '../components/layout'
import Profile from '../components/profile'
import BoxContainer from '../components/BoxContainer'
import Resume from '../components/resume'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia } from '../lib/media'

const Home = ({ articles, categories, homepage }) => {
  const profile = homepage.attributes.profile
  const landscape = homepage.attributes.landscape
  const logo = homepage.attributes.logo
  const language = homepage.attributes.language
  const frontend = homepage.attributes.frontend
  const backend = homepage.attributes.backend
  const work = homepage.attributes.work

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
          <h2>Full-Stack Software Engineer</h2>
          <h3>Always Be Learning</h3>
        </div>
        <About />
        <div className="title-container">
          <h2>Experience</h2>
        </div>
        <div className="tech-column">
          <BoxContainer data={language} title="Language" />
          <BoxContainer data={frontend} title="Frontend" />
          <BoxContainer data={backend} title="Backend - DB - Cloud" />
        </div>

        <div className="work-container">
          <Resume work={work} />
        </div>
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
          work: { populate: '*' },
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
