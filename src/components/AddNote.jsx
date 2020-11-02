import React, { useState } from 'react'

export const AddNote = (props) => {
  //creating constant that keeps track of the note title and content
  const [note, setNote] = useState([
    {
      title: 'NOTE 1',
      content: 'This is my first note'
    }])

  const handleChange = (event) => {
    const { name, value } = event.target

    setNote(prev => {
      return {
        //spread all the key-value pairs currently existing in notes
        ...prev,
        [name]: value
      }
    })

  }

  const submitNote = (event) => {
    //pass over the current created note object to be used inside App
    props.onAdd(note)
    //prevent reloading of the page
    event.preventDefault()
  }


  return (

    <div className='add-note'>
      <form>
        <div>
          <input onChange={handleChange} name='title' placeholder='Add a title ...'></input>
        </div>
        <div>
          <input onChange={handleChange} name='content' placeholder='Add content ...'></input>
        </div>
        <button onClick={submitNote}>Add a new note</button>
      </form>
    </div>
  )
}
