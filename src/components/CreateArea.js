import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e){
        const {name, value} = e.target;
        setNote((prevNote) => {
            return{
            ...prevNote,
            [name]: value
        }});
    }

    function submitNote(e){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        e.preventDefault();
    }

    function Expand(){
      setIsExpanded(true);
    }
  return (
    <div>
      <form className="create-note">
        <input name="title" onClick={Expand} onChange={handleChange} value={note.title} placeholder="Title"/>
        {isExpanded &&
        <textarea name="content" onChange={handleChange} value={note.content} 
          placeholder="Take a note..." rows={isExpanded ? 3 : 1 }/>}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
