import React, { useState } from 'react'
import { Paper, TextField, Fab } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';



export const AddNote = (props) => {
  //creating constant that keeps track of the note title and content
  const [note, setNote] = useState(
    {
      title: '',
      content: ''
    })

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

    //clear the title and content after submitting
    setNote({
      title: "",
      content: ""
    })

    //prevent reloading of the page
    event.preventDefault()
  }


  return (
    <div className='container-create-note'>

      <Paper elevation={3} className='create-note'>
        <h3>Add a new note</h3>
        <div>
          <TextField required value={note.title} onChange={handleChange} name='title' placeholder='Add a title ...' label='Title' />
        </div>
        <div>
          <TextField required multiline value={note.content} onChange={handleChange} name='content' placeholder='Add content ...' label='Content' />
        </div>
        <div className='add-btn-container'>
          <Fab className='add-btn' aria-label="add" onClick={submitNote}>
            <AddCircleOutlineOutlinedIcon />
          </Fab>
        </div>

      </ Paper >
    </div >

  )
}
