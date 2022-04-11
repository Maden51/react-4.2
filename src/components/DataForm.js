import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { nanoid } from 'nanoid';

function DataForm({ onSubmit }) {
    const [date, setDate] = useState('');
    const [distance, setdistance] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(date) {
            onSubmit({
                id: nanoid(),
                date: date,
                distance: parseFloat(distance) || 0
            });
            setDate('');
            setdistance('')
        }
    }

    const onChangeDataHandler = (e) => {
        setDate(()=> e.target.value);
    }

    const onChangeDistanceHandler = (e) => {
        setdistance(()=> e.target.value);
    }

  return (
    <Form onSubmit={onSubmitHandler} className="form">
        <FormGroup className="formGroup">
            <Label htmlFor="date">Дата(ДД.ММ.ГГГГ)</Label>
            <Input 
                type="date" 
                id="date" 
                name="date" 
                value={date}
                onChange={onChangeDataHandler} 
                placeholder="Введите дату"
            />
            </FormGroup>
            <FormGroup className="formGroup">
                <Label htmlFor="distance">Пройдено км</Label>
                <Input 
                    type="number" 
                    id="distance" 
                    name="distance"
                    value={distance} 
                    onChange={onChangeDistanceHandler} 
                    placeholder="Введите расстояние"
                />
            </FormGroup>
            <Button color="primary" className="submit_btn">ОК</Button>
    </Form>
  )
}

DataForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default DataForm
