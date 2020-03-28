import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import styled from "styled-components";

import Insurance from './Insurance';

function Correct() {
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
                        <div>Correct!!</div>

                    </DialogContent>
                </div> : null
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

export default Correct;
