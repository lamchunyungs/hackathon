import React from "react";
import styled from "styled-components";

class Skydive extends React.Component {
  render() {
    return (
      <Layout>
        <Background>
          <BackgroundImage src={require("../assets/skydive.png")} />
        </Background>
        <FinishBar>
          <Text>Finish</Text>
        </FinishBar>
        <Character src={require("../assets/elderly_skydive.svg")} />
      </Layout>
    );
  }
}

export default Skydive;
const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Background = styled.div`
  display: block;
  height: 105vh;
  width: 200vw;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Character = styled.img`
  height: 462px;
  width: 368px;
  position: absolute;
  bottom: 120px;
  left: 10px;
`;

const FinishBar = styled.div`
  height: 30px;
  width: 100px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15px;
  right: 30px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
`;
const Text = styled.span``;

const HeadBar = styled.div`
  height: 30px;
  width: 180px;
  background: white;

  position: absolute;
  top: 15px;
  right: 10px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
`;

const Coin = styled.img`
  height: 17px;
  width: 17px;

  position: absolute;
  top: 7px;
  left: 10px;
`;
const Amount = styled.text`
  position: absolute;
  top: 6px;
  left: 38px;
`;
const HealthLevel = styled.text`
  position: absolute;
  top: 6px;
  left: 150px;
`;

const Health = styled.img`
  height: 17px;
  width: 20px;

  position: absolute;
  top: 7px;
  left: 120px;
`;
