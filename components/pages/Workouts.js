import Link from 'next/link'
import { Element } from 'react-scroll'

import { Wrapper, Workouts, Card, Title, Subtitle } from 'styles/pages/index'

export default ({ workouts }) => {
  return (
    <Workouts style={{ marginBottom: 64 }} id="index-workouts">
      {(workouts || []).map((workout) => (
        <Link
          href={`/app/workouts/[workout]`}
          as={`/app/workouts/${workout.url}`}
          key={workout.id}
        >
          <Card
            height={workout.height}
            image={workout.image ? workout.image.url : null}
          >
            <Title>{workout.name}</Title>
            <Subtitle>{`${workout.exercices.length} exercises`}</Subtitle>
          </Card>
        </Link>
      ))}
    </Workouts>
  )
}
