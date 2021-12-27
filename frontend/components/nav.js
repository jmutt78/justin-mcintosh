import React from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { getStrapiMedia } from '../lib/media'

const Nav = ({ categories, logo }) => {
  return (
    <div>
      <nav className="uk-navbar-container uk-navbar">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <div className="logo-container">
                  <NextImage
                    className="logo"
                    width={30}
                    height={30}
                    layout="responsive"
                    src={getStrapiMedia(logo)}
                    alt={logo.alternativeText || ''}
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
