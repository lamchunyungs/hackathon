import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CollectionDetails from "./CollectionDetails";
import styled from "styled-components";
function CollectionsParent() {
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
            Collections
          </DialogTitle>
          <DialogContent
            style={{
              display: "grid",
              gridTemplateColumns: "120px 120px",
              gridGap: "20px",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <Button
              onClick={() => {
                setChild("details");
              }}
              variant="contained"
              style={{
                width: "120px",
                height: "120px",
                fontSize: 30,
                background: "white",
                boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                borderRadius: "20px",
                placeSelf: "center"
              }}
            >
              <CollectionImg src={require("../assets/indian_hat.svg")} />
            </Button>

            <Button
              onClick={() => {
                setChild("details");
              }}
              variant="contained"
              style={{
                width: "120px",
                height: "120px",
                fontSize: 30,
                background: "white",
                boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                borderRadius: "20px",
                placeSelf: "center"
              }}
            >
              <CollectionImg src={require("../assets/parachute.svg")} />
            </Button>

            <Button
              onClick={() => {
                setChild("details");
              }}
              variant="contained"
              style={{
                width: "120px",
                height: "120px",
                fontSize: 30,
                background: "white",
                boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                borderRadius: "20px",
                placeSelf: "center"
              }}
            >
              <CollectionImg src={require("../assets/knitting.svg")} />
            </Button>
            <Button
              onClick={() => {
                setChild("details");
              }}
              variant="contained"
              style={{
                width: "120px",
                height: "120px",
                fontSize: 30,
                background: "white",
                boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                borderRadius: "20px",
                placeSelf: "center"
              }}
            >
              <CollectionImg src={require("../assets/health_check.svg")} />
            </Button>
            <Button
              onClick={() => {
                setChild("details");
              }}
              variant="contained"
              style={{
                width: "120px",
                height: "120px",
                fontSize: 30,
                background: "white",
                boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                borderRadius: "20px",
                placeSelf: "center"
              }}
            >
              <CollectionImg src={require("../assets/arabic.svg")} />
            </Button>
            <Button
              onClick={() => {
                setChild("details");
              }}
              variant="contained"
              style={{
                width: "120px",
                height: "120px",
                fontSize: 30,
                background: "white",
                boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                borderRadius: "20px",
                placeSelf: "center"
              }}
            >
              <CollectionImg src={require("../assets/jp_guy.svg")} />
            </Button>
          </DialogContent>
        </div>
      ) : null}
      {child == "details" ? <CollectionDetails /> : null}
    </>
  );
}

export default CollectionsParent;

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
  height: 90px;
  width: 90px;
`;
