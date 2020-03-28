import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import styled from "styled-components";

import Correct from './Correct';

function Quiz() {
    const [child, setChild] = React.useState("menu");
    return (
        <>
            {
                child == "menu" ? <div style={{ height: "100%", width: "100%" }}>
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
                            justifyContent: "center",
                            textAlign: "center"
                        }}
                    >
                        <Button
                            onClick={() => {
                                setChild("Correct");
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
                            Convoy's saving insurance
              </Button>

                        <Button
                            onClick={() => {
                                setChild("Wrong");
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
                            High Frequency Trading
              </Button>
                        <Button
                            onClick={() => {
                                setChild("Wrong");
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
                            Stocking up on cash
              </Button>

                    </DialogContent>
                </div> : null
            }
            {
                child == "Correct" ? <Correct /> : null
            }
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
