import React, { useState } from 'react'
import { Zoom, TextField, Fab, TextareaAutosize } from '@material-ui/core'
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

      <form className='create-note'>
        <div>
          <TextareaAutosize required value={note.title} onChange={handleChange} name='title' placeholder='Title ...' />
        </div>
        <div>
          <TextareaAutosize required value={note.content} onChange={handleChange} name='content' placeholder='Take a note...' />
        </div>
        <div className='add-btn-container'>
          <Zoom in={true}>
            <Fab className='add-btn' aria-label="add" onClick={submitNote}>
              <AddCircleOutlineOutlinedIcon />
            </Fab>
          </Zoom>
        </div>
      </form>

    </div >

  )
}
