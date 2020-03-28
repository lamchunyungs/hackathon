import React from "react";
import styled from "styled-components";

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Background>
          <BackgroundImage src={require("../assets/skydive.png")} />
        </Background>
        <HeadBar>
          <Coin src={require("../assets/money.svg")} />
          <Amount>100,000</Amount>
          <Health src={require("../assets/heart.svg")} />
          <HealthLevel>9</HealthLevel>
        </HeadBar>
        <Character src={require("../assets/elderly.svg")} />
      </Layout>
    );
  }
}

export default Home;
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
  width: 400 px;
  transform: translateX(-100px) translateY(-5px);
  overflow: hidden;
`;

const Character = styled.img`
  height: 462px;
  width: 368px;
  position: absolute;
  bottom: 10px;
  left: 30px;
`;

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
