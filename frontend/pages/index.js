import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'
import Profile from '../components/profile'

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.attributes.hero.title}</h1>
        </div>
        <div className="profile-container">
          <Profile avatar={homepage.attributes.profile} />
        </div>
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
