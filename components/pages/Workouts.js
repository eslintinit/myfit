import Link from 'next/link'
import { Element } from 'react-scroll'
import { Image } from 'react-datocms'

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
            style={{
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              data={workout.image.responsiveImage}
              className="workout-image"
              style={{
                position: 'absolute',
                zIndex: -1,
                // margin: '-16px -12px',
                width: '100%',
                height: '100%',
                // height: workout.height,
                objectFit: 'cover',
                top: 0,
                left: 0,
              }}
              pictureStyle={{
                width: '100%',
                position: 'absolute',
                // height: '100%',
                objectFit: 'cover',
                height: workout.height + 32,
              }}
            />
            <Title>{workout.name}</Title>
            <Subtitle>{`${workout.exercices.length} exercises`}</Subtitle>
          </Card>
        </Link>
      ))}
    </Workouts>
  )
}
