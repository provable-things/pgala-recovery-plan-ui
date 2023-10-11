import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

import Header from '../../base/Header'

const Title = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.secondary1};
  letter-spacing: 1px;
`

const AccordionHeaderText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary1};
  letter-spacing: 1px;
  font-weight: 700;
`

const AccordionBodyTextSpan = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary1};
  letter-spacing: 1px;
`

const Faqs = () => {
  return (
    <Fragment>
      <Header />
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="mx-auto text-center" xs={12}>
            <Title>FAQs</Title>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <AccordionHeaderText>Q1 - What is pNetwork and what is pGALA?</AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    pNetwork is an open-source multi-chain routing protocol that enables the movement and
                    interoperability of assets, NFTs and data across more than 15 blockchains. These cross-blockchain
                    functionalities enable, for example, the release of “wrapped” tokens called pTokens (e.g. Bitcoins
                    wrapped to operate on the Ethereum blockchain).
                    <br />
                    <br />
                    Wrapped tokens are cryptocurrencies pegged to the value of another original asset - the original
                    asset is “wrapped” into a digital vault and a newly minted token is created to operate on a host
                    blockchain. Because of their nature, wrapped tokens have a different trust model compared to their
                    original underlying asset. While under normal circumstances there is a 1:1 peg between the wrapped
                    asset and the native one, the peg may not always hold (for example in the case of a hack).
                    <br />
                    <br />
                    pGALA is a pToken on the BNB chain, that has GALA on Ethereum as its underlying asset. On 3rd
                    November 2022, it was discovered that the old pGALA contract had been irreversibly compromised. The
                    old pGALA contract is therefore not secure and the old pGALA is not redeemable for GALA at a 1:1
                    ratio, as it doesn’t track anymore the real GALA tokens value.
                    <br />
                    <br />
                    On 9th November 2022, pNetwork deployed the new pGALA smart contract on the BNB chain. The new pGALA
                    is redeemable for GALA on Ethereum at a 1:1 ratio. The new pGALA contract is{' '}
                    <a
                      href={'https://bscscan.com/token/0x419c44c48cd346c0b0933ba243be02af46607c9b'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      0x419C44C48Cd346C0b0933ba243BE02af46607c9B
                    </a>
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <AccordionHeaderText>
                    {' '}
                    Q2 - I’m currently holding the old pGALA token, what should I do with it?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    The old pGALA contract (
                    <a
                      href={'https://bscscan.com/token/0x7ddee176f665cd201f93eede625770e2fd911990'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      0x7ddee176f665cd201f93eede625770e2fd911990
                    </a>
                    ) is compromised and the token is not tracking GALA value anymore.
                    <br />
                    Since all snapshots have been already taken (the last is Snapshot 2 -{' '}
                    <a href={'https://bscscan.com/block/22844900'} target="_blank" rel="noreferrer">
                      S2 Block #22844900 - Nov-07-2022 08:00:12 AM +UTC
                    </a>{' '}
                    ), the old pGALA tokens are worthless for the eligibility on the Recovery Plan. <br />
                    Users are suggested to ignore the old pGALA tokens in their wallets. If users want to get rid of
                    them, they can send them to 0x0000000000000000000000000000000000000000 in order to make the old
                    pGALA tokens unrecoverable.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <AccordionHeaderText>
                    {' '}
                    Q3 - I had pGALA tokens before the 3 November incident and held them on-chain, in a wallet whose
                    private keys I hold. What should I do?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    All pGALA token holders that owned a pGALA token during both of the following snapshots:
                    <a href={'https://bscscan.com/block/22745013'} target="_blank" rel="noreferrer">
                      S1 Block #22745013 - Nov-03-2022 07:45:45 PM +UTC
                    </a>{' '}
                    <br />
                    <a href={'https://bscscan.com/block/22844900'} target="_blank" rel="noreferrer">
                      S2 Block #22844900 - Nov-07-2022 08:00:12 AM +UTC
                    </a>
                    <br />
                    are eligible to exchange the old pGALA tokens that they held at S1 and continued to hold at S2 with
                    new fully collateralized pGALA tokens. The new pGALA token has already been issued and its new
                    address is:
                    <a
                      href={'https://bscscan.com/token/0x419c44c48cd346c0b0933ba243be02af46607c9b'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      0x419c44c48cd346c0b0933ba243be02af46607c9b
                    </a>
                    Eligible users can claim their new pGALA at the following website by connecting their wallet:
                    <a href={'https://pgala-recovery-plan.p.network'} target="_blank" rel="noreferrer">
                      https://pgala-recovery-plan.p.network
                    </a>
                    . <br />
                    <br /> N.B. please verify that you’re connecting the address that had the old pGALA tokens before
                    the incident. Users can check the eligibility of an address without connecting the wallet via the
                    following link:{' '}
                    <a href={'https://pgala-recovery-plan.p.network/check'} target="_blank" rel="noreferrer">
                      https://pgala-recovery-plan.p.network/check
                    </a>
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <AccordionHeaderText>
                    {' '}
                    Q4 - I bought pGALA tokens after Snapshot S1, but before Snapshot S2. Am I eligible for the Recovery
                    Plan?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    Whoever bought the old pGALA token after Snapshot S1 (
                    <a href={'https://bscscan.com/block/22745013'} target="_blank" rel="noreferrer">
                      S1 Block #22745013
                    </a>{' '}
                    - Nov-03-2022 07:45:45 PM +UTC), against the public recommendations given by the{' '}
                    <a
                      href={'https://twitter.com/pNetworkDeFi/status/1588266905911308288?s=20&t=85u1RgdCN0orNenSarAdjg'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      pNetwork
                    </a>{' '}
                    and{' '}
                    <a
                      href={
                        'https://twitter.com/BitBenderBrink/status/1588301866290786304?s=20&t=85u1RgdCN0orNenSarAdjg'
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      GalaGames
                    </a>{' '}
                    teams, is NOT eligible for the claim of the new pGALA token (Recovery Plan part 1). <br /> For what
                    concerns the distribution of BNB collected from the whitehat (Recovery Plan part 2), further
                    information can be found here:{' '}
                    <a
                      href={'https://twitter.com/pNetworkDeFi/status/1591078287048339457?s=20&t=BuPMc81yNIO6EVf8olDY3g'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://twitter.com/pNetworkDeFi/status/1591078287048339457?s=20&t=BuPMc81yNIO6EVf8olDY3g
                    </a>
                    . <br /> We are committed to keeping the community posted as the situation develops. We also remain
                    committed to doing the right thing and keeping the process and communication as transparent as
                    possible.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <AccordionHeaderText>
                    {' '}
                    Q5 - I bought pGALA after the snapshot S2. Am I eligible for the Recovery Plan?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    After snapshot S2 the pGALA token is worthless and not part of any compensation plan because the old
                    pGALA is compromised, without collateral and from a technical perspective not under the control of
                    the pNetwork anymore - the attacker can arbitrarily mint any amount of the old pGALA token, hence
                    the need to permanently abandon it.
                    <br /> <br /> Since when the issue has been acknowledged, we have recommended not to trade the old
                    pGALA token and have alerted all parties involved promptly asking them to suspend deposits and
                    withdrawals of the compromised token.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <AccordionHeaderText>
                    {' '}
                    Q6 - How can I check if I am eligible for the claim of the new pGALA token?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    You can check autonomously by connecting to this website created by pNetwork
                    <a href={'https://pgala-recovery-plan.p.network/check'} target="_blank" rel="noreferrer">
                      https://pgala-recovery-plan.p.network/check
                    </a>
                    .<br /> <br /> If you’re the owner of an eligible address, you can claim the new pGALA tokens from{' '}
                    <a href={'https://pgala-recovery-plan.p.network'} target="_blank" rel="noreferrer">
                      https://pgala-recovery-plan.p.network
                    </a>
                    .
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <AccordionHeaderText>Q7 - When will I receive my BNB refund?</AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    The Second Part of the pGALA Recovery Plan involves the redistribution of the 12,977 BNB tokens
                    recovered after the pGALA incident on 3 November 2022. The Second Part of the Recovery Plan was on
                    hold as we were waiting for the approval of the legal authorities. On 2 July 2023, the Swiss
                    judicial authorities concluded that there was insufficient evidence to proceed with criminal
                    proceedings. On 2 October 2023, they returned the recovered BNB tokens to the pNetwork and mandated
                    their distribution to uncollateralized pGALA holders in accordance with the recovery plan published
                    last year. Eligible users can claim the BNB recovered{' '}
                    <a href="https://pgala-recovery-plan-bnb.p.network/" target="_blank" rel="noreferrer">
                      here
                    </a>
                    .
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q8 - I was providing liquidity of pGALA-BNB on Pancakeswap, am I eligible to claim the new pGALA?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    Pancakeswap liquidity providers are considered as if their pGALA balance was in their BEP20 wallet
                    and therefore the eligibility conditions are the same as the non-liquidity provider users.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q9 - I was providing liquidity of pGALA-BNB on other decentralized exchanges (e.g. Biswap), am I
                    eligible to claim the new pGALA?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    Liquidity providers in other exchanges other than Pancakeswap won’t find their personal address
                    eligible to claim the new pGALA token directly from{' '}
                    <a href={'https://pgala-recovery-plan.p.network'} target="_blank" rel="noreferrer">
                      https://pgala-recovery-plan.p.network
                    </a>
                    .<br />
                    In this case, the entitled address able to claim the new pGALA is the Liquidity Pool contract.
                    pNetwork is in touch with the involved decentralized exchanges in order to assure that the new pGALA
                    tokens will be distributed to their users. Please reach out to them to find out more details on how
                    they intend to proceed with the redistribution of pGALA tokens.
                    <br /> <br />
                    Update of 15th February 2023: Biswap has made eligible Biswap's pGALA LP providers able to claim
                    their share of new pGALA tokens via a customized solution. More details{' '}
                    <a href="https://twitter.com/Biswap_Dex/status/1625781974223958016?s=20">here</a>
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q10 - I have old pGALA tokens on a centralised exchange, what should I do?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    pNetwork was never involved in the listing of pGALA on any centralised exchange. Exchanges, such as
                    Binance, Crypto.com (CDC), Huobi or other CEXes not mentioned here, that might have listed pGALA
                    should be able to claim on behalf of their users the new pGALA token{' '}
                    <a target="_blank" rel="noreferrer" href="https://pgala-recovery-plan.p.network">
                      https://pgala-recovery-plan.p.network
                    </a>{' '}
                    as well as the BNB tokens from{' '}
                    <a href="https://pgala-recovery-plan-bnb.p.network/" target="_blank" rel="noreferrer">
                      https://pgala-recovery-plan-bnb.p.network/
                    </a>
                    . The distribution methods and distribution time are under the entire control of the involved
                    exchange itself. Users that have their pGALA on centralized exchanges should be instructed by their
                    exchange. pNetwork remains at disposal in providing support for exchanges that might require it;
                    pNetwork can be reached by email for pGALA concerning requests at.
                    <a href={'mailto:pgala@p.network'} target="_blank" rel="noreferrer">
                      pgala@p.network
                    </a>
                    .
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q11 - I have the old pGALA on a hardware wallet. What should I do?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    pGALA held on hardware wallets (such as Ledger) is considered equal to pGALA held on hot wallets
                    (such as Metamask), therefore the eligibility conditions are the same. <br />
                    Eligible users that have the old pGALA tokens can claim the new pGALA token from{' '}
                    <a href={'https://pgala-recovery-plan.p.network'} target="_blank" rel="noreferrer">
                      https://pgala-recovery-plan.p.network
                    </a>{' '}
                    - when using a hardware wallet connecting it to Metamask for the interaction with the dApp is
                    recommended.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  <AccordionHeaderText>Q12 - What is the new pGALA token?</AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    The new pGALA token (
                    <a
                      href={'https://bscscan.com/token/0x419c44c48cd346c0b0933ba243be02af46607c9b'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      0x419C44C48Cd346C0b0933ba243BE02af46607c9B
                    </a>
                    ) is the new wrapped token issued by pNetwork on the BNB chain, which is fully collateralized by
                    GALA tokens on the Ethereum chain
                    <br />. We invite all users willing to interact with the new pGALA token to verify its contract
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>
                  <AccordionHeaderText>Q13 - What can I do with the new pGALA? Can I swap it?</AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    Users can redeem the ERC20 version of GALA at any time via .
                    <a
                      href={'https://dapp.ptokens.io/swap?asset=gala&from=bsc&to=eth'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      pNetwork dApp
                    </a>
                    .<br /> <br /> pNetwork has never created any markets (liquidity pools nor listing) on both
                    centralized and decentralized exchanges for the old pGALA tokens and won’t be involved in the
                    creation of new markets for the new pGALA token.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>
                  <AccordionHeaderText>Q14 - What is the old pGALA token?</AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    The old pGALA token is NOT secure anymore as its contract is compromised.
                    <br /> Therefore, no one should interact with it anymore. We invite all users willing to interact
                    with the new pGALA token to verify its contract, which is{' '}
                    <a
                      href={'https://bscscan.com/token/0x419c44c48cd346c0b0933ba243be02af46607c9b'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      0x419C44C48Cd346C0b0933ba243BE02af46607c9B
                    </a>
                    .
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q15 - My old GALA is stuck in the pNetwork bridge. What can I do in this situation?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    Should someone have instructed a peg-out (redeem) operation while the bridge was suspended, for the
                    purpose of the snapshots, these transactions have been ignored (and won’t ever be processed) and
                    thus the user has been treated as if the pGALA balance was still in their BEP20 wallet.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q16 - I bought pGALA from a CEX/DEX. How did pGala get listed?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    pNetwork was never part of listing pGALA, GALA or pGALA as GALA on any centralised exchange and we
                    were never involved in the creation of pGALA liquidity pools on any decentralized exchange. Please
                    ask the related CEX/DEX for exchange-related issues.
                    <br /> <br /> Our recommendation for exchanges that wish to support deposits/withdrawals for an
                    asset from multiple chains is not to ever list wrapped assets as if they were equivalent to their
                    underlying asset but to adopt a “redeem on deposit” procedure.
                    <br /> This would mean exchanges could automatically redeem the original underlying asset whenever a
                    wrapped asset is deposited (and credit to their users the underlying asset just then, once securely
                    received) and, similarly, automatically trigger the issuance of the wrapped version whenever the
                    withdrawal of a wrapped asset is requested. This would enable users to continue seamlessly to
                    deposit/withdraw an asset to/from the centralised exchange to/from any supported blockchain. At the
                    same time, it would reduce the risks involved for their users as the exchange itself would only
                    safeguard the original asset.
                    <br /> <br /> pNetwork remains at disposal in providing support for exchanges that might require it;
                    pNetwork can be reached by email for pGALA concerning requests at{' '}
                    <a href={'mailto:pgala@p.network'} target="_blank" rel="noreferrer">
                      pgala@p.network
                    </a>
                    .
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="16">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q17 - What are the eligibility conditions for receiving the BNB redistribution?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    In order to be eligible for the BNB redistribution, the address had to hold uncollateralized pGALA
                    tokens at S2 snapshot block{' '}
                    <a target="_blank" rel="noreferrer" href=" https://bscscan.com/block/22844900">
                      #22844900
                    </a>
                    . The amount of the BNB redistribution is calculated based on the number of pGALA at the time of S2,
                    excluding those pGALA tokens already compensated with the First Part of the Recovery Plan.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q18 - What is the ratio between the BNB redistribution and the number of uncollateralized pGALAs?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    Redistributing all the recovered BNB tokens across all the uncollateralised pGALA tokens at S2
                    results in a BNB/pGALA ratio of 0.00000109 BNB (0.00000109 BNB for each uncollateralised pGALA).
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="18">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q19 - How can I claim the BNB redistribution without interacting with the dApp?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    Users can interact directly on-chain without being obliged to use the dApp. The steps are: <br />-
                    Click{' '}
                    <a
                      href={`https://bscscan.com/address/0x21f7677bF1Aac28d56E960dc7Bff0DE74A67dd97#writeProxyContract`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>
                    . <br />
                    - Connect your wallet. <br />- Expand <b>acceptAndClaim</b>. <br />- If you agree with the
                    agreeement{' '}
                    <a
                      href="https://cf-ipfs.com/ipfs/QmTxt1WE5NWrvRVSWyoxmnQPeDSuE7TLXSxmHd5KBmWNWt"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>{' '}
                    you can proceed inserting <b>QmTxt1WE5NWrvRVSWyoxmnQPeDSuE7TLXSxmHd5KBmWNWt</b> within the{' '}
                    <b>ipfsMultihash</b> text input. <br />
                    - Click write. <br />
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="19">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q20 - I have received pGALA tokens after snapshot 2, what should I do?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    If you received old uncollateralised pGALA tokens after the S2 snapshot block{' '}
                    <a target="_blank" rel="noreferrer" href=" https://bscscan.com/block/22844900">
                      #22844900
                    </a>
                    , these tokens are NOT included in the recovery plan and your address is not eligible to claim
                    neither the new pGALA nor the BNB.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="20">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q21 - I have old pGALA tokens on a centralised exchange, what should I do?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    pNetwork was never involved in the listing of pGALA on any centralised exchange. Exchanges, such as
                    Binance, Crypto.com (CDC), Huobi or other CEXes not mentioned here, that might have listed pGALA
                    should be able to claim on behalf of their users the new pGALA token{' '}
                    <a target="_blank" rel="noreferrer" href="https://pgala-recovery-plan.p.network">
                      https://pgala-recovery-plan.p.network
                    </a>{' '}
                    as well as the BNB tokens from{' '}
                    <a href="https://pgala-recovery-plan-bnb.p.network/" target="_blank" rel="noreferrer">
                      https://pgala-recovery-plan-bnb.p.network/
                    </a>
                    . The distribution methods and distribution time are under the entire control of the involved
                    exchange itself. Users that have their pGALA on centralized exchanges should be instructed by their
                    exchange. pNetwork remains at disposal in providing support for exchanges that might require it;
                    pNetwork can be reached by email for pGALA concerning requests at
                    <a href={'mailto:pgala@p.network'} target="_blank" rel="noreferrer">
                      pgala@p.network
                    </a>
                    .
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="21">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q22 - I was providing liquidity on pGALA-BNB on Pancakeswap, am I eligible to claim the BNB tokens?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    Pancakeswap liquidity providers are considered as if their pGALA balance was in their BEP20 wallet
                    and therefore the eligibility conditions for the BNB redistribution are the same as the
                    non-liquidity provider users.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="22">
                <Accordion.Header>
                  <AccordionHeaderText>
                    Q23 - I was providing liquidity of pGALA-BNB on other decentralized exchanges (e.g. Biswap), am I
                    eligible to claim the BNB tokens?
                  </AccordionHeaderText>
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionBodyTextSpan>
                    Liquidity providers in exchanges other than Pancakeswap won’t find their personal address eligible
                    to claim the BNB token directly from{' '}
                    <a href="https://pgala-recovery-plan-bnb.p.network/" target="_blank" rel="noreferrer">
                      https://pgala-recovery-plan-bnb.p.network/
                    </a>
                    . In this case, the entitled address able to claim the BNB tokens is the Liquidity Pool contract.
                    pNetwork is in touch with the involved decentralized exchanges in order to ensure that the BNB
                    tokens will be distributed to their users. Please reach out to them to find out more details on how
                    they intend to proceed with the redistribution of BNB tokens.
                  </AccordionBodyTextSpan>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Faqs
