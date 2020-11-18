import 'isomorphic-unfetch'

const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.DATOCMS_API_TOKEN

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    },
  )
  return data?.post
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      allPosts {
        slug
      }
    }
  `)
  return data?.allPosts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      allPosts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
          }
        }
      }
    }

    ${responsiveImageFragment}
  `,
    { preview },
  )
  return data?.allPosts
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }

    morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }
  }

  ${responsiveImageFragment}
  `,
    {
      preview,
      variables: {
        slug,
      },
    },
  )
  return data
}

export async function getWorkouts(preview) {
  const data = await fetchAPI(
    `
    {
      allWorkouts(orderBy: order_ASC) {
        id
        name
        image {
          url(imgixParams: {fm: jpg, h: 304})
          responsiveImage(imgixParams: {fm: jpg, h: 224 }) {
            ...responsiveImageFragment
          }
        }
        url
        exercices {
          id
        }
        height
      }
    }
  ${responsiveImageFragment}
  `,
    { preview },
  )

  return data?.allWorkouts
}

export async function getCombos(preview) {
  const data = await fetchAPI(
    `
    {
      allCombos(orderBy: order_ASC) {
        id
        name
        url
        image {
          url
        }
      }
    }
  `,
    { preview },
  )

  return data?.allCombos
}

export async function getWorkout(url, preview) {
  const data = await fetchAPI(
    `
    query WorkoutByUrl($url: String){
      workout(filter: {
        url: { eq: $url}
      }) {
        name
        url
        image {
          url(imgixParams: {fm: jpg, w: 600, fit: crop })
        }
        benefits {
          name
        }
        exercices {
          name
          description
          url
          image {
            url(imgixParams: {fm: jpg, w: 100, fit: crop })
          }
        }
      }
    }
  `,
    {
      preview,
      variables: {
        url,
      },
    },
  )

  return data?.workout
}

export async function getExercise(url, preview) {
  const data = await fetchAPI(
    `
    query ExerciseByUrl($url: String){
      exercise(filter: {
        url: { eq: $url}
      }) {
        name
        description
        benefits {
          name
        }
        video
        content {
          id
          tip
        }
      }
    }
  `,
    {
      preview,
      variables: {
        url,
      },
    },
  )

  return data?.exercise
}

export async function getExercises(url, preview) {
  const data = await fetchAPI(
    `
    {
      allExercises {
        url
        workout {
          url
        }
      }
    }
  `,
    {
      preview,
      variables: {
        url,
      },
    },
  )

  return data?.allExercises
}

export async function getFavoriteExercises(urls) {
  const data = await fetchAPI(
    `
    {
      allExercises(filter: {
        url: { in: ["${urls.join('", "')}"] }
      }) {
        name
        url
        workout {
          name
          url
        }
        image {
          url
        }
      }
    }
  `,
  )

  return data?.allExercises
}

export async function getInstructions(preview) {
  const data = await fetchAPI(
    `
    {
      allInstructions {
        id
        title
        content
        video
      }
    }
  `,
    { preview },
  )

  return data?.allInstructions
}

export async function getInstruction(id, preview) {
  const data = await fetchAPI(
    `
    query InstructionByUrl($id: ItemId){
      instruction(filter: {
        id: { eq: $id }
      }) {
        id
        title
        content
        video
      }
    }
  `,
    {
      preview,
      variables: {
        id: +id,
      },
    },
  )

  return data?.instruction
}
