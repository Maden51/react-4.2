import React, { useState } from 'react'
import DataTable from './DataTable';
import DataForm from './DataForm';
import EditDataForm from './EditDataForm';

function TrainingDays() {
    const [notes, setNotes] = useState([]);
    const [editNote, setEditNote] = useState({
        date:'',
        distance: '',
        id:''
    });
    const [editNoteId, setEditNoteId] = useState(null);
    
    const onSubmitHandler = (note) => {
        const indexOfDate = notes.findIndex((item) => item.date === note.date);
        if (indexOfDate === -1) {
            setNotes(prevNotes => [...prevNotes, note]);
        } else {
            setNotes(prevNotes => {
                const newNotes = [...prevNotes];
                newNotes[indexOfDate].distance += note.distance;
                return newNotes;
            });
        }
    }

    const handleRemove = (id) => {
        setNotes(prevNotes => prevNotes.filter(item => item.id !== id));
    }

    const handleEdit = (e, item) => {
        e.preventDefault();
        setEditNoteId(item.id)

        const formValues = {
            date: item.date,
            distance: parseFloat(item.distance),
            id: item.id
        }
        setEditNote(formValues);
    }

    const handleEditSaveChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...editNote };
        newFormData[fieldName] = fieldValue;

        setEditNote(newFormData);
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        const editedData = {
            id: editNoteId,
            date: editNote.date,
            distance: parseFloat(editNote.distance)
        };

        const newData = [...notes];
        const index = notes.findIndex((note) => note.id === editNoteId);
        newData[index] = editedData;
        setNotes(newData);
        setEditNote({
            date:'',
            distance: '',
            id:''
        });
        setEditNoteId(null);
    }

  return (
    <div className="container">
        <div className="addForm-container">
        {editNoteId === editNote.id ? (
            <EditDataForm 
                editNote={editNote} 
                handleEditSaveChange={handleEditSaveChange} 
                handleEditFormSubmit={handleEditFormSubmit}
            />
        ) : (
            <DataForm onSubmit={onSubmitHandler} />
        )}
        </div>
            <DataTable notes={notes} handleRemove={handleRemove} handleEdit={handleEdit} />
    </div>
  ) 
}

export default TrainingDays
