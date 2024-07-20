import React from "react";
import "../globals.css"; // Import your global CSS here

function NoteCard(props: any) {
  return (
    <div className="card container mt-5 bg-light border-0">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mt-4">
        <h3 className="card-title fw-bold">{props.title}</h3>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle bg-transparent border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61099.png"
              alt=""
              style={{
                width:'20px',
                height:'20px',
              }}
            />
          </button> 
          <ul className="dropdown-menu border-0">
            <li>
              <button className="dropdown-item text-danger bg-transparent border-0" onClick={props.onDelete}>
                Delete
              </button>
            </li>
          </ul>
        </div>
        </div>
        <p className="card-text text-muted mt-4">{props.description}</p>
        <div>
            <p className="text-secondary float-end fw-bold p-2">a day ago</p>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
