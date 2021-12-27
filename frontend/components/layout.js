import Nav from './nav'

const Layout = ({ children, categories, seo, logo }) => (
  <>
    <Nav categories={categories} logo={logo} />
    {children}
  </>
)

export default Layout
