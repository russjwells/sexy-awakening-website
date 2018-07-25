import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: '#e54560',
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
      <p>Sexy Awakening &copy; 2018 | &nbsp;
      <Link to="/guidelines/">Guidelines</Link> | &nbsp;
      <Link to="/privacy-policy/">Privacy Policy</Link> | &nbsp;
      <Link to="/terms-of-service/">Terms of Service</Link> | &nbsp;
      <Link to="/careers/">Careers</Link>
      </p>
    </div>
  </div>
)

export default Footer
