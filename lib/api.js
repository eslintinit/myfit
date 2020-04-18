import 'isomorphic-unfetch'

const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN

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

export async function getWorkoutSections(preview) {
  const data = await fetchAPI(
    `
    {
      allWorkoutsections {
        id
        name
        url
        image {
          id
          url
        }
      }
    }
  `,
    { preview }
  )
  return data?.allWorkoutsections
}

export async function getSection(url, preview) {
  console.log('url')
  console.log(url)
  const data = await fetchAPI(
    `
    query SectionByUrl($url: String){
      workoutsection(filter: {
        url: { eq: $url}
      }) {
        name
        id
        workouts {
          id
          name
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
    }
  )

  return data?.workoutsection
}

export async function getAllWorkouts(preview) {
  const data = await fetchAPI(
    `
    {
      allWorkouts {
        id
        name
        url
      }
    }
  `,
    { preview }
  )
  return data?.allWorkouts
}

export async function getWorkout(url, preview) {
  const data = await fetchAPI(
    `
    query WorkoutByUrl($url: String){
      workout(filter: {
        url: { eq: $url}
      }) {
        id
        name
        content
      }
    }
  `,
    { 
      preview,
      variables: {
        url,
      },
    }
  )

  return data?.workout
}
