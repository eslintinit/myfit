import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import gql from 'graphql-tag'
import Loader from 'react-loader-spinner'
import { useMutation } from '@apollo/react-hooks'
import markdownToHtml from 'lib/markdownToHtml'

import Cookie from 'js-cookie'

import { userFavorites } from 'components/context'

import Player from 'components/Player'

import Arrow from 'public/icons/Arrow.svg'
import Minus10 from 'public/icons/minus10.svg'
import Next from 'public/icons/Next.svg'
import Plus10 from 'public/icons/plus10.svg'
import Pause from 'public/icons/Pause.svg'
import Favorite from 'public/icons/Like-filled.svg'
import { BLACK, DARK_GREY, GREY, LIGHT_GREY, PRIMARY } from 'styles/colors'

import Back from 'public/icons/Back.svg'
import { getInstruction, getInstructions } from 'lib/api'

import * as S from 'styles/pages/exercise'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  height: 44px;
  position: fixed;
`

const Bg = styled.div`
  display: flex;
  flex-direction: column;
  background: ${BLACK};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-top: 24px;
  # position: fixed;
  # bottom: 128px;
  margin-top: -80px;
`

const VideoNavigation = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Timeline = styled.div`
  margin: 16px;
  font-weight: 600;
  font-size: 11px;
  line-height: 14px;
  color: ${DARK_GREY};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`

const Line = styled.div`
  height: 2px;
  width: 75vw;
  background: rgba(189, 189, 189, 0.35);
  border-radius: 8px;
  margin: 0px 4px;
`

const Label = styled.div`
  color: ${BLACK};
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
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

const Active = styled.div`
  height: 2px;
  width: 35%;
  background: ${PRIMARY};
  border-radius: 8px;
`

const Content = styled.div`
  width: 100vw;
  box-sizing: border-box;
  background: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 32px 16px;
  margin-top: -20px;
  # position: fixed;
  # bottom: 0;
  # margin-top: -115px;
`

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Name = styled.div`
  color: ${BLACK};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
`

const DetailedButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: #f8f8f8;
  border-radius: 8px;
  align-items: center;
  margin-left: 16px;
  width: calc(100% - 56px);
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
`

export default ({ instruction, url, content }) => {
  const [videoLoading, setLoading] = useState(true)
  const { back, push } = useRouter()

  const token = Cookie.get('token')

  useEffect(() => {
    window.scrollTo(0, 150)
  }, [])

  if (!instruction) return null

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {videoLoading && (
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
            top: 0,
            left: 0,
            zIndex: 100,
          }}
        >
          <Loader type="Oval" color="#FA4504" height={100} width={100} />
        </div>
      )}
      <Header style={{ zIndex: 2 }}>
        <Back onClick={back} />
      </Header>

      {instruction.video ? (
        <Player
          videoUrl={instruction.video}
          onReady={() => setLoading(false)}
        />
      ) : (
        <div style={{ marginTop: 48 }} />
      )}
      <Content
        style={{
          marginTop: 0,
        }}
      >
        <ContentHeader>
          <Name>{instruction.title}</Name>
          <S.Description
            style={{ width: '80%' }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </ContentHeader>
      </Content>
    </div>
  )
}

export async function getStaticProps({ params, preview }) {
  const url = +params.instruction
  const instruction = (await getInstruction(url, preview)) || {}
  const content = await markdownToHtml(instruction?.content || '')
  return {
    props: { instruction, content, url },
  }
}

export async function getStaticPaths() {
  const allInstructions = await getInstructions()

  return {
    paths:
      allInstructions?.map(
        (instruction) => `/app/instructions/${instruction.id}`,
      ) || [],
    fallback: true,
  }
}
