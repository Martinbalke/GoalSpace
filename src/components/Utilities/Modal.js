import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import { popupContainerAnimation } from './animations';

function Modal({ close, children, className}) {
  //Credit to Ben Bud github.com/benox3 for this code functionality
  const popupRef = useRef(null);
  useClosePopup(popupRef);
  function useClosePopup(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          close()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }


  return (
    <motion.div variants={popupContainerAnimation} initial='hidden' animate='visible' exit='exit' className={`${className} modal__background`}>
      <div className="modal__reference" ref={popupRef}>
        {children}
      </div>
    </motion.div>
  );
}

export default Modal;