import styled from 'styled-components'
import Back from 'public/icons/Back.svg'
import Arrow from 'public/icons/Arrow.svg'
import NoSee from 'public/icons/NoSee.svg'
import Email from 'public/icons/Email.svg'
import Key from 'public/icons/Key.svg'
import {
  BLACK,
  DARK_GREY,
  GREY,
  PRIMARY,
} from 'styles/colors'

const Bg = styled.div`
  background-image: url(https://i.imgur.com/zRrcCEH.png);
  height: 50vh;
`

const NavigationBar = styled.div`
  height: 44px;
  margin-left: 16px;
`

const InfoBlock = styled.div`
  border-radius: 20px 20px 0px 0px;
  background: #FFFFFF;
  
`

export default () => (
  <div>
    <Bg>
      <NavigationBar>
        <Back />
      </NavigationBar>
      <InfoBlock></InfoBlock>
    </Bg>
  </div>
)
