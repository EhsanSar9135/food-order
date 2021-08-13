import React from "react";
import { createPortal } from "react-dom";

const Backdrop = () => {
   return <div className="backdrop" />;
};

const ModalOverlay = ({ children }) => {
   return (
      <div className="modal">
         <div className="content">{children}</div>
      </div>
   );
};

const Modal = ({ children }) => {
   const portalElement = document.getElementById("overlays");
   return (
      <>
         {createPortal(<Backdrop />, portalElement)}
         {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
      </>
   );
};

export default Modal;
