import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


//import notes array,
//create generic map function.
//set format in NOte.jsx
//set map in Note funciton

//Generic map function to create a single note/entry, called from the array.map in App(). It the creates an individual Note.jsx, 
//but allows map to iterate for each array object.
//<Note title={"tuff"} content={"morestuff"}/>
function createNote(note){
    return (
        <Note 
        key={note.key}
        title={note.title}
        content={note.content}
        />
    );
}


function App() {
    return (
        <div>
            <Header />
            <dl>{notes.map(createNote)}</dl>

            <Footer />
        </div>
    );
}

export default App;
