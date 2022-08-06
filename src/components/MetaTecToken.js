import React from "react";
import styled from "styled-components";

const MetaTecTokenWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: black;
`;

const Header = styled.div`
  padding: 2vh 2vw 2vh 2vw;
  color: #fff;
  background: linear-gradient(to bottom right, #2b3548, #0d1222);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Embed = styled.div`
  width: 100%;
  height: 100%;
`;

const MetaTecToken = () => (
  <MetaTecTokenWrapper>
    <Header>
      <center>
        <h1>MetaTec Token</h1>
      </center>
    </Header>
    <p></p>
    <Column>
      <Embed>
        <iframe
          title="MetaTec Token"
          src="https://kroniclabz.mypinata.cloud/ipfs/QmUfp6thZQTmNKS6tzijJpxdoBe9X7spHwzRjUh3RPTAwF/token-drop.html?contract=0xE50A259592D3BaBbA4d874Ca3EA87E88BC8b086F&chainId=1&theme=dark"
          width="1000px"
          height="600px"
          Style={"max-width:100%"}
          frameborder="14"
        ></iframe>
      </Embed>
    </Column>
  </MetaTecTokenWrapper>
);

export default MetaTecToken;
