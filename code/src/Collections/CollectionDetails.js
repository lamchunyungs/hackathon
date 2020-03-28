import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import styled from "styled-components";
function CollectionsDetails() {
  const [child, setChild] = React.useState("menu");
  return (
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
        Collections
      </DialogTitle>
      <DialogContent
        style={{
          display: "grid",
          gridTemplateColumns: "250px",
          gridGap: "10px",
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
            width: "250px",
            height: "250px",
            fontSize: 30,
            background: "white",
            boxShadow: "0px 20px 40px rbga(0,0,0,0.15)",
            borderRadius: "20px",
            placeSelf: "center"
          }}
          disabled
        >
          <CollectionImg src={require("../assets/indian_hat.svg")} />
        </Button>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
            justifyContent: "start"
          }}
        >
          American Indian Headdress
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto",

            justifyContent: "center",
            textAlign: "center",
            color: "white",
            justifyContent: "start"
          }}
        >
          Rarity: 4/5
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto",

            justifyContent: "center",
            textAlign: "center",
            color: "white",
            justifyContent: "start",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <span> Reward: </span>

            <img
              src={require("../assets/asiamiles_coin.png")}
              style={{
                height: "30px",
                width: "28px",
                marginLeft: 5,
                marginRight: 5
              }}
            />
            <span> 1000 </span>

            <span style={{ marginLeft: 5 }}> or </span>
            <img
              src={require("../assets/convoy_logo.png")}
              style={{
                height: "30px",
                width: "28px",
                marginLeft: 5,
                marginRight: 5
              }}
            />
            <span> discount </span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gridGap: "20px",
            justifyContent: "center",
            textAlign: "center",
            marginTop: 30
          }}
        >
          <Button
            onClick={() => {
              setChild("missions");
            }}
            variant="contained"
            style={{
              width: "120px",
              height: "30px",
              fontSize: 14,
              background: "white",
              boxShadow: "0px 20px 40px rbga(0,0,0,0.15)",
              borderRadius: "14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <span>Trade</span>
          </Button>
          <Button
            onClick={() => {
              setChild("missions");
            }}
            variant="contained"
            style={{
              width: "120px",
              height: "30px",
              fontSize: 14,
              background: "white",
              boxShadow: "0px 20px 40px rbga(0,0,0,0.15)",
              borderRadius: "14px",
              placeSelf: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Redeem
          </Button>
        </div>
      </DialogContent>
    </div>
  );
}

export default CollectionsDetails;

const ModalBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const CollectionImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: 220px;
  width: 220px;
`;
