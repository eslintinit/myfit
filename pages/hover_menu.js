import styled from 'styled-components'
import Close from 'public/icons/Close.svg'
import Home from 'public/icons/Home.svg'
import Shop from 'public/icons/Shop.svg'
import Safety from 'public/icons/Safety.svg'
import About from 'public/icons/AboutUs.svg'
import Contact from 'public/icons/Contact.svg'
import Review from 'public/icons/Review.svg'
import Settings from 'public/icons/Settings.svg'
import SignOut from 'public/icons/SignOut.svg'
import { BLACK, PRIMARY } from 'styles/colors'

const NavigationBar = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  margin: 0px 16px 24px 16px;
`

const OpenMenu = styled.div`
  margin-left: 8px;
  margin-right: 28px;
  width: 40%;
`

const Account = styled.div`
  margin-left: 8px;
  margin-bottom: 40px;
`

const Text = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`

const MenuPoints = styled.div`
`

const Point = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #FFFFFF;
  margin-bottom: 12px;
`

const TextPoint = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-left: 12px;
`

const ChosenPoint = styled(Point)`
  background: rgba(250, 69, 4, 0.2);
  border-radius: 8px;
  color: ${PRIMARY};
`

const Logout = styled.div`
  border-top: 1px solid rgba(189, 189, 189, 0.35);
  margin-top: 56px;
  padding-top: 28px;
`

export default () => (
    <div style={{ height: '100vh', background: BLACK }}>
      <NavigationBar>
        <Close />
      </NavigationBar>
      <OpenMenu>
        <Account>
          <Text>Hej,</Text>
          <Text>Susie Little</Text>
        </Account>
        <MenuPoints>
          <ChosenPoint>
            <Home />
            <TextPoint>Home</TextPoint>
          </ChosenPoint>
          <Point>
            <Shop />
            <TextPoint>Shop MyFit</TextPoint>
          </Point>
          <Point>
            <Safety />
            <TextPoint>Safety</TextPoint>
          </Point>
          <Point>
            <About />
            <TextPoint>About Us</TextPoint>
          </Point>
          <Point>
            <Contact />
            <TextPoint>Contact Us</TextPoint>
          </Point>
          <Point>
            <Review />
            <TextPoint>Review</TextPoint>
          </Point>
          <Point>
            <Settings />
            <TextPoint>Settings</TextPoint>
          </Point>
        </MenuPoints>
        <Logout>
          <Point>
            <SignOut />
            <TextPoint>Sign Out</TextPoint>
          </Point>
        </Logout>
      </OpenMenu>
    </div>

)
