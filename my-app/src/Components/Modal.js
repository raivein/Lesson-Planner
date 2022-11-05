import React from 'react';
import "./Modal.css";

function Modal({closeModal}) {
  return (
     <div className="modalBackground"> 
         <div className="modalContainer">
         <div className="titleCloseBtn">
        <button onClick={() => closeModal(false)}>X</button>
        </div>
            <div className="title"> 
                <h1> Deleting a course will permanently delete it from the Dashboard</h1>
            </div>
          <div className="body"> 
                <p>
                Are you sure you want to Delete it?
            </p>
          </div>
          <div className="footer"> 
                <button onClick={() => closeModal(false)} id = "cancelBtn">Cancel</button>
                <button>Continue</button>
      </div>
     </div>
  </div>
  );
}

export default Modal;