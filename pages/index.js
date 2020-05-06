import Link from 'next/link'
import Layout from 'components/Layout'
import { getWorkouts } from 'lib/api'
import { useRouter } from 'next/router'

import { useState } from 'react';

import Cookie from 'js-cookie';

import * as S from 'styles/pages/index'

export default ({ workouts }) => {

  

  const token = Cookie.get('token');
  
  if (typeof window !== 'undefined') {
  const router = useRouter();
  console.log("tut =" + token);
  if (!token) {
    router.push('/login');
  }
  
}
  
  return ( token ?
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
    </Layout> : <div>Loading...</div>
  )
}

export async function getStaticProps({ preview }) {
  
  const workouts = (await getWorkouts(preview)) || []
  
  return {
    props: { workouts },
    

  }
}
