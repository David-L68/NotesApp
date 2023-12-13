import React from "react";

function Item({ item, onDeleteItem, handleShowModal }) {
  return (
    <div className="d-flex flex-column align-items-center gap-1">
      <li >
        <button
          className="badge bg-success d-flex flex-column align-items-center gap-2 fs-6"
          onClick={() => handleShowModal(item)}
        >
          {item.titleItem ? (
            <span className="h5">Title: {item.titleItem}</span>
          ) : (
            ""
          )}
          <span className="h5">Note: {item.messageItem} </span>
          <span className="h6">({item.createdAt}) </span>
        </button>
      </li>
      <button
        className="ms-1 badge bg-danger"
        onClick={() => onDeleteItem(item.id)}
      >
        Delete Note
      </button>
    </div>
  );
}

export default Item;
