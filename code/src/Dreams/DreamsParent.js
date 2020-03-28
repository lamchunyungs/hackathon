import React from "react";

import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

function DreamsParent({
  handleChangeScene,
  handleChangeAmount,
  handleClickOpen
}) {
  const [child, setChild] = React.useState("menu");
  return (
    <>
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
            Dreams
          </DialogTitle>
          <DialogContent
            style={{
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "120px",
              textAlign: "center"
            }}
          >
            <Button
              onClick={() => {
                handleChangeScene("home_good");
                handleChangeAmount(0);
                handleClickOpen();
              }}
              variant="contained"
              style={{
                marginTop: 30,
                marginLeft: 0,
                width: "250px",
                minHeight: "80px",
                fontSize: 18,
                background: "white",
                boxShadow: "0px 20px 40px rbga(0,0,0,0.15)",
                borderRadius: "20px",
                placeSelf: "center",
                display: "grid",
                gridTemplateColumns: "1fr",
                justifyContent: "center"
              }}
            >
              Move to a big house
              <HeadBar>
                <Coin src={require("../assets/money.svg")} />
                <Amount>500000</Amount>
                <Health src={require("../assets/heart.svg")} />
                <HealthLevel>n/a</HealthLevel>
              </HeadBar>
            </Button>

            <Button
              onClick={() => {
                handleChangeScene("skydive");
                handleChangeAmount(0);
                handleClickOpen();
              }}
              variant="contained"
              style={{
                width: "250px",
                minHeight: "80px",
                fontSize: 18,
                background: "white",
                boxShadow: "0px 20px 40px rbga(0,0,0,0.15)",
                borderRadius: "20px",
                marginTop: 30,
                placeSelf: "center",
                display: "grid",
                gridTemplateColumns: "1fr",
                justifyContent: "center"
              }}
            >
              Skydive
              <HeadBar>
                <Coin src={require("../assets/money.svg")} />
                <Amount>50000</Amount>
                <Health src={require("../assets/heart.svg")} />
                <HealthLevel>9</HealthLevel>
              </HeadBar>
            </Button>
            <Button
              onClick={() => {
                handleChangeScene("travel");
                handleChangeAmount(0);
                handleClickOpen();
              }}
              variant="contained"
              style={{
                width: "250px",
                minHeight: "80px",
                fontSize: 18,
                background: "white",
                boxShadow: "0px 20px 40px rbga(0,0,0,0.15)",
                borderRadius: "20px",
                marginTop: 30,
                placeSelf: "center",
                display: "grid",
                gridTemplateColumns: "1fr",
                justifyContent: "center"
              }}
            >
              Travel around the world
              <HeadBar>
                <Coin src={require("../assets/money.svg")} />
                <Amount>100000</Amount>
                <Health src={require("../assets/heart.svg")} />
                <HealthLevel>8</HealthLevel>
              </HeadBar>
            </Button>
          </DialogContent>
        </div>
      ) : null}
    </>
  );
}
const ModalBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export default DreamsParent;
const HeadBar = styled.div`
  height: 30px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  place-self: center;
`;

const Coin = styled.img`
  height: 17px;
  width: 17px;
`;
const Amount = styled.text`
  margin-left: 3px;
`;
const HealthLevel = styled.text`
  margin-left: 3px;
`;

const Health = styled.img`
  height: 17px;
  width: 20px;
  margin-left: 5px;
`;
