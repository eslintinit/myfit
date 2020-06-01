import 'isomorphic-unfetch'

const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.DATOCMS_API_TOKEN

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
    // throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getWorkouts(preview) {
  const data = await fetchAPI(
    `
    {
      allWorkouts(orderBy: order_ASC) {
        id
        name
        image {
          url
        }
        url
        exercices {
          id
        }
        height
      }
    }
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
        time
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
        time
        url
        image {
          url
        }
        benefits {
          name
        }
        exercices {
          name
          time
          description
          url
          image {
            url
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
        video {
          url
          providerUid
        }
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
        time
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
