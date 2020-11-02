import React from "react";
import { Paper, TextField, Fab } from '@material-ui/core'

import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

function Note(props) {

  const handleDeleteClick = () => {
    //trigger the function passed form the App js
    props.onDelete(props.id)
  }

  return (
    <Paper className="note">
      <div>
        <h1>{props.title}</h1>
      </div>
      <div>
        <p>{props.content}</p>
      </div>
      <DeleteForeverOutlinedIcon id='dlt-btn' onClick={handleDeleteClick} />

    </Paper>
  );
}

export default Note;
