import React from 'react';
import * as moment from 'moment';
import { Table } from 'react-bootstrap';

function TaskList ({ tasks }) {
  const DEFAULT_DATETIME_FORMAT = 'MMMM Do YYYY, h:mm:ss a';
  const classNameByStatus = {
    SUCCESS: 'table-success',
    FAILURE: 'table-error',
    PENDING: 'table-info'
  };
  let tableBody;

  if (tasks.length === 0) {
    tableBody = <tr><td className='text-center' colSpan='4'>No tasks.</td></tr>
  } else {
    tableBody = tasks.map(task => {
      const className = classNameByStatus[task.status];
      return <tr className={className} key={task.id}>
        <th scope='row'>{task.id}</th>
        <td>{task.status}</td>
        <td>{moment(task.created).format(DEFAULT_DATETIME_FORMAT)}</td>
        <td>{moment(task.updated).format(DEFAULT_DATETIME_FORMAT)}</td>
      </tr>
    })
  }

  return (
    <>
      <h2>Tasks</h2>
      <Table>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Status</th>
            <th scope='col'>Created</th>
            <th scope='col'>Updated</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </Table>
    </>
  );
}

export default TaskList;
