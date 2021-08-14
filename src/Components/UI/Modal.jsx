import React from "react";
import { createPortal } from "react-dom";

const Backdrop = ({ onHideCart }) => {
   return <div onClick={onHideCart} className="backdrop" />;
};

const ModalOverlay = ({ children }) => {
   return (
      <div className="modal">
         <div className="content">{children}</div>
      </div>
   );
};

const Modal = ({ children, onHideCart }) => {
   const portalElement = document.getElementById("overlays");
   return (
      <>
         {createPortal(<Backdrop onHideCart={onHideCart} />, portalElement)}
         {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
      </>
   );
};

export default Modal;
