"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";

export default function Home() {
  const [notes, setNotes] = useState<string[]>([]);

  function addNote(newNote: string) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <main>
      <Navbar />
      <NoteForm onAdd={addNote} />

      {notes.map((noteItem: any, index) => {
        return (
          <div>
            <NoteCard
              key={index}
              id={index}
              title={noteItem.title}
              description={noteItem.description}
              onDelete={() => setNotes(notes.filter((_, i) => i!== index))}
              onEdit={() => console.log("Edit Note")}
            />
          </div>
        );
      })}
    </main>
  );
}
