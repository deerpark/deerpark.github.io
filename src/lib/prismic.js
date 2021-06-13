import Prismic from '@prismicio/client'
/* import { Date, Link, RichText } from 'prismic-reactjs' */

const apiEndpoint = 'https://deerpark-github-io.cdn.prismic.io/api/v2'
const accessToken = process.env.REACT_APP_ACCESS_TOKEN // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

export default Client
