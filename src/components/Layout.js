import React from 'react'
import { Link } from 'gatsby'
import Ad from '../components/ad'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

    header = (
      <header>
        <h1
          style={{
            marginBottom: 0,
            marginTop: 20,
            fontSize: 16,
            fontWeight: 'normal',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <Link
          style={{ fontSize: 12, textDecoration: 'none' }}
            to={`/about`}
          >
          @t0m0120
        </Link>
      </header>
    )
    return (
      <div
        style={{
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        {header}
        <div style={{ marginTop: '1.75rem', marginBottom: '1.75rem' }}>
          {children}
        </div>
        <Ad />
        <footer style={{ textAlign: 'center', fontSize: '12px', marginBottom: '20px' }}>
          © {new Date().getFullYear()},{` `}
          <a href="https://www.twitter.com/t0m0120">t0m0120</a>
        </footer>
        {/* <Ad/> */}
      </div>
    )
  }
}

export default Layout
