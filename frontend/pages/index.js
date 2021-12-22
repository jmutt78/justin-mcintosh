import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import About from '../components/about'
import { fetchAPI } from '../lib/api'
import Profile from '../components/profile'
import NextImage from 'next/image'
import { getStrapiMedia } from '../lib/media'

const Home = ({ articles, categories, homepage }) => {
  const profile = homepage.attributes.profile
  const landscape = homepage.attributes.landscape

  return (
    <Layout categories={categories}>
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
          profile: { populate: '*' },
          landscape: { populate: '*' },
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
