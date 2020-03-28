import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import styled from "styled-components";

import Investments from './Investments';
import Quiz from './Quiz';
import Savings from './Savings';

function MissionsParent({ handleChangeAmount, handleChangeHealth }) {
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
                        Missions
            </DialogTitle>
                    <DialogContent
                        style={{
                            justifyContent: "center",
                            textAlign: "center"
                        }}
                    >
                        <Button
                            onClick={() => {
                                setChild("savings");
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
                            Savings
              </Button>

                        <Button
                            onClick={() => {
                                setChild("investments");
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
                            Investment
              </Button>

                        <Button
                            onClick={() => {
                                setChild("quizzes");
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
                            Quizzes
              </Button>
                    </DialogContent>
                </div> : null
            }
            {
                child == "savings" ? <Savings /> : null
            }
            {
                child == "investments" ? <Investments handleChangeAmount={handleChangeAmount} handleChangeHealth={handleChangeHealth} /> : null
            }
            {
                child == "quizzes" ? <Quiz /> : null
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

export default MissionsParent;
