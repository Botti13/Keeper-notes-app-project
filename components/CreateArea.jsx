import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expandedArea, setExpandedArea] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expandTextArea() {
    setExpandedArea(true)
  }

  return (
    <div>
      <form className="create-note">
       {expandedArea && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          onClick={expandTextArea}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {expandedArea ? "3" : "1"}
        />
        <Zoom in={expandedArea}>
        <Fab onClick={submitNote}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
