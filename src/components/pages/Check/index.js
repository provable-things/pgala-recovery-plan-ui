import React, { Fragment, useState, useCallback } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { Container, Row, Col } from 'react-bootstrap'
import BigNumber from 'bignumber.js'

import AgreementAbi from '../../../utils/abi/Agreement.json'
import settings from '../../../settings'

import Header from '../../base/Header'
import Button from '../..//base/Button'
import Footer from '../../base/Footer'

const Content = styled.div`
  padding-bottom: 100px;
  width: 100%;
  height: 100vh;
`

const Input = styled.input`
  background: transparent;
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
  caret-color: #32b1f5;
  font-size: 20px;
  color: ${({ theme }) => theme.text1};
  width: 100%;
  border: 1px solid rgba(71, 89, 101, 0.3);
  padding: 5px 10px;
  border-radius: 10px;
  @media (max-width: 767.98px) {
    font-size: 35px;
  }
`

const Title = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.secondary1};
  letter-spacing: 1px;
`

const DetailLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary1};
  letter-spacing: 1px;
`

const DetailValue = styled(DetailLabel)`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary1};
  letter-spacing: 1px;
  font-weight: bold;
`

const Check = () => {
  const [details, setDetails] = useState(null)
  const [address, setAddress] = useState(null)

  const onClick = useCallback(async () => {
    try {
      const web3 = new Web3(settings.rpc.bsc.endpoint)
      const agreement = new web3.eth.Contract(AgreementAbi, settings.contracts.agreement)

      const claimableAmount = await agreement.methods.getClaimableAmountFor(address).call()
      const claimedAmount = await agreement.methods.getClaimedAmountFor(address).call()
      setDetails({
        claimableAmount: BigNumber(claimableAmount)
          .dividedBy(10 ** 18)
          .toFixed(),
        claimedAmount: BigNumber(claimedAmount)
          .dividedBy(10 ** 18)
          .toFixed(),
      })
    } catch (_err) {
      console.error(_err)
    }
  }, [address])

  return (
    <Fragment>
      <Header />
      <Content>
        <Container>
          <Row className="mt-4">
            <Col className="mx-auto text-center" xs={12}>
              <Title>Check address details</Title>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mx-auto text-center" xs={6}>
              <Input onChange={(_e) => setAddress(_e.target.value)} placeholder="0x..." />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="mx-auto text-center" xs={6}>
              <Button disabled={!address} onClick={onClick}>
                Check
              </Button>
            </Col>
          </Row>
          {details && (
            <React.Fragment>
              <Row className="mt-5 ">
                <Col className="d-flex justify-content-between mx-auto text-center" xs={6}>
                  <DetailLabel>Claimable</DetailLabel>
                  <DetailValue>{details?.claimableAmount} pGALA</DetailValue>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="d-flex justify-content-between mx-auto text-center" xs={6}>
                  <DetailLabel>Already Claimed</DetailLabel>
                  <DetailValue>{details?.claimedAmount} pGALA</DetailValue>
                </Col>
              </Row>
            </React.Fragment>
          )}
        </Container>
      </Content>
      <Footer />
    </Fragment>
  )
}

export default Check
