import Layout from 'components/Layout'
import { getWorkouts } from 'lib/api'
import Workouts from 'components/Workouts'

export default ({ workouts }) => {
  return (
    <Layout>
      <Workouts workouts={workouts} />
    </Layout>
  )
}

export async function getStaticProps({ preview }) {
  const workouts = (await getWorkouts(preview)) || []
  return {
    props: { workouts },
  }
}
