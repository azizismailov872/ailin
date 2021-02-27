import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import './Error.css';

const Error = (props) =>  {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                maxWidth="md"
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent className="error-content">
                    <div className="error-img">
                        <img src="/dashboard/img/icons/error.png" />
                    </div>
                    <h2 className="error-message">{props.message}</h2>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Error;