import Link from 'next/link'
import { useRouter } from 'next/router'
import { getWorkout, getWorkouts } from 'lib/api'
import styled from 'styled-components'
import Back from 'public/icons/Back.svg'
import Favorite from 'public/icons/Like-filled.svg'
import Time from 'public/icons/Time.svg'
import TimeSmall from 'public/icons/Time-small.svg'
import { BLACK, DARK_GREY, GREY } from 'styles/colors'

const Container = styled.div`
  padding: 14px 16px;
  background: #fcfcfc;
  height: 100vh;
  box-sizing: border-box;
  background-image: url(${(props) =>
    props.image === 'https://www.datocms-assets.com/26095/1587178652-mask-1.png'
      ? 'https://i.imgur.com/SPewObX.png'
      : props.image});

  background-size: ${(props) =>
    props.image === 'https://www.datocms-assets.com/26095/1587178652-mask-1.png'
      ? 'cover'
      : 'contain'};
`

const Content = styled.div`
  background: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 32px 16px;
  margin-top: 434px;
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 44px;
`

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.div`
  color: ${BLACK};
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
`
const InfoBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const WorkoutTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${BLACK};
  font-size: 14px;
  margin-right: 24px;
`
const NumberOfExercises = styled.div`
  color: ${DARK_GREY};
  font-size: 14px;
`

const Label = styled.div`
  color: ${BLACK};
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`

const Benefits = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 32px;
`
const Benefit = styled.div`
  font-size: 12px;
  color: ${DARK_GREY};
  border: 1.5px solid #f8f8f8;
  border-radius: 8px;
  padding: 6px 12px;
  margin-right: 8px;
  margin-bottom: 8px;
`

const Exercises = styled.div``
const Exercise = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
`
const ExerciseImage = styled.img`
  width: 80px;
  height: 80px;

  min-width: 80px;
  min-height: 80px;
  margin-right: 16px;
  object-fit: cover;
  border-radius: 8px;
`
const ExerciseInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const ExerciseName = styled.div`
  color: ${BLACK};
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
`
const ExerciseTime = styled.div`
  display: flex;
  flex-direction: row;
  color: ${DARK_GREY};
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`
const ExerciseDescription = styled.div`
  color: ${DARK_GREY};
  font-size: 12px;
  line-height: 16px;
  width: 82%;
`

export default ({ workout }) => {
  const { back } = useRouter()

  if (!workout) return null

  console.log(workout.image.url)
  return (
    <Container image={workout.image.url}>
      <Header>
        <Back onClick={back} />
      </Header>

      <Content>
        <ContentHeader>
          <Info>
            <Name>{`${workout.name} Workout`}</Name>
            <InfoBottom>
              <WorkoutTime>
                <Time style={{ marginRight: 4 }} />
                {workout.time}
              </WorkoutTime>
              <NumberOfExercises>{workout.time}</NumberOfExercises>
            </InfoBottom>
          </Info>
          <Favorite />
        </ContentHeader>

        <Label>Benefits</Label>
        <Benefits>
          {workout.benefits.map((benefit) => (
            <Benefit>{benefit.name}</Benefit>
          ))}
        </Benefits>

        <Label>Exercises</Label>
        <Exercises>
          {workout.exercices.map((exercise) => (
            <Link
              href={`/workouts/[workout]/[exercise]`}
              as={`/workouts/${workout.url}/${exercise.url}`}
            >
              <Exercise>
                <ExerciseImage src={exercise.image.url} />
                <ExerciseInfo>
                  <ExerciseName>{exercise.name}</ExerciseName>
                  <ExerciseTime>
                    <TimeSmall style={{ marginRight: 6 }} />
                    {exercise.time}
                  </ExerciseTime>
                  <ExerciseDescription>
                    {exercise.description}
                  </ExerciseDescription>
                </ExerciseInfo>
              </Exercise>
            </Link>
          ))}
        </Exercises>
      </Content>
    </Container>
  )
}

export async function getStaticProps({ params, preview }) {
  const workout = (await getWorkout(params.workout, preview)) || {}

  return {
    props: { workout },
  }
}

export async function getStaticPaths() {
  const allWorkouts = await getWorkouts()
  return {
    paths: allWorkouts?.map((workout) => `/workouts/${workout.url}`) || [],
    fallback: true,
  }
}
