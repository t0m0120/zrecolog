import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class UpdateInfo extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="UpdateInfo"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
          <h2>アップデート情報</h2>
          <h3>2019/11/07</h3>
          <p>AppStore初回審査</p>
      </Layout>
    )
  }
}

export default UpdateInfo

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
