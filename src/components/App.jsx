import React, { Fragment, useState, useCallback, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import BigNumber from 'bignumber.js'
import { Link } from 'react-router-dom'

import { useWalletByBlockchain } from '../hooks/use-wallets'
import AgreementAbi from '../utils/abi/Agreement.json'
import settings from '../settings'

import Button from '../components/base/Button'
import Header from './base/Header'
import Footer from './base/Footer'

const TermsAndConditions = styled(Col)`
  height: 400px;
  max-height: 400px;
`

const Title = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.secondary1};
  letter-spacing: 1px;
`

const SubTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.gray};
  letter-spacing: 1px;
`

const StyledFormCheckLabel = styled(Form.Check.Label)`
  color: ${({ theme }) => theme.secondary1};
  letter-spacing: 1px;
  font-size: 14px;
  margin-left: 10px;
  margin-top: 5px;
`

const StyledFormCheckInput = styled(Form.Check.Input)`
  height: 20px;
  width: 20px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  cursor: pointer;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 5px;
`

const App = () => {
  const { connect, provider, isConnected, account } = useWalletByBlockchain('BSC')
  const [checked, setChecked] = useState(false)
  const [claimable, setClaimable] = useState(null)

  const onConfirm = useCallback(() => {
    try {
      const web3 = new Web3(provider)
      const agreement = new web3.eth.Contract(AgreementAbi, settings.contracts.agreement)
      agreement.methods
        .acceptAndClaim(settings.termsMultiHash)
        .send({
          from: account,
        })
        .on('transactionHash', (_hash) => {
          toast('Transaction broadcasted!', {
            position: 'bottom-right',
            type: 'success',
            onClick: () => window.open(`${settings.explorers.mainnet.bsc}/tx/${_hash}`, '_blank'),
          })
        })
        .on('receipt', (_receipt) => {
          toast('Transaction confirmed!', {
            position: 'bottom-right',
            type: 'success',
          })
        })
    } catch (_err) {
      console.error(_err)
    }
  }, [account, provider])

  useEffect(() => {
    if (isConnected && provider && account) {
      const fetch = async () => {
        try {
          const web3 = new Web3(provider)
          const agreement = new web3.eth.Contract(AgreementAbi, settings.contracts.agreement)
          const claimableAmount = await agreement.methods.getClaimableAmountFor(account).call()

          setClaimable(
            BigNumber(claimableAmount)
              .dividedBy(10 ** 18)
              .toFixed()
          )
        } catch (_err) {
          console.error(_err)
        }
      }

      fetch()
    }
  }, [isConnected, provider, account])

  const btnText = useMemo(
    () =>
      isConnected
        ? BigNumber(claimable).isEqualTo(0)
          ? 'Nothing to claim'
          : `Accept and Claim ${claimable ? claimable : '-'} BNB`
        : 'Connect',
    [isConnected, claimable]
  )

  const btnDisabled = useMemo(() => {
    if (isConnected) {
      if (BigNumber(claimable).isEqualTo(0)) return true
      return !checked
    }

    return false
  }, [isConnected, claimable, checked])

  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="mt-4">
          <Col className="mx-auto text-center" xs={12}>
            <Title>pGALA Recovery Plan - Part Two: BNB redistribution</Title>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="mx-auto text-center" xs={12} lg={8}>
            <SubTitle>
              The Second Part of the pGALA Recovery Plan involves the redistribution of the 12,977 BNB tokens recovered
              after the pGALA incident on 3 November 2022. These BNB tokens recovered through the white-hat operation,
              have been assigned to users in proportion to their eligible pGALA holdings at the time of the second
              snapshot (S2), as described in our post-mortem article (0.00000109 BNB for each uncollateralized pGALA).
              <br />
              <br />
              On 2 July 2023, the Swiss judicial authorities concluded that there are no elements to support the
              continuation of a criminal procedure. On 2 October 2023, the authorities returned the recovered BNB tokens
              to us, with the obligation to return them to uncollateralized pGALA holders in accordance with the
              recovery plan published last year.
              <br />
              <br />
              To claim your share of the recovered BNB, please review and accept the declaration below (also available{' '}
              <a href={settings.terms} target="_blank" rel="noreferrer">
                here
              </a>
              ). Sign it using your eligible wallet. Once signed, a blockchain transaction will be initiated to credit
              your wallet with the BNB tokens to which you are entitled.
              <br />
              <br /> If you have any further questions, please refer to our <Link to="/faqs">FAQs</Link> or contact us
              at{' '}
              <a href={'mailto:pgala@p.network'} target="_blank" rel="noreferrer">
                pgala@p.network
              </a>
              .
            </SubTitle>
          </Col>
        </Row>
        <Row className="mt-4">
          <TermsAndConditions className="mx-auto" xs={12} lg={8}>
            <Iframe src={settings.terms} id="frame" />
          </TermsAndConditions>
        </Row>
        <Row className="mt-2">
          <Col className="mx-auto text-center" xs={12}>
            <Form>
              <Form.Check type={'checkbox'} id={`check-tos`}>
                <StyledFormCheckInput type={'checkbox'} onChange={() => setChecked(!checked)} />
                <StyledFormCheckLabel>Accept</StyledFormCheckLabel>
              </Form.Check>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5 mx-auto" xs={12} lg={6}>
            <Button disabled={btnDisabled} onClick={() => (isConnected ? onConfirm() : connect())}>
              {btnText}
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  )
}

export default App
