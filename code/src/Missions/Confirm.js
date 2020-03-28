import React from "react";

import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Saved from "./Saved";
import Correct from "./Correct";
import Confirm2 from "./Confirm2";
import styled from "styled-components";

function Confirm({ handleChangeAmount, handleChangeHealth, handleClickOpen }) {
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
            Savings
          </DialogTitle>
          <DialogContent
            style={{
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "auto",
              textAlign: "center"
            }}
          >
            <ProductName> Monthly Goal: $2000</ProductName>
            <img
              src={require("../assets/bar_chart_empty.svg")}
              style={{ height: "300px", width: "100px", placeSelf: "center" }}
            />
            <Button
              onClick={() => {
                setChild("refresh");
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
              <span>Refresh</span>
            </Button>
          </DialogContent>
        </div>
      ) : null}
      {child == "refresh" ? (
        <Confirm2
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

const ProductName = styled.div`
  color: white;
  font-size: 26px;
  font-weight: 300;
`;
export default Confirm;
