import Container from 'components/blog/container'
import MoreStories from 'components/blog/more-stories'
import HeroPost from 'components/blog/hero-post'
import Intro from 'components/blog/intro'
import Layout from 'components/blog/layout'
import { getAllPostsForHome } from 'lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>MyFit Blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}
