import React from "react";

import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import BoughtInsurance from "./BoughtInsurance";

import styled from "styled-components";

function Insurance({
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
              gridTemplateColumns: "300px",
              textAlign: "center"
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "50px"
              }}
            >
              <img
                src={require("../assets/convoy_logo.png")}
                style={{
                  height: "55px",
                  width: "50px",
                  marginLeft: 5,
                  marginRight: 5
                }}
              />
              <ProductName> Convoy康宏 </ProductName>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: "300",
                marginBottom: "50px"
              }}
            >
              Savings Insurance
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                justifyContent: "center",
                fontSize: "20px"
              }}
            >
              Wealth accumulation
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                justifyContent: "center",
                fontSize: "20px"
              }}
            >
              +
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                justifyContent: "center",
                fontSize: "20px",
                marginBottom: "50px"
              }}
            >
              Life protection
            </div>
            <Button
              onClick={() => {
                setChild("bought");
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
              <span>Buy</span>
            </Button>
          </DialogContent>
        </div>
      ) : null}
      {child == "bought" ? (
        <BoughtInsurance
          handleChangeAmount={handleChangeAmount}
          handleChangeHealth={handleChangeHealth}
          handleClickOpen={handleClickOpen}
        />
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

export default Insurance;

const ProductName = styled.div`
  color: white;
  font-size: 26px;
  font-weight: 300;
`;
