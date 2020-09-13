import React, { Component } from 'react'

const FullKit = 'https://i.imgur.com/kkV6B8z.jpg'

import * as S from 'styles/contact.js'

class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('Your email: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <S.Bg>
          <S.FullKitStyle src={FullKit} alt="MYFIT Full Kit" />
          <S.ContactBox>
            <S.Header>Question still not answered?</S.Header>
            <S.HeadText>
              We love to hear from our customers about anything! Want to become
              an ambassador, a MYFIT retailer or a question about our app get in
              touch below.
            </S.HeadText>
            <S.ContactForm onSubmit={this.handleSubmit}>
              <S.Input type="text" name="name" placeholder="Name" />
              <S.Input type="text" name="number" placeholder="Order number" />
              <S.Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <S.Input type="tel" name="phone" placeholder="Phone" />
              <S.Select>
                <option disabled>Type of Questions</option>
                <option value="MYFIT PRODUCTS">MYFIT PRODUCTS</option>
                <option value="MYFIT APP">MYFIT APP</option>
                <option value="WHOLESALE">WHOLESALE</option>
                <option value="AMAZON ORDER">AMAZON ORDER</option>
                <option value="MYFIT E-COMMERCE">MYFIT E-COMMERCE</option>
                <option value="AFFILIATE PROGRAMME">AFFILIATE PROGRAMME</option>
              </S.Select>
              <S.TextArea rows="5" name="text" placeholder="Your Question" />
              <S.FormButton type="submit" value="Submit" />
            </S.ContactForm>
          </S.ContactBox>
        </S.Bg>
        <S.Footer>
          <S.Container>
            <S.MenuFooter>
              <S.MenuButton>Shop Now</S.MenuButton>
              <S.MenuButton>Contact</S.MenuButton>
            </S.MenuFooter>
            <S.Socials>
              <a href="https://twitter.com/">
                <img src={'/icons/Twitter.svg'} />
              </a>
              <a href="https://www.facebook.com/">
                <img src={'/icons/Facebook.svg'} />
              </a>
              <a href="https://www.instagram.com/">
                <img src={'/icons/Instagram.svg'} />
              </a>
            </S.Socials>
            <S.FooterAddress>
              Digimoat Limited (12539477), 64 Nile Street, International House,
              London, N1 7SR, United Kingdom. contact@my-fit.io
            </S.FooterAddress>
            <S.EmailBox>
              <S.EmailHead>Be part of the MYFIT Community</S.EmailHead>
              <S.EmailText>
                There is always something happening in the MYFIT Community.
                Subscribe to our newsletter bellow. Then you are always the
                first to get the latest fitness tips, special offers, and other
                awesome stuff from us.
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
        </S.Footer>
      </div>
    )
  }
}

export default ContactUs
