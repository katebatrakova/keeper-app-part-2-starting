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

  return (
    <div>
      <Header />
      <AddNote
        onAdd={addNote}

      />
      {notes.map((singleNote) => {

        return (
          <Note
            key={singleNote.id}
            title={singleNote.title}
            content={singleNote.content}
          />
        )

      })}
      <Footer />
    </div>
  );
}

export default App;
