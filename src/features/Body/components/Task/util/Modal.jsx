import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef(null);
  const overlay = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
        overlay.current.style.display = "block";
      },
      close() {
        dialog.current.close();
        overlay.current.style.display = "none";
      },
    };
  });

  return createPortal(
    <>
      <div ref={overlay} className='overlay'></div>
      <dialog ref={dialog} className='modal-no-project'>
        {children}{" "}
      </dialog>
    </>,
    document.getElementById("modal-root")
  );
});

export default Modal;
