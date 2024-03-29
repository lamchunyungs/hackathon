import React from "react";

import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

import Insurance from "./Insurance";

function Investments({
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
            <Button
              onClick={() => {
                setChild("Insurance");
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
              Insurance
            </Button>

            <Button
              onClick={() => {
                setChild("Fund");
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
              Fund
            </Button>
          </DialogContent>
        </div>
      ) : null}
      {child == "Insurance" ? (
        <Insurance
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

export default Investments;
