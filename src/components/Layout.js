import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    console.log('this.props: ', this.props)
    let header

    header = (
      <header>
        <h1
          style={{
            marginBottom: 0,
            marginTop: 0,
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
        <a
          style={{ fontSize: 12, textDecoration: 'none' }}
          href={`https://twitter.com/t0m0120`}
        >
          @t0m0120
        </a>
      </header>
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        <div style={{ marginBottom: '1.75rem' }}>{children}</div>
        <footer style={{ textAlign: 'center' }}>
          © {new Date().getFullYear()},{` `}
          <a href="https://www.twitter.com/t0m0120">t0m0120</a>
        </footer>
      </div>
    )
  }
}

export default Layout
