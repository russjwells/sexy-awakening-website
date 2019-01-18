import React from 'react'
import Link from 'gatsby-link'
import logo from '../phoenix_red.svg'

const Header = ({ siteTitle }, { tagLine }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, display:'flex', alignContent:'center', alignItems: 'center', justifyContent:'space-around', flexDirection:'row' }}>
        <Link
          to="/"
          style={{
            color: '#e54560',
            textDecoration: 'none',
            display:'flex', alignContent:'center', alignItems: 'center', justifyContent:'space-around', flexDirection:'row'
          }}
        >
          <img src={logo} width="100" height="100" />
          {siteTitle} {tagLine}
        </Link>
      </h1>
      <h3>{tagLine}</h3>
    </div>
  </div>
)

export default Header
