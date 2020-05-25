import Link from 'next/link'

import { Wrapper, Workouts, Card, Title, Subtitle } from 'styles/pages/index'

export default ({ workouts }) => {
  return (
    <Workouts style={{ marginBottom: 64 }}>
      {(workouts || []).map((workout) => (
        <Link
          href={`/workouts/[workout]`}
          as={`/workouts/${workout.url}`}
          key={workout.id}
        >
          <Card height={workout.height} image={workout.image.url}>
            <Title>{workout.name}</Title>
            <Subtitle>{`${workout.exercices.length} exercises`}</Subtitle>
          </Card>
        </Link>
      ))}
    </Workouts>
  )
}
