import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { AddNote } from "./AddNote";
// import notes from '../notes'




function App() {
  const [notes, setNotes] = useState([])


  // receive a new note from AddNote component 
  const addNote = (note) => {

    setNotes(prevNotes => {
      return [...prevNotes, note];
    })

  }


  const deleteNote = (id) => {

    setNotes(prevNotes => {
      // loop trough previos notes
      return prevNotes.filter((noteItem, index) => {
        // return all the note where the index doesn't equal the id od the deleted item
        return index !== id;
      })
    })

  }

  return (
    <div>
      <Header />
      <AddNote
        onAdd={addNote}
      />
      {notes.map((singleNote, index) => {

        return (
          <Note
            key={index}
            id={index}
            title={singleNote.title}
            content={singleNote.content}
            onDelete={deleteNote}
          />
        )

      })}
      <Footer />
    </div>
  );
}

export default App;
