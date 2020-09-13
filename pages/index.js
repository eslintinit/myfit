import React, { Component } from 'react'
// import { Reset } from 'reset-css'
import { ScrollingProvider, SectionLink, Section } from 'react-scroll-section'

// import Image from 'icons/App.png'
// import MainPhoto from 'icons/MainPhoto.jpg'
// import ProductPhoto from 'icons/ProductPhoto.jpg'
// import FullKit from 'icons/FullKit.jpg'

const Image = 'https://i.imgur.com/5jnkOr2.png'
const MainPhoto = 'https://i.imgur.com/r3m4hVg.jpeg'
const ProductPhoto = 'https://i.imgur.com/6ODA47k.jpg'
const FullKit = 'https://i.imgur.com/kkV6B8z.jpg'

import * as S from 'styles/landing.js'

export default class MyComponent extends Component {
  render() {
    return (
      <S.Bg>
        <ScrollingProvider>
          <S.Main>
            <S.MenuImage src={MainPhoto} />
            <S.MenuBlock></S.MenuBlock>
            <S.Box>
              <S.MobileMenu>
                <img src={`/icons/LogoWhite.svg`} />
                <S.ButtonPrimaryMobile href="https://www.amazon.com/">
                  Buy Now
                </S.ButtonPrimaryMobile>
              </S.MobileMenu>
              <S.NavigationMenu>
                <img src={'icons/LogoBig.svg'} />
                <S.Menu>
                  <SectionLink section="why">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton onClick={onClick} selected={isSelected}>
                        Why
                      </S.MenuButton>
                    )}
                  </SectionLink>
                  <SectionLink section="product">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton onClick={onClick} selected={isSelected}>
                        Product
                      </S.MenuButton>
                    )}
                  </SectionLink>
                  <SectionLink section="app">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton onClick={onClick} selected={isSelected}>
                        App
                      </S.MenuButton>
                    )}
                  </SectionLink>
                  <SectionLink section="contact">
                    {({ onClick, isSelected }) => (
                      <S.MenuButton
                        onClick={() => (window.location.href = '/contact')}
                        selected={isSelected}
                      >
                        Contact
                      </S.MenuButton>
                    )}
                  </SectionLink>

                  <S.MenuButton
                    onClick={() => (window.location.href = '/blog')}
                  >
                    Blog
                  </S.MenuButton>
                </S.Menu>
                <S.ButtonPrimary href="https://www.amazon.com/">
                  Buy Now
                </S.ButtonPrimary>
              </S.NavigationMenu>
              <S.MainCTA>
                <S.MainHead>The Resistance Workout Revolution</S.MainHead>
                <S.MainText>
                  Designed with personality and produced to the highest
                  standards - MYFIT bands allows you to train your way, wherever
                  you are.
                </S.MainText>
                <S.MainButtons>
                  <S.ButtonPrimary href="https://www.amazon.com/">
                    Shop Now
                  </S.ButtonPrimary>
                  <S.AmazonButton href="https://www.amazon.com/">
                    <img src={'icons/AmazonName.svg'} />
                  </S.AmazonButton>
                </S.MainButtons>
              </S.MainCTA>
            </S.Box>
          </S.Main>
          <Section id="why">
            <S.Benefits>
              <S.Caption>
                <S.TextHead>Premium Resistance Bands</S.TextHead>
                <S.CaptionText>
                  MYFIT are a UK brand providing unparalleled quality latex
                  resistance bands allowing you to shred body fat and increase
                  isolated muscle strength. Alongside the premium bands, we’ve
                  created an app to provide exclusive curated content by
                  industry professionals. This combination provides you with the
                  ultimate solution to achieving your goals, wherever you are.
                </S.CaptionText>
              </S.Caption>
              <S.Content>
                <S.CardOne>
                  <img src={'icons/Leaf.svg'} />
                  <S.CardTextBold>
                    Build muscle and shred fat from the comfort of your own
                    home.
                  </S.CardTextBold>
                  <S.CardText>
                    The MYFIT resistance bands target isolated muscle groups to
                    nurture growth whilst burning body fats. At your
                    convenience.
                  </S.CardText>
                </S.CardOne>
                <S.CardTwo>
                  <img src={'icons/Phone.svg'} />
                  <S.CardTextBold>
                    Exclusive app to help you achieve your goals. Whatever they
                    may be.
                  </S.CardTextBold>
                  <S.CardText>
                    The MYFIT app has exercises curated by industry
                    professionals for all muscle groups. Regularly updated by
                    experts.
                  </S.CardText>
                </S.CardTwo>
                <S.CardThree>
                  <img src={'icons/Leaf.svg'} />
                  <S.CardTextBold>
                    MYFIT resistance bands are made from 100% natural latex.
                    Naturally sourced.
                  </S.CardTextBold>
                  <S.CardText>
                    Our latex has origins from the highest quality source, the
                    hevea brasiliensis tree. This ensures durability in
                    strength, as well as flexibility.
                  </S.CardText>
                </S.CardThree>
              </S.Content>
            </S.Benefits>
          </Section>
          <Section id="product">
            <S.ProductBlock>
              <S.FullKitStyle src={FullKit} alt="MYFIT Full Kit" />
              <S.DarkBlock>
                <S.ProductCTA>
                  <S.ProductHeadWhite>Durable. Versatile.</S.ProductHeadWhite>
                  <S.ProductHead>100% Fit for purpose.</S.ProductHead>
                  <S.ProductText>
                    All bodies are unique. Whether you want to shred fat or tone
                    muscle groups, we've got your back. Join the resistance
                    workout revolution.
                  </S.ProductText>
                  <S.ButtonPrimary href="https://www.amazon.com/">
                    Shop Now
                  </S.ButtonPrimary>
                </S.ProductCTA>
                <S.ProductStyle src={ProductPhoto} alt="MYFIT Handband" />
              </S.DarkBlock>
            </S.ProductBlock>
          </Section>
          <Section id="app">
            <S.App>
              <S.AppImage src={Image} alt="MyFit App" />
              <S.AppCTA>
                <S.FramedHead>
                  <S.AppHead>Perfect workout. Everytime.</S.AppHead>
                  <S.CaptionText>
                    The MYFIT app is your go-to for all resistance workouts
                    created by qualified UK personal trainers. The app is
                    regularly updated with new exercises to keep you on your
                    toes.
                  </S.CaptionText>
                </S.FramedHead>
                <S.AppBox>
                  <S.WorkoutCard>
                    <img src={'icons/Dumbbell.svg'} />
                    <S.Framed>
                      <S.AppTextBold>Workout Videos</S.AppTextBold>
                      <S.CardText>
                        Our personal trainers showcase an array of exercises
                        that are catered to fulfill muscle growth, toning and
                        weight-loss.
                      </S.CardText>
                    </S.Framed>
                  </S.WorkoutCard>
                  <S.CombosCard>
                    <img src={'icons/Dumbbell.svg'} />
                    <S.Framed>
                      <S.AppTextBold>Combos (coming soon)</S.AppTextBold>
                      <S.CardText>
                        Whatever you’re working on, we’ve curated combo videos
                        which puts together a set of workout plans for specific
                        muscle groups.
                      </S.CardText>
                    </S.Framed>
                  </S.CombosCard>
                  <S.FavouritesCard>
                    <img src={'icons/Dumbbell.svg'} />
                    <S.Framed>
                      <S.AppTextBold>Favourites</S.AppTextBold>
                      <S.CardText>
                        Want to curate your own workout plans? You can favourite
                        your preferred workouts and collate a playlist of
                        workouts for yourself.
                      </S.CardText>
                    </S.Framed>
                  </S.FavouritesCard>
                  <S.AppText>
                    You will receive the app link on a card with the MYFIT bands
                    when purchased*
                  </S.AppText>
                </S.AppBox>
                {/*<S.ButtonPrimary href='https://www.amazon.com/'>Go to Application</S.ButtonPrimary>*/}
              </S.AppCTA>
            </S.App>
          </Section>
          <S.Bottom>
            <S.TextHead>Order your MYFIT bands now.</S.TextHead>
            <S.OrderButton href="https://www.amazon.com/">
              Shop Now
            </S.OrderButton>
            <img src={'icons/Amazon.svg'} />
          </S.Bottom>
          <Section id="contact">
            <S.Footer>
              <S.Container>
                <S.MenuFooter>
                  <S.FooterButton href="https://www.amazon.com/">
                    Shop Now
                  </S.FooterButton>
                  <S.FooterButton href="/contact">Contact</S.FooterButton>
                  <S.FooterButton href="/policy">
                    Terms and Privacy Policy
                  </S.FooterButton>
                  <S.FooterButton href="/blog">Blog</S.FooterButton>
                </S.MenuFooter>
                <S.Socials>
                  <a href="https://twitter.com/">
                    <img src={'icons/Twitter.svg'} />
                  </a>
                  <a href="https://www.facebook.com/">
                    <img src={'icons/Facebook2.svg'} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img src={'icons/Instagram.svg'} />
                  </a>
                </S.Socials>
                <S.FooterAddress>
                  Digimoat Limited (12539477), 64 Nile Street, International
                  House, London, N1 7SR, United Kingdom. contact@my-fit.io
                </S.FooterAddress>
                <S.EmailBox>
                  <S.EmailHead>Be part of the MYFIT Community</S.EmailHead>
                  <S.EmailText>
                    There is always something happening in the MYFIT Community.
                    Subscribe to our newsletter bellow. Then you are always the
                    first to get the latest fitness tips, special offers, and
                    other awesome stuff from us.
                  </S.EmailText>
                  <div>
                    <S.Email
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <S.EmailButton onClick={() => alert('yo')}>
                      Sign Up
                    </S.EmailButton>
                  </div>
                </S.EmailBox>
              </S.Container>
              <S.MyFitRight>
                © 2020 - MYFIT, All right are reserved
              </S.MyFitRight>
            </S.Footer>
          </Section>
        </ScrollingProvider>
        {/*<ContactUs />*/}
      </S.Bg>
    )
  }
}
