import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
//this is only for bacgroung overlay
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

//here we get all element from cart ul,did,div
const ModalOverlay = (props) => {
  //console.log(props.children);
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays"); // this id in index.html file where we show the elements

const Modal = (props) => {
  //console.log(props);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
