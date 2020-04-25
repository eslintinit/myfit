import styled from 'styled-components'
import Dashboard from 'public/icons/Dashboard.svg'
import Notification from 'public/icons/Notification.svg'
import Key from 'public/icons/Key.svg'
import { BLACK, DARK_GREY, PRIMARY, GREY, SOFT_ORANGE } from 'styles/colors'


const NavigationBar = styled.div`
  text-align: center;
  height: 44px;
  display: flex;
	align-items: flex-end;
  margin-bottom: 24px;
`

const NavigationTitle = styled.div`
  color: ${BLACK};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
  flex-grow: 1;
  padding-right: 27px;
`

const Content = styled.div`

`

const CoverImage = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  margin-bottom: 24px;
`

const PersonalInfo = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  margin-bottom: 24px;
`

const Notifications = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  margin-bottom: 24px;
`

const ChangePassword = styled.div`
  border-bottom: 1.5px solid rgba(189, 189, 189, 0.1);
  padding-bottom: 24px;
  display: flex;
  flex-direction: row;
`
const TextBold = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: ${BLACK};
`

const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 133.83%;
  color: ${DARK_GREY};
`

export default () => (
  <div style={{ padding: '16px' }}>
    <NavigationBar>
      <Dashboard />
      <NavigationTitle>Settings</NavigationTitle>
    </NavigationBar>
    <CoverImage>
      <TextBold>Your cover image</TextBold>
    </CoverImage>
    <PersonalInfo>
      <Text>Full Name</Text>
      <Text>Email</Text>
    </PersonalInfo>
    <Notifications>
      <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '24px' }}>
        <Notification style={{ marginRight: '16px' }}/>
        <TextBold>Send me push notification</TextBold>
      </div>
      <Text>About new video content</Text>
      <Text>About new product</Text>
      <Text>MyFit Updates</Text>
    </Notifications>
    <ChangePassword>
      <Key style={{ marginRight: '16px' }}/>
      <TextBold>Change password</TextBold>
    </ChangePassword>
  </div>

)
