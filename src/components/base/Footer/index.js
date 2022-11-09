import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.secondary1};
  font-size: 13px;
`

const StyledFooter = styled.footer`
  line-height: 60px;
  background-color: transparent;
  display: block;
  bottom: 0;
  width: 100%;
  margin-top: 120px;
  @media (max-width: 767.98px) {
    line-height: 40px;
  }
  border-top: 1px solid ${({ theme }) => theme.bg2};
`

const FooterText = styled.span`
  color: ${({ theme }) => theme.secondary1};
`

const Footer = ({ withCheck = false }) => (
  <StyledFooter>
    <Container>
      <Row>
        <Col xs={4} />
        <Col xs={4} className="text-center">
          <FooterText>© p.network</FooterText>
        </Col>
        <Col xs={4} className="text-right">
          {withCheck && <StyledLink to={'/check'}>Check details...</StyledLink>}
        </Col>
      </Row>
    </Container>
  </StyledFooter>
)

export default Footer
