import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import styled from "styled-components";

import Confirm from './Confirm';

import TextField from '@material-ui/core/TextField';

function Savings() {
    const [child, setChild] = React.useState("menu")
    const [goal, setGoal] = React.useState("")
    const handleChangeGoal = event => {
        setGoal(event.target.value);
    };
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
                        Savings
            </DialogTitle>
                    <DialogContent
                        style={{
                            justifyContent: "center",
                            textAlign: "center"
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                                textAlign: "center",
                                fontSize: "25px",
                                fontWeight: "300",
                                marginTop: "20px"
                            }}>Set up saving goals</div>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="goal"
                            fullWidth
                            value={goal}
                            onChange={handleChangeGoal}
                            inputProps={{
                                style: {
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: "25px",
                                    fontWeight: "300",
                                    marginTop: "20px"
                                }
                            }}

                        />
                        <Button
                            onClick={() => {
                                setChild("Confirm");
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
                            Confirm
              </Button>


                    </DialogContent>
                </div> : null
            }
            {
                child == "Confirm" ? <Confirm /> : null
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

export default Savings;
