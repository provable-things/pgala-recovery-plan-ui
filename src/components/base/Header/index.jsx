import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar, Container, Row, Col } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { RiArrowLeftSLine } from 'react-icons/ri'

import { useWalletByBlockchain } from '../../../hooks/use-wallets'

import Button from '../Button'
import WalletInfoModal from '../WalletInfoModal'

const ConnectButton = styled(Button)``

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`

const ContainerOptions = styled.div`
  margin-left: auto;
  display: flex;
  @media (max-width: 767.98px) {
    display: none;
  }
`

const ContainerBottomMobile = styled(Container)`
  display: none;
  position: fixed !important;
  bottom: 0;
  height: 65px;
  width: 100%;
  z-index: 100;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  background-color: ${({ theme }) => theme.bg1} !important;
  @media (max-width: 767.98px) {
    display: block;
  }
`

const StyledLink = styled(Link)`
  font-size: 18px;
  padding-left: 15px;
  padding-right: 15px;
  color: ${({ active, theme }) => (active === 'true' ? theme.text1 : theme.text3)} !important;
  @media (max-width: 991.98px) {
    margin-left: 10px;
    font-size: 17px;
  }
  text-decoration: none;
`

const StyledA = styled.a`
  font-size: 18px;
  padding-left: 15px;
  padding-right: 15px;
  color: ${({ active, theme }) => theme.text3} !important;
  @media (max-width: 991.98px) {
    margin-left: 10px;
    font-size: 17px;
  }
  text-decoration: none;
`

const StyledIcon = styled(RiArrowLeftSLine)`
  position: relative;
  transform: rotate(135deg);
  bottom: 10px;
  right: 3px;
`

const Header = (_props) => {
  const [showWalletInfo, setShowWalletInfo] = useState(false)
  const wallet = useWalletByBlockchain('BSC')
  const { isConnected, formattedAccount, connect } = wallet
  const { pathname } = useLocation()

  return (
    <React.Fragment>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            {' '}
            <Link to={'/'}>
              <Logo src="./assets/svg/PNT.svg" />
            </Link>
            <StyledLink to={'/'} active={(pathname === '/').toString()}>
              Home
            </StyledLink>
            <StyledLink to={'/faqs'} active={pathname.includes('faqs').toString()}>
              FAQs
            </StyledLink>
            <span>
              <StyledA href="https://pgala-recovery-plan-bnb.p.network" target="_blank" rel="noreferrer">
                Part Two
                <StyledIcon />
              </StyledA>
            </span>
          </Navbar.Brand>
          {isConnected ? (
            <ContainerOptions>
              <ConnectButton onClick={() => (isConnected ? setShowWalletInfo(true) : connect())}>
                {formattedAccount}
              </ConnectButton>
            </ContainerOptions>
          ) : null}
        </Container>
      </Navbar>
      {isConnected ? (
        <ContainerBottomMobile>
          <Row>
            <Col xs={8}>
              <ConnectButton onClick={() => (isConnected ? setShowWalletInfo(true) : connect())}>
                {formattedAccount}
              </ConnectButton>
            </Col>
          </Row>
        </ContainerBottomMobile>
      ) : null}
      <WalletInfoModal show={showWalletInfo} wallets={[wallet]} onClose={() => setShowWalletInfo(false)} />
    </React.Fragment>
  )
}

export default Header
