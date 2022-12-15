import AllPosts from '../components/AllPosts'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import Container from '../components/Container'
import Header from '../components/Header'
import { WEBSITE_NAME } from '../lib/constants'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
      <Layout>
        <Head>
          <title>{WEBSITE_NAME}</title>
        </Head>
        <Container>
        <Header />
          {allPosts.length > 0 && <AllPosts posts={allPosts} />}
        </Container>
      </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
