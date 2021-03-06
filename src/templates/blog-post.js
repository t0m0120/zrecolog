import React from 'react'
import { Link, graphql } from 'gatsby'
const _ = require('lodash')

import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          thumbnail={post.frontmatter.thumbnail}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: `block`,
          }}
        >
          {post.frontmatter.date}
        </p>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          {post.frontmatter.tags.map(tag => {
            return (
              <Link
                to={`/tags/${_.toLower(tag)}`}
                className="post-tag"
                key={tag}
              >
                {tag}
              </Link>
            )
          })}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="markdown-body"
        />
        <hr style={{}} />
{/* 
        <p
          style={{ width: '100%', paddingBottom: '20px', textAlign: 'center' }}
        >
          記事を見て
          <a
            style={{ textDecoration: 'underline' }}
            href="https://kyash.me/payments/fMoT9LtD7x8X3nuRgkMmmGP1oGVL"
          >
            Kyash
          </a>
          から眠気覚ましのコーヒー代投げ銭してもらえると喜びます！
        </p> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}></div>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
