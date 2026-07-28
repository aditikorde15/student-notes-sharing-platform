import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const { data, error } = await supabase
      .from("Student_notes")
      .select("id,title,description");

    if (error) {
      console.log(error);
    } else {
      setNotes(data);
    }
  }

  async function addNote() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error } = await supabase.from("Student_notes").insert([
      {
        title,
        description,
        user_id: user.id,
      },
    ]);

    if (error) {
      console.log(error);
    } else {
      setTitle("");
      setDescription("");
      fetchNotes();
    }
  }

  async function deleteNote(id) {
  const { error } = await supabase
    .from("Student_notes")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
    console.log(error);
  } else {
    alert("Note deleted successfully!");
    fetchNotes();
  }
}
  

  function editNote(note) {
    setTitle(note.title);
    setDescription(note.description);
    setEditId(note.id);
  }

  async function updateNote() {
    const { error } = await supabase
      .from("Student_notes")
      .update({
        title,
        description,
      })
      .eq("id", editId);

    if (error) {
      console.log(error);
    } else {
      setTitle("");
      setDescription("");
      setEditId(null);
      fetchNotes();
    }
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
    } else {
      alert("Logout Successful!");
      navigate("/login");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-8">
      <div className="bg-white w-full max-w-4xl p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Student Notes
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 mb-6"
        >
          Logout
        </button>

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <textarea
          placeholder="Note Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <button
          onClick={editId ? updateNote : addNote}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 mb-6"
        >
          {editId ? "Update Note" : "Add Note"}
        </button>

        <hr className="mb-6" />

        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-4 rounded-lg shadow-md mb-4 border"
          >
            <h3 className="text-xl font-bold">{note.title}</h3>

            <p className="text-gray-700 mt-2 mb-4">
              {note.description}
            </p>

            <button
              onClick={() => editNote(note)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600"
            >
              Edit
            </button>

            <button
              onClick={() => deleteNote(note.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;