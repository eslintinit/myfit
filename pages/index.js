import { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { getWorkouts } from 'lib/api'
import Link from 'next/link'

import { Wrapper, Workouts, Card, Title, Subtitle } from 'styles/pages/index'

const FadeIn = ({ duration = 1000, delay = 0, children, ...delegated }) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
    >
      {children}
    </Wrapper>
  )
}

export default ({ workouts }) => {
  const [show, set] = useState(true)
  const transitions = useTransition(show, null, {
    from: { opacity: 0, marginTop: 300 },
    enter: { opacity: 1, marginTop: 0 },
    leave: { opacity: 0, marginTop: -300 },
  })
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <Workouts>
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
        </animated.div>
      ),
  )
  return (
    <FadeIn>
      <Workouts>
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
    </FadeIn>
  )
}

export async function getStaticProps({ preview }) {
  const workouts = (await getWorkouts(preview)) || []
  return {
    props: { workouts },
  }
}
