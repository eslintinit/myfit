import Link from 'next/link'
import Layout from 'components/Layout'
import { getWorkouts } from 'lib/api'
import { useRouter } from 'next/router'

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
};
  
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
  /* const cookies = parseCookies(ctx);
  console.log("cookies on page = ", cookies); */
  return {
    props: { workouts },
    //token: cookies.token

  }
}
