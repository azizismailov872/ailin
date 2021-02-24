import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import './Success.css';

const Success = (props) =>  {
    return (
        <div>
            <Dialog
                open={props.open}
                keepMounted
                maxWidth="md"
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent className="success-content">
                    <div className="success-img">
                        <img src="/img/icons/success.png" alt="success" />
                    </div>
                    <h2 className="success-message">{props.message}</h2>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Success;