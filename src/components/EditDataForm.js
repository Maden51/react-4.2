import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';

function EditDataForm({editNote, handleEditSaveChange, handleEditFormSubmit}) {
  return (
    <Form onSubmit={handleEditFormSubmit} className="form">
    <FormGroup className="formGroup">
        <Label htmlFor="date">Дата(ДД.ММ.ГГГГ)</Label>
        <Input 
            type="text" 
            id="date" 
            name="date" 
            value={editNote.date}
            onChange={handleEditSaveChange} 
            placeholder="Введите дату"
        />
    </FormGroup>
    <FormGroup className="formGroup">
        <Label htmlFor="distance">Пройдено км</Label>
        <Input 
            type="text" 
            id="distance" 
            name="distance"
            value={editNote.distance} 
            onChange={handleEditSaveChange} 
            placeholder="Введите расстояние"
        />
    </FormGroup>
    <Button color="primary" className="submit_btn">ОК</Button>
</Form>
  )
}

EditDataForm.propTypes = {
    editNote: PropTypes.object,
    handleEditSaveChange: PropTypes.func,
    handleEditFormSubmit: PropTypes.func
}

export default EditDataForm
