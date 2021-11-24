import React from "react";
import Styles from "./index.module.scss";
function Modal({ styleClass, children }) {
  return (
    <div style={styleClass} className={Styles.Modal}>
      {children}
    </div>
  );
}
export default Modal;
