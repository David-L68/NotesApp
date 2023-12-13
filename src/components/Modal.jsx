import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form1 from "./Form";

const NoteModal = ({ show, onCloseModal, modalItem , updateModalItem }) => {

  // console.log(modalItem);

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={onCloseModal}>
        <Form1 isModalForm={true} modalItem={modalItem} updateModalItem={updateModalItem} />
      </Modal>
    </div>
  );
};

export default NoteModal;
