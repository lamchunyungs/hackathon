import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function MissionsParent() {
    const [child, setChild] = React.useState("menu");
    return (
        <><DialogTitle id="alert-dialog-title"><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 45 }}>Missions</div></DialogTitle>
            <DialogContent >
                <Card >
                    <div >
                        <CardContent>
                            <div style={{ margin: 100, marginTop: 20 }}><Button onClick={() => { setChild("savings") }} variant="contained" style={{ minWidth: '300px', minHeight: '80px', fontSize: 30 }}>Savings</Button></div>
                            <div style={{ margin: 100 }}><Button onClick={() => { setChild("investment") }} variant="contained" style={{ minWidth: '300px', minHeight: '80px', fontSize: 30 }}>Investment</Button></div>
                            <div style={{ margin: 100 }}><Button onClick={() => { setChild("quizzes") }} variant="contained" style={{ minWidth: '300px', minHeight: '80px', fontSize: 30 }}>Quizzes</Button></div>
                        </CardContent>
                    </div>
                </Card>
            </DialogContent></>
    );
}

export default MissionsParent;
