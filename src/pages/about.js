import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const profiles = ['t0m0120','25year','tokyo','Engineer']
    const skills = ['React','ReactNative','Vue','PHP', 'Firebase', 'CI/Automation', 'AppMarketing']
    const jobs = ['AutoScale,Inc. Now!', 'Asoview 5months', 'Wapon 1.2year', 'Manufacturing control 3year']
    const links = [
      {name:'Github', url:'https://github.com/t0m0120'},
      {name:'Twitter', url:'https://twitter.com/t0m0120'},
      {name:'Facebook', url: 'https://www.facebook.com/H1ghwes'},
      {name:'Wantedly', url:'https://zh-hk.wantedly.com/users/56052431'},
      {name:'Speekerdeck', url:'https://speakerdeck.com/t0m0120'}
    ]
    const lts = [
      {name:'ReactNativeアプリをBitrise上でUITestしてみた話', url: 'https://speakerdeck.com/t0m0120/reactnativeapuriwobitriseshang-deuitestsitemitahua'},
      {name: 'ReactNativeTokyo#6 パネルディスカッション', url: 'https://r-n.connpass.com/event/141558/'},
      {name:'React製WebサービスをReactNativeでアプリ化した話', url: 'https://speakerdeck.com/t0m0120/reactzhi-websabisuworeactnativedeapurihua-sitahua'},
      {name:'つらみを抑えるReactNative', url: 'https://www.slideshare.net/t0m0120/reactnative-106277459'}
    ]
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>About</h1>
        
        <h2>Profile</h2>
        <ul>
          {profiles.map(p => <li>{p}</li>)}
        </ul>

        <h2>Skill</h2>
        <ul>
          {skills.map(skill => <li>{skill}</li>)}
        </ul>

        <h2>Job</h2>
        <ul>
          {jobs.map(job => <li>{job}</li>)}
        </ul>
        
        <h2>SNS</h2>
        <ul>
          {links.map(link =>
            <li><a href={link.url} target="_blank">{link.name}</a></li>
          )}
        </ul>
        
        <h2>Lightning Talk</h2>
        <ul>
          {lts.map(lt =>
            <li><a href={lt.url} target="_blank">{lt.name}</a></li>
          )}
        </ul>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
