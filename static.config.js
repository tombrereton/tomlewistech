import path from 'path'
import axios from 'axios'

export default {
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    [
      require.resolve('react-static-plugin-favicons'),
      {
        inputFile: path.resolve('./src/data/favicon.png'),
        configuration: { icons: { appleStartup: false } }
      },
    ],
    [
      require.resolve("react-static-plugin-google-tag-manager"),
      {
        id: 'GTM-WGCWXB4',
        debug: false
      }
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-css-modules'),
  ],
}
