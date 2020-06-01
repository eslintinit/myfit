import * as S from 'styles/pages/review'
import { SOFT_ORANGE } from 'styles/colors'
import Amazon from 'public/icons/Amazon.svg'

export default () => {
  return (
    <div style={{ marginTop: 24 }}>
      <S.Content>
        <S.ContentTitle>
          We’re a small UK brand and your reviews help us a lot.
        </S.ContentTitle>
        <S.InfoNormal>
          We’d appreciate your feedback on our product. Below is a link to the
          Amazon review section for your orders. Every review helps us reach out
          to more fitness enthusiasts such as yourself!
        </S.InfoNormal>
        <a
          className="sc-fzozJi dteCCc"
          href="https://google.com"
          target="_blank"
          style={{
            textDecoration: 'none',
            background: SOFT_ORANGE,
            borderRadius: '8px',
            textDecoration: 'none',
            padding: '22px 56px 14px',
            marginTop: 10,
          }}
        >
          <Amazon />
        </a>
      </S.Content>
      {/*
        <S.SocialLinks>
          <S.SocialText>
            Join us in the resistance workout revolution.
          </S.SocialText>

          <a href="https://www.facebook.com/MyFitProducts/" target="_blank">
            <Facebook style={{ marginRight: '12px' }} />
          </a>
          <a href="https://twitter.com/myfitproducts" target="_blank">
            <Twitter style={{ marginRight: '12px' }} />
          </a>
          <a href="https://www.instagram.com/myfitproducts/" target="_blank">
            <Instagram />
          </a>
        </S.SocialLinks>
        */}
    </div>
  )
}
