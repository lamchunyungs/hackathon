import React from "react";
import styled, { keyframes } from "styled-components";
import DrawerRoot from "../DrawerRoot";
import "./Home.css";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import MissionsParent from "../Missions/MissionsParent";
import DreamsParent from "../Dreams/DreamsParent";
import CollectionsParent from "../Collections/CollectionsParent";
import { Typography } from "@material-ui/core";
function Home() {
  const [amount, setAmount] = React.useState(0);
  const handleChangeAmount = a => {
    setAmount(a);
  };
  const [health, setHealth] = React.useState(9);
  const handleChangeHealth = h => {
    setHealth(h);
  };
  const [scene, setScene] = React.useState("home_bad");
  const handleChangeScene = h => {
    setScene(h);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    if (!open) {
      setChild("menu");
    }
    setOpen(!open);
    var menu = document.getElementById("MenuIcon");

    document.getElementById("menu-line-bottom").classList.toggle("open");
    document.getElementById("menu-line-top").classList.toggle("open");
    document.getElementById("menu-icon").classList.toggle("open");
    document.getElementById("menu-line-middle").classList.toggle("open");
  };
  const [child, setChild] = React.useState("menu");
  var modal = <></>;
  if (open) {
    modal = (
      <Dialog
        open={open}
        onClose={handleClickOpen}
        BackdropProps={{
          classes: {}
        }}
        PaperProps={{
          style: {
            borderRadius: "14px",
            height: "80vh",
            width: "80vh",
            background: "none",
            boxShadow: "none",
            overflow: "hidden"
          }
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {child == "menu" ? (
          <div style={{ height: "100%", width: "100%" }}>
            <ModalBackground src={require("../assets/custom_modal.svg")} />
            <DialogTitle
              id="alert-dialog-title"
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "300",
                marginTop: "20px"
              }}
              disableTypography
            >
              Menu
            </DialogTitle>
            <DialogContent
              style={{
                display: "grid",
                justifyContent: "center",
                textAlign: "center",
                gridTemplateColumns: "120px"
              }}
            >
              <Button
                onClick={() => {
                  setChild("missions");
                }}
                variant="contained"
                style={{
                  marginTop: 60,
                  marginLeft: 0,
                  width: "250px",
                  minHeight: "80px",
                  fontSize: 26,
                  background: "white",
                  boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                  borderRadius: "20px",
                  placeSelf: "center"
                }}
              >
                Missions
              </Button>

              <Button
                onClick={() => {
                  setChild("dreams");
                }}
                variant="contained"
                style={{
                  width: "250px",
                  minHeight: "80px",
                  fontSize: 26,
                  background: "white",
                  boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                  borderRadius: "20px",
                  marginTop: 30,
                  placeSelf: "center"
                }}
              >
                Dreams
              </Button>

              <Button
                onClick={() => {
                  setChild("collections");
                }}
                variant="contained"
                style={{
                  minWidth: "250px",
                  minHeight: "80px",
                  fontSize: 26,
                  background: "white",
                  boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                  borderRadius: "20px",
                  marginTop: 30,
                  marginBottom: 80,
                  placeSelf: "center"
                }}
              >
                Collections
              </Button>
            </DialogContent>
          </div>
        ) : null}
        {child == "missions" ? (
          <MissionsParent
            handleChangeAmount={handleChangeAmount}
            handleChangeHealth={handleChangeHealth}
            handleClickOpen={handleClickOpen}
          />
        ) : null}
        {child == "dreams" ? (
          <DreamsParent
            handleChangeAmount={handleChangeAmount}
            handleChangeHealth={handleChangeHealth}
            handleClickOpen={handleClickOpen}
            handleChangeScene={handleChangeScene}
          />
        ) : null}
        {child == "collections" ? <CollectionsParent /> : null}
      </Dialog>
    );
  }
  return (
    <Layout>
      >
      {scene === "home_bad" || scene === "home_good" ? (
        <div className="MenuIcon" id="menu-icon" onClick={handleClickOpen}>
          <span
            className="MenuIcon-Line MenuIcon-Top"
            id="menu-line-top"
          ></span>
          <span
            className="MenuIcon-Line MenuIcon-Middle"
            id="menu-line-middle"
          ></span>
          <span
            className="MenuIcon-Line MenuIcon-Bottom"
            id="menu-line-bottom"
          ></span>
        </div>
      ) : null}
      <Background>
        {scene == "home_bad" ? (
          <BackgroundImage src={require("../assets/home_bad.png")} />
        ) : null}
        {scene == "home_good" ? (
          <BackgroundImage src={require("../assets/home_good.png")} />
        ) : null}
        {scene == "travel" ? (
          <TravelBackgroundImage src={require("../assets/travel.png")} />
        ) : null}
        {scene == "skydive" ? (
          <SkydiveBackgroundImage src={require("../assets/skydive.png")} />
        ) : null}
      </Background>
      <div>
        >
        {scene === "home_bad" || scene === "home_good" ? (
          <HeadBar>
            <Coin src={require("../assets/money.svg")} />
            <Amount>{amount}</Amount>
            <Health src={require("../assets/heart.svg")} />
            <HealthLevel>{health}</HealthLevel>
          </HeadBar>
        ) : (
          <FinishBar
            onClick={() => {
              setScene("home_good");
            }}
          >
            Finish
          </FinishBar>
        )}
      </div>
      >
      {scene === "home_bad" ? (
        <Character src={require("../assets/elderly.svg")} />
      ) : null}
      {scene === "home_good" ? (
        <Character src={require("../assets/elderly.svg")} />
      ) : null}
      {scene === "travel" ? (
        <TravelCharacter src={require("../assets/elderly_travel.svg")} />
      ) : null}
      {scene === "skydive" ? (
        <SkydiveCharacter src={require("../assets/elderly_skydive.svg")} />
      ) : null}
      {modal}
    </Layout>
  );
}

export default Home;
const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  display: block;
  height: 105vh;
  width: 200vw;
  overflow: hidden;
`;
const easeIn = keyframes`
from {
  opacity: 0;
}
to{
  opacity: 1;
}
`;

const MyImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${easeIn};
  animation-duration: 5s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`;
const BackgroundImage = styled(MyImage)`
  opacity: 0;
  height: 105%;
  max-width: 100%;
  object-fit: cover;
  overflow: hidden;
  @media (max-width: 425px) {
    transform: translateX(0px);
  }
`;
const TravelBackgroundImage = styled(MyImage)`
  opacity: 0;
  height: 100%;
  width: 100%;
  @media (max-width: 425px) {
    transform: translateX(-50%) translateY(-5px);
  }
  overflow: hidden;
`;

const TravelCharacter = styled.img`
  height: 462px;
  width: 368px;
  position: absolute;
  bottom: 10px;
  left: 30px;
`;

const SkydiveBackgroundImage = styled(MyImage)`
  opacity: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
const floating = keyframes`
0% {
  transform: translateX(0px);
  transform: translateY(0px);
}
50%{
  transform: translateX(10px);
  transform: translateY(30px);
}
`;
const SkydiveCharacter = styled.img`
  height: 462px;
  width: 368px;
  position: absolute;
  bottom: 120px;
  left: 10px;
  animation: ${floating} 2s linear infinite;
`;
const Character = styled.img`
  height: 462px;
  width: 368px;
  position: absolute;
  bottom: 10px;
  left: 30px;
`;

const FinishBar = styled.div`
  height: 30px;
  width: 100px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
const MyButton = styled.button`
  min-width: 300px;
  min-height: 80px;
  font-size: 30;
  background: white;
  box-shadow: 0px 4px 40px rbga(0, 0, 0, 0.25);
  border-radius: 14px;
`;
const MyDialog = styled(Dialog)`
  height: 80%;
  width: 70%;
  position: absolute;
  top: 100px;
  left: 100px;
  justify-content: center;
  display: none;
  &.MuiPaper-rounded {
    border-radius: 100px;
  }
`;

const ModalBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;
