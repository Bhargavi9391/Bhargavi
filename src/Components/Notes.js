// src/components/Notes.js
import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString()
    };
    setNotes([...notes, newNote]);
    setFilteredNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const searchResults = notes.filter(note =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNotes(searchResults);
    setSearchQuery('');
  };

  return (
    <div className="notes-app">
      <h1>Notes App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleSearchClick} className="search-button">Search</button>
      </div>
      <NoteForm onAdd={addNote} />
      <NoteList notes={filteredNotes} onDelete={deleteNote} />
    </div>
  );
}

export default Notes;
