// src/components/Note.js
import React from 'react';

function Note({ note, onDelete }) {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <small>{note.date}</small>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
}

export default Note;
