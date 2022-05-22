import { Box } from '@mui/material';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import useStyles from './modalStyle';
function BackDrop(props) {
  const classes = useStyles();
  return <div className={classes.backdrop} onClick={props.onClose} />;
}
function ModalOverLay(props) {
  const classes = useStyles();
  return <Box className={classes.form_container}>{props.children}</Box>;
}
const portalElement = document.getElementById('overlays');
function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
    </Fragment>
  );
}

export default Modal;
