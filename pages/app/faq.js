import Link from 'next/link'
import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/Arrow.svg'

import * as S from 'styles/pages/faq'

export default () => (
  <div style={{ padding: '16px' }}>
    <S.Navigation>
      <Link href="/contact_us">
        <Back />
      </Link>
      <S.FAQ>FAQ</S.FAQ>
    </S.Navigation>
    <S.Container>
      <S.TextBold>Do you ship internationally?</S.TextBold>
      <Arrow />
    </S.Container>
    <S.Container>
      <S.TextBold>What payment methods do you accept?</S.TextBold>
      <Arrow />
    </S.Container>
    <S.Container>
      <S.TextBold>What if I received the wrong or defective product(s)?</S.TextBold>
      <Arrow />
    </S.Container>
    <S.Answer>
      <S.Question>
        <S.TextBold>
          What shipping methods are available and how much do they cost?
        </S.TextBold>
        <Arrow style={{ transform: 'rotate(180deg)' }} />
      </S.Question>
      <S.Text>
        For your convenience, we ship via FedEx, DHL & USPS. The store is
        plugged directly into the shipping provider's shipping calculator, the
        rates for which are based on your location, package weight, and package
        dimensions. To calculate the cost of shipping for your order, put in
        your ZIP code during checkout and click continue.
      </S.Text>
    </S.Answer>
    <S.Container>
      <S.TextBold>How do I track my order?</S.TextBold>
      <Arrow />
    </S.Container>
  </div>
)
