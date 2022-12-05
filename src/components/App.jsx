import React, { Fragment, useState, useCallback, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import BigNumber from 'bignumber.js'

import { useWalletByBlockchain } from '../hooks/use-wallets'
import AgreementAbi from '../utils/abi/Agreement.json'
import { registerToken } from '../utils/wallet'
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
  background: red;
  cursor: pointer;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 5px;
`

const AddTokenSpan = styled.span`
  width: 100%;
  text-align: center;
  color: #007bff;
  cursor: pointer;
  font-size: 13px;
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
          : `Accept and Claim ${claimable ? claimable : '-'} pGALA`
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

  const onAddToken = useCallback(async () => {
    try {
      await registerToken({
        provider,
        tokenAddress: '0x419C44C48Cd346C0b0933ba243BE02af46607c9B',
        tokenSymbol: 'pGALA',
        tokenDecimals: 18,
        tokenImage: null,
      })
    } catch (_err) {
      console.error(_err)
    }
  }, [provider])

  return (
    <Fragment>
      <Header />
      <Container>
        <Row className="mt-4">
          <Col className="mx-auto text-center" xs={12}>
            <Title>pGALA Recovery plan</Title>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="mx-auto text-center" xs={12} lg={8}>
            <SubTitle>
              In order to participate in the recovery plan please read the declaration below (also available{' '}
              <a href={settings.terms} target="_blank" rel="noreferrer">
                here
              </a>
              ) and accept it by signing it with the wallet you want to participate with. Upon signature a transaction
              will be sent on the blockchain. This same transaction delivers the new pGALA tokens to the signing
              address. If you want, you can then redeem them via{' '}
              <a href={'https://dapp.ptokens.io'} target="_blank" rel="noreferrer">
                dapp.ptokens.io
              </a>
              .
              <br />
              <br />
              The new pGALA smart contract address is{' '}
              <a
                href={'https://bscscan.com/token/0x419c44c48cd346c0b0933ba243be02af46607c9b'}
                target="_blank"
                rel="noreferrer"
              >
                0x419C44C48Cd346C0b0933ba243BE02af46607c9B
              </a>
              .
              <br />
              <br />
              For any inquiries on this process please send an email to{' '}
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
        {isConnected && (
          <Row>
            <Col className="mt-3 d-flex justify-content-center mx-auto" xs={12} lg={6}>
              <AddTokenSpan onClick={onAddToken}>Add pGALA to your wallet</AddTokenSpan>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
    </Fragment>
  )
}

export default App
