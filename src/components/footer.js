import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: '#e54560',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <p style={{color:'white'}}>Sexy Awakening &copy; 2019 | &nbsp;
      <Link to="/guidelines/" style={{color:'white', textDecoration:'none'}}>Guidelines</Link> | &nbsp;
      <Link to="/privacy-policy/" style={{color:'white', textDecoration:'none'}}>Privacy Policy</Link> | &nbsp;
      <Link to="/terms-of-service/" style={{color:'white', textDecoration:'none'}}>Terms of Service</Link> | &nbsp;
      <Link to="/careers/" style={{color:'white', textDecoration:'none'}}>Careers</Link> | &nbsp;
      <Link to="/contact/" style={{color:'white', textDecoration:'none'}}>Contact</Link> &nbsp;
      <br /><br />
      <a href="https://www.instagram.com/sexyawakening/" style={{color:'white', textDecoration:'none'}}>Instagram</a> | &nbsp;
      <a href="https://www.facebook.com/SxxyAwakening/" style={{color:'white', textDecoration:'none'}}>Facebook</a> &nbsp;
      </p>
    </div>
  </div>
)

export default Footer
