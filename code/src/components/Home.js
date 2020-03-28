import React from "react";
import styled from "styled-components";
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
            boxShadow: "none"
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
                justifyContent: "center",
                textAlign: "center"
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
                  fontSize: 30,
                  background: "white",
                  boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                  borderRadius: "20px"
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
                  fontSize: 30,
                  background: "white",
                  boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                  borderRadius: "20px",
                  marginTop: 30
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
                  fontSize: 30,
                  background: "white",
                  boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                  borderRadius: "20px",
                  marginTop: 30,
                  marginBottom: 80
                }}
              >
                Collections
              </Button>
            </DialogContent>
          </div>
        ) : null}
        {child == "missions" ? <MissionsParent /> : null}
        {child == "dreams" ? <DreamsParent /> : null}
        {child == "collections" ? <CollectionsParent /> : null}
      </Dialog>
    );
  }
  return (
    <Layout>
      <div className="MenuIcon" id="menu-icon" onClick={handleClickOpen}>
        <span className="MenuIcon-Line MenuIcon-Top" id="menu-line-top"></span>
        <span
          className="MenuIcon-Line MenuIcon-Middle"
          id="menu-line-middle"
        ></span>
        <span
          className="MenuIcon-Line MenuIcon-Bottom"
          id="menu-line-bottom"
        ></span>
      </div>

      <Background>
        <BackgroundImage src={require("../assets/home_good.png")} />
      </Background>
      <HeadBar>
        <Coin src={require("../assets/money.svg")} />
        <Amount>100,000</Amount>
        <Health src={require("../assets/heart.svg")} />
        <HealthLevel>9</HealthLevel>
      </HeadBar>
      <Character src={require("../assets/elderly.svg")} />
      {modal}
    </Layout>
  );
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
