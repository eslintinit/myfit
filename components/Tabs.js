import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from 'styles/components/Tabs'

export default function Tabs({ setShowSidebar }) {
  const { route } = useRouter()

  return (
    <S.Tabs>
      <Link href="/">
        <S.Tab active={route === '/'} onClick={() => setShowSidebar(false)}>
          Workout
        </S.Tab>
      </Link>
      <Link href="/combos">
        <S.Tab
          active={route === '/combos'}
          onClick={() => setShowSidebar(false)}
        >
          Combos
        </S.Tab>
      </Link>
      <Link href="/favorites">
        <S.Tab
          active={route === '/favorites'}
          onClick={() => setShowSidebar(false)}
        >
          Favorites
        </S.Tab>
      </Link>
    </S.Tabs>
  )
}
