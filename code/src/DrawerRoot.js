import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import MissionsParent from './Missions/MissionsParent';
import DreamsParent from './Dreams/DreamsParent';
import CollectionsParent from './Collections/CollectionsParent';

function DrawerRoot() {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setChild("menu")
    };

    const [child, setChild] = React.useState("menu");

    return (
        <>
            {
                !open ? <IconButton color="inherit" style={{ float: 'left' }}
                    onClick={handleClickOpen}>
                    <MenuIcon style={{ minWidth: '80px', minHeight: '80px' }} />
                </IconButton> :
                    <>
                        <IconButton color="inherit" style={{ float: 'left' }}
                            onClick={handleClose}>
                            <CloseIcon style={{ minWidth: '80px', minHeight: '80px' }} />
                        </IconButton>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"

                        >
                            {
                                child == "menu" ? <><DialogTitle id="alert-dialog-title"><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 45 }}>Menu</div></DialogTitle>
                                    <DialogContent >
                                        <Card >
                                            <div >
                                                <CardContent>
                                                    <div style={{ margin: 100, marginTop: 20 }}><Button onClick={() => { setChild("missions") }} variant="contained" style={{ minWidth: '300px', minHeight: '80px', fontSize: 30 }}>Missions</Button></div>
                                                    <div style={{ margin: 100 }}><Button onClick={() => { setChild("dreams") }} variant="contained" style={{ minWidth: '300px', minHeight: '80px', fontSize: 30 }}>Dreams</Button></div>
                                                    <div style={{ margin: 100 }}><Button onClick={() => { setChild("collections") }} variant="contained" style={{ minWidth: '300px', minHeight: '80px', fontSize: 30 }}>Collections</Button></div>
                                                </CardContent>
                                            </div>
                                        </Card>
                                    </DialogContent></> : null
                            }
                            {
                                child == 'missions' ? <MissionsParent /> : null
                            }
                            {
                                child == 'dreams' ? <DreamsParent /> : null
                            }
                            {
                                child == 'collections' ? <CollectionsParent /> : null
                            }
                        </Dialog>
                    </>


            }

        </>

    );
}

export default DrawerRoot;
