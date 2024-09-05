import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [addNote, setAddNote] = useState([]);

  function pushNote(newNotes){
    setAddNote(prevNote => {
      return [...prevNote, newNotes];
    })
  }

  function popNote(id){
    setAddNote(prevNote => {
      return prevNote.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={pushNote}/>
      {addNote.map((noteItems, index) => {
        return <Note 
          key={index}
          id={index}
          title={noteItems.title}
          content={noteItems.content}
          onDel={popNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
