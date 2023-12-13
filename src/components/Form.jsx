import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import moment from "moment";

const Form1 = ({ onaddItem, isModalForm, modalItem, updateModalItem }) => {
  const time = moment().format("MMMM Do YYYY, h:mm a");
  const [messageItem, setmessageItem] = useState("");
  const [titleItem, setTitleItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      messageItem,
      titleItem: titleItem,
      createdAt: time,
      id: Date.now(),
    };
    onaddItem(newItem);
    setmessageItem("");
    setTitleItem("");
  };

  const onModalFormUpdate = (e) => {
    e.preventDefault();
    const newModalItem = {
      messageItem,
      titleItem: titleItem,
      createdAt: time,
      id: modalItem.id
    }
    updateModalItem(newModalItem);
    setmessageItem("");
    setTitleItem("");
  }

  return (
    <Form onSubmit={isModalForm===true ? onModalFormUpdate : handleSubmit} className="notesForm">
      <Form.Group
        className={!isModalForm ? "mb-3" : "p-3"}
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          className="mb-3"
          type="text"
          value={titleItem}
          placeholder={isModalForm === true ? modalItem.titleItem : "Title"}
          onChange={(e) => setTitleItem(e.target.value)}
        />
        <Form.Control
          placeholder={
            isModalForm === true ? modalItem.messageItem : "Enter your Note"
          }
          value={messageItem}
          as="textarea"
          rows={7}
          cols={50}
          onChange={(e) => setmessageItem(e.target.value)}
          required
        />
      </Form.Group>
      <Button
        className={isModalForm === true ? "mb-3" : ""}
        variant="primary"
        type="submit"
      >
        {isModalForm === true ? "Update Note" : "Add Note"}
      </Button>
    </Form>
  );
};

export default Form1;
