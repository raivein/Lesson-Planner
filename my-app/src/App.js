import { useState } from 'react'

import './App.css';
import Modal from "./Components/Modal";
import React from 'react';

function App() {

  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="App">
      <h1> Dashboard </h1>
      <button className="openModalBtn" 
      onClick={() => {
        setOpenModal(true);
        }} id = "openBtn"
        >
          Delete
          </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;

