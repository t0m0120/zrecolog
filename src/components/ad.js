import React from 'react'
import AdSense from 'react-adsense'

const Ad = () => (
  <div>
    <AdSense.Google
      style={{ display: 'block' }}
      client="ca-pub-5441589109590198"
      slot="8340132633"
      format="auto"
      responsive="true"
    />
  </div>
)
export default Ad
