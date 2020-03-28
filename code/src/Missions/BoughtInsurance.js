import React from "react";

import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

import Insurance from "./Insurance";

function BoughtInsurance({
  handleChangeAmount,
  handleChangeHealth,
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
            Investments
          </DialogTitle>
          <DialogContent
            style={{
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "120px",
              textAlign: "center"
            }}
          >
            <CorrectText>Thank you for purchasing;)</CorrectText>
            <HeadBar>
              <Amount>Rewards: </Amount>
              <Coin src={require("../assets/money.svg")} />
              <Amount>100000</Amount>
            </HeadBar>
            <Button
              onClick={() => {
                handleChangeAmount(100000);
                handleClickOpen();
              }}
              variant="contained"
              style={{
                width: "100px",
                height: "30px",
                fontSize: 14,
                background: "white",

                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                placeSelf: "center"
              }}
            >
              <span>Okay</span>
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

export default BoughtInsurance;
const CorrectText = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 500;
  width: 300px;
  padding: 20px;
  place-self: center;
  margin-top: 80px;
`;
const HeadBar = styled.div`
  height: 30px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  place-self: center;
`;

const Coin = styled.img`
  margin-left: 5px;
  height: 17px;
  width: 17px;
`;
const Amount = styled.text`
  margin-left: 3px;
  color: white;
`;
