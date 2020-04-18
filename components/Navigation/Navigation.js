import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './Navigation.styled'

export default function Navigation() {
  const { route } = useRouter()

  return (
    <S.Tabs>
      <Link href="/">
        <S.Tab active={route === '/'}>Workout</S.Tab>
      </Link>
      <Link href="/combos">
        <S.Tab active={route === '/combos'}>Combos</S.Tab>
      </Link>
      <Link href="/favorites">
        <S.Tab active={route === '/favorites'}>Favorites</S.Tab>
      </Link>
    </S.Tabs>
  )
}
