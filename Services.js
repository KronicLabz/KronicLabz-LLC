import React from 'react'
import styled from 'styled-components'

const ServicesWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  line-height: 1.5;
  color: #404550;
`

const Header = styled.div`
  padding: 1vh 1vw 1vh 1vw;
  color: #FFF;
  background: linear-gradient(to bottom right, #2b3548, #0d1222);
`

const Main = styled.div`
  width: 100vw;
  padding: 5vh 5vw 5vh 5vw;
  background: #202124;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  padding: 0 15vw 5vh 15vw;
  background: #202124;
  @media (max-width: 799px) {
    grid-template-columns: repeat(auto-fill, 50%);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`

const Title = styled.h3`
  padding: 0vh 8vw 2vh 8vw;
  color: white;
`

const Paragraph = styled.p`
  padding: 0vh 8vw 2vh 8vw;
  width: 80vw;
  color: #a2a7af;
  font-size: 15px;
`

const Column = styled.div`
  padding: 0vh 8vw 2vh 8vw;
  color: #a2a7af;
  padding: 10px;
  font-size: 15px;
`

const Services = () =>
  <ServicesWrapper>
    <Header>
      <center>
        <h1>Services</h1>
      </center>
    </Header>
    <Main>
      <center>
      <Paragraph>
        <center>
          <Title>Security Audits</Title>
        </center>
      </Paragraph>
      <Paragraph> 
        <h4>ERC20/721/1155 Standard Audit</h4>
        <p>
          Trying to get your NFT or token projects smart contract verfied on etherscan?, well the standard audit is just for you. Accepted by etherscan, CoinMarketCap, Coin Gecko and many others requiring a security audit before listing. The price is $1,100 per contract with roughly a 12-24 hour turnaround time. 
        </p>
        <h4>DEEP Dive Audit</h4>
        <p>
          Have a large project like a marketplace or exchange? DEEP dive audits cover every single aspect of a smart contract or contracts, to ensure the security of your project. DEEP dive audits start at $2,100.00 per smart contract and have a typical completion time of 48-72 hours.
        </p>
        <p>
          Each and every security audit completed is visible for public view on our github https://github.com/KronicLabz/KronicLabz-MythX-Security-Audits
        </p>
      </Paragraph>
      <Paragraph>
        <center>
          <Title>Development Services</Title>
        </center>
      </Paragraph>
      <Paragraph>
        <h4>Smart Contract Development Services</h4>
        <p>ERC721/1155 NFT contracts are a standard flat rate $3,200 up front OR $1,200 deposit and 10% of sales from mint (does not apply to secondary sales or royalties) add additional $800 for single page minting site addition $350 per additional page </p>
        <p>-erc20 staking contract w/dapp $4,500</p>
        <p>-erc721 staking contract w/dapp $6,000</p>
        <p>-nft marketplace, base rate of $45.00/hr with non refundable deposit of $3,500 upfront</p>
        <p>-decentralized exchange, example, uniswap, base rate of $45.00/hr with non refundable deposit of $2,500 upfront</p>
        <p>-Custom Blockchain development base rate of $45.00/hr plus terms(varies based of each situation)</p>
      </Paragraph>
      <Paragraph>
        <center>
          <Title>NFT and Token Projects</Title>
        </center>
      </Paragraph>
      <Paragraph>  
        NFT art creation, NFT art generation, Branding and design, Staking and governance, Tokenization, ICO development, Project sale development, Project sale auditing, Project sale marketing, Discord security maintanence, Social media campaign development, Networking and community management
      </Paragraph>
      <Paragraph>
        <center>
          <Title>Educational and Mentoring Services</Title>
        </center>
      </Paragraph>
      <Paragraph>
        KronicLabz also offers educational content and mentorship services free 
        for all KronicKatz NFT holders and approved partner projects through our 
        educational platform MetaTec. For more information, please email us at
        info.metatec@kroniclabz.com 
      </Paragraph>
      </center>
    </Main>
    <Grid>
      <Column>
        <center>
          <h4>ERC-1155 Dyl</h4>
        </center>
        <p>
          <center>
            Known as the Forever Contract, the ERC1155Dyl gives creatives the 
            freedom and independence to create and distribute their own digital
            without having to rely on a marketplace lazy mint function.
          </center>
        </p>
      </Column>
      <Column>
        <center>
          <h4>Lottery NFTs</h4>
        </center>
        <p>
          <center>
            Want to keep your community active and involved during the bear market?
            How about an NFT that gifts rewards every mint and keeps liquidity 
            within the community! Check out our Manic Mouse Millions contract!
          </center>
        </p>
      </Column>
      <Column>
        <center>
          <h4>Launch Pad Services</h4>
        </center>
        <p>
          <center>
            Yep! We even provide project launch pad services too! From concept, 
            art and design, to contract creation and social media campaign and
            promotions, KronicLabz has you covered there as well.
          </center>
        </p>
      </Column>
    </Grid>
  </ServicesWrapper>

export default Services
