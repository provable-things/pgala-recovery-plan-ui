import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useWalletByBlockchain } from '../../../hooks/use-wallets'

import Button from '../Button'
import WalletInfoModal from '../WalletInfoModal'

const ConnectButton = styled(Button)``

const Logo = styled.img`
  width: 40px;
  height: 40px;
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

const Header = (_props) => {
  const [showWalletInfo, setShowWalletInfo] = useState(false)
  const wallet = useWalletByBlockchain('BSC')
  const { isConnected, formattedAccount, connect } = wallet

  return (
    <React.Fragment>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            {' '}
            <Link to={'/'}>
              <Logo src="../assets/svg/PNT.svg" />
            </Link>
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
