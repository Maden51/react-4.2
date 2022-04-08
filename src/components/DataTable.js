import React from 'react'
import PropTypes from 'prop-types'
import { Button, Table } from 'reactstrap';

function DataTable({ notes, handleRemove, handleEdit }) {
  const headers = ['Дата(ДД.ММ.ГГГГ)', 'Пройдено км', 'Действия'];

  if(!notes.length) {
    return null;
  }

  const arrNotes = notes.map((note) => note);
  const noteSortedByDate = arrNotes.sort((a, b) => {
    const arr1 = a?.date.split('.');
    const arr2 = b?.date.split('.');
    const d1 = new Date(arr1[2], arr1[1]-1, arr1[0]);
    const d2 = new Date(arr2[2], arr2[1]-1, arr2[0]);
    const r1 = d1.getTime();
    const r2 = d2.getTime();
    return r2 - r1;
  });

  return (
    <Table bordered size="" className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {noteSortedByDate.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.distance}</td>
            <td className="actions">
              <Button onClick={(e) => handleEdit(e, item)}><i className="fa-solid fa-pen "></i></Button>
              <Button onClick={() => handleRemove(item.id)} color="danger"><i className="fa-solid fa-delete-left "></i></Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

DataTable.propTypes = {
  headers: PropTypes.array,
  items: PropTypes.arrayOf(PropTypes.object)
}

export default DataTable
