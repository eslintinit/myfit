import Link from 'next/link'
import * as S from './Workouts.styled'

export default ({ workouts }) => (
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
)
