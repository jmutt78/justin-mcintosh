import React from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import { getStrapiMedia } from '../lib/media'

const Nav = ({ categories }) => {
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
                    src="/logo.svg"
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
