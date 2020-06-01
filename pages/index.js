import { getWorkouts } from 'lib/api'
import { getCombos } from 'lib/api'

import Workouts from 'components/pages/Workouts'
/* import Combos from 'components/pages/Combos'
import Favorites from 'components/pages/Favorites' */

export default ({ workouts, combos }) => {
  return (
    <div>
      <Workouts workouts={workouts} />
      {/* <Combos combos={combos} /> */}
    </div>
  )
}

export async function getStaticProps({ preview }) {
  const workouts = (await getWorkouts(preview)) || []
 /*  const combos = (await getCombos(preview)) || []
 */
  return {
    props: { workouts/* , combos  */},
  }
}
