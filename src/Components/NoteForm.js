// src/components/NoteForm.js
import React, { useState } from 'react';

function NoteForm({ onAdd }) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteTitle.trim() && noteContent.trim()) {
      onAdd(noteTitle, noteContent);
      setNoteTitle('');
      setNoteContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
