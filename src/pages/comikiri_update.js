import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class PrivacyPolicy extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="PrivacyPolicy"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
                    <h2>2019.11.07</h2>
                    <p>AppStore初回審査</p>
      </Layout>
    )
  }
}

export default PrivacyPolicy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
