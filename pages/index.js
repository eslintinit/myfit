import Link from 'next/link'
import Layout from 'components/Layout'
import { getWorkouts } from 'lib/api'

import * as S from 'styles/pages/index'

export default ({ workouts }) => {
  return (
    <Layout>
      <S.Workouts>
        {(workouts || []).map((workout) => (
          <Link
            href={`/workouts/[workout]`}
            as={`/workouts/${workout.url}`}
            key={workout.id}
          >
            <S.Card image={workout.image.url}>
              <S.Title>{workout.name}</S.Title>
              <S.Subtitle>{`${workout.exercices.length} exercises`}</S.Subtitle>
            </S.Card>
          </Link>
        ))}
      </S.Workouts>
    </Layout>
  )
}

export async function getStaticProps({ preview }) {
  const workouts = (await getWorkouts(preview)) || []
  return {
    props: { workouts },
  }
}
