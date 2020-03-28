import React from "react";

import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

import Correct from "./Correct";

import Wrong from "./Wrong";

function Quiz({ handleChangeAmount, handleChangeHealth, handleClickOpen }) {
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
            Quiz
          </DialogTitle>
          <DialogContent
            style={{
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "120px",
              textAlign: "center"
            }}
          >
            <QuizTitle>
              Which of the followings is typically offered in savings insurance
              plan?
            </QuizTitle>
            <Button
              onClick={() => {
                setChild("wrong");
              }}
              variant="contained"
              style={{
                marginTop: 20,
                marginLeft: 0,
                width: "250px",
                minHeight: "60px",
                fontSize: 18,
                background: "white",
                boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                borderRadius: "20px",
                placeSelf: "center"
              }}
            >
              Stable income for retirement
            </Button>

            <Button
              onClick={() => {
                setChild("wrong");
              }}
              variant="contained"
              style={{
                width: "250px",
                minHeight: "60px",
                fontSize: 18,
                background: "white",
                boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                borderRadius: "20px",
                marginTop: 20,
                placeSelf: "center"
              }}
            >
              Death benefits
            </Button>
            <Button
              onClick={() => {
                setChild("correct");
              }}
              variant="contained"
              style={{
                width: "250px",
                minHeight: "60px",
                fontSize: 18,
                background: "white",
                boxShadow: "0px 4px 100px rbga(0,0,0,0.25)",
                borderRadius: "20px",
                marginTop: 20,
                placeSelf: "center"
              }}
            >
              All of the above
            </Button>
          </DialogContent>
        </div>
      ) : null}
      {child == "correct" ? (
        <Correct
          handleChangeAmount={handleChangeAmount}
          handleChangeHealth={handleChangeHealth}
          handleClickOpen={handleClickOpen}
        />
      ) : null}
      {child == "wrong" ? (
        <Wrong
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

export default Quiz;
const QuizTitle = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 300;
  width: 300px;
  padding: 20px;
  place-self: center;
`;
