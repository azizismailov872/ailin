import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { Progress } from "reactstrap";

import './Progress.css';

const ProgressBar = (props) =>  {
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
                <DialogContent className="progress-content">
                    <div className="progress-title">
                        <h2>Загрузка...</h2>
                    </div>
                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-percentage">
                          <span>{props.value + '%'}</span>
                        </div>
                      </div>
                      <Progress max="100" value={props.value} color="success" />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ProgressBar;