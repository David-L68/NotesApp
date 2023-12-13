import "./App.css";
import Form1 from "./components/Form";
import { useState } from "react";
import ItemList from "./components/ItemList";
import NoteModal from "./components/Modal";
import Button from "react-bootstrap/Button";

function App() {
  const [Items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [modalItem, setmodalItem] = useState({});

  function deleteItem(id) {
    const areYouSure = window.confirm("Are you sure you want to delete Note ?");
    if (areYouSure === true) {
      setItems((items) => items.filter((item) => item.id !== id));
    }
  }

  function handleShowModal(item) {
    setShow(true);
    // console.log(item);
    setmodalItem(item);
  }

  const handleClose = () => {
    setShow(false);
  };

  function addNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function updateModalItem(item) {
    // console.log(item);
    const objIndex = Items.findIndex((obj) => obj.id == item.id);
    // console.log(objIndex);
    setItems((items) => items.toSpliced(objIndex, 1, item));
    handleClose();
  }

  return (
    <div className="App">
      <h1 className="text-info bg-dark">Notes App</h1>
      <Form1 onaddItem={addNewItem} updateModalItem={updateModalItem} />
      <ItemList
        items={Items}
        onDeleteItem={deleteItem}
        handleShowModal={handleShowModal}
      />
      <NoteModal
        onCloseModal={handleClose}
        modalItem={modalItem}
        show={show}
        handleShowModal={handleShowModal}
        updateModalItem={updateModalItem}
      />
    </div>
  );
}

export default App;
