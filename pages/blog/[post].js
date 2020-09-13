import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from 'components/blog/container'
import PostBody from 'components/blog/post-body'
import MoreStories from 'components/blog/more-stories'
import Header from 'components/blog/header'
import PostHeader from 'components/blog/post-header'
import SectionSeparator from 'components/blog/section-separator'
import Layout from 'components/blog/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api'
import PostTitle from 'components/blog/post-title'
import Head from 'next/head'
import markdownToHtml from 'lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | MyFit Blog</title>

                <meta name="description" content={post.content} />
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const content = await markdownToHtml(data?.post?.content || '')

  return {
    props: {
      preview,
      post: {
        ...data?.post,
        content,
      },
      morePosts: data?.morePosts ?? [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((post) => `/blog/${post.slug}`) || [],
    fallback: true,
  }
}
